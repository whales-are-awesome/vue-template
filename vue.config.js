const path = require('path')

module.exports = {
	configureWebpack: {
		resolve: {
			extensions: ['.js', '.json', '.vue', '.ts'],
			alias: {
				'@': path.resolve(__dirname),
				'~': path.resolve(__dirname),
				'@components': path.resolve(__dirname, 'src/components'),
				'@js-res': path.resolve(__dirname, 'src/assets/js/resources'),
				'@functions': path.resolve(__dirname, 'src/js/resources/functions'),
			}
		}
	}
}