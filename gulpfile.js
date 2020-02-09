'use strict';

const gulp = require('gulp');
const gulpif = require('gulp-if');
const replaceName = require('gulp-replace-name');
const clean = require('gulp-clean');
const imagemin = require('gulp-imagemin');
const imageminPngquant = require('imagemin-pngquant');
const imageminZopfli = require('imagemin-zopfli');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminWebp = require('imagemin-webp');
const webp = require('gulp-webp');
const favicons = require('gulp-favicons');
const debug = require('gulp-debug');
const yargs = require('yargs');


const argv = yargs.argv,
	production = !!argv.production,
	paths = {
		images: {
			src: [
				'./src/img/**/*.{jpg,jpeg,png,gif,svg}'
			],
			build: './public/img',
			watch: './src/img/**/*.{jpg,jpeg,png,gif,svg}'
		},
		favicons: {
			src: './src/img/favicon.{jpg,jpeg,png,gif,ico}',
			build: './public/img/favicons'
		}
	};

const server = () => {
	gulp.watch(paths.images.watch, images);
};

const cleanFiles = () => gulp.src('./public/img/**/*.*', {read: false})
.pipe(clean())
.pipe(debug({
	'title': 'Cleaning...'
}));

const webpimages = () => gulp.src(paths.images.src)
.pipe(replaceName(/(jpe?g|png)$/, 'webp'))
.pipe(webp(gulpif(production, imageminWebp({
	lossless: true,
	quality: [0.8, 0.9],
	alphaQuality: 90
}))))
.pipe(gulp.dest(paths.images.build))
.pipe(debug({
	'title': 'WebP images'
}));

const images = () => gulp.src(paths.images.src)
.pipe(gulpif(production, imagemin([
	imageminPngquant({
		speed: 5,
		quality: [0.9, 1]
	}),
	imageminZopfli({
		more: true
	}),
	imageminMozjpeg({
		progressive: true,
		quality: [0.7, 0.8]
	}),
	imagemin.svgo({
		plugins: [
			{removeViewBox: false},
			{removeUnusedNS: false},
			{removeUselessStrokeAndFill: false},
			{cleanupIDs: false},
			{removeComments: true},
			{removeEmptyAttrs: true},
			{removeEmptyText: true},
			{collapseGroups: true}
		]
	})
])))
.pipe(gulp.dest(paths.images.build))
.pipe(debug({
	'title': 'Images'
}))


const favs = () => gulp.src(paths.favicons.src)
.pipe(favicons({
	icons: {
		appleIcon: true,
		favicons: true,
		online: false,
		appleStartup: false,
		android: false,
		firefox: false,
		yandex: false,
		windows: false,
		coast: false
	}
}))
.pipe(gulp.dest(paths.favicons.build))
.pipe(debug({
	'title': 'Favicons'
}));


const dev = gulp.series(cleanFiles, images, webpimages, server)

const prod = gulp.series(cleanFiles, favs, images, webpimages)

module.exports = {
	prod, dev
};

