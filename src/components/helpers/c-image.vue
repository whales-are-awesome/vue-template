<template>
	<picture>
		<source
			:srcset="srcWebp"
			type="image/webp">
		<img
			:class="className"
			:src="srcNormal"
			:alt="alt">
	</picture>
</template>

<script>
	export default {
		name: `w-img`,
		props: {
			src: String,
			alt: String,
			className: {
				type: String,
				default: `img`
			}
		},
		computed: {
			srcWebp() {
				let src = this.src.split(`.`).slice(0, -1).join(`.`)

				return `${src}.webp`
			},
			srcNormal() {
				return `${this.src}`
			}
		}
	}
</script>