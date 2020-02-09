<template>
	<component
		@click="click"
		:is="href ? 'router-link' : 'button'"
		:class="classResult"
		:type="!href && type"
		:to="href">
		<slot/>
	</component>
</template>

<script>
	export default {
		name: `app-button`,
		props: {
			type: {
				type: String,
				default: `button`
			},
			href: String
		},
		methods: {
			click() {
				this.$emit(`click`)
			}
		},
		computed: {
			classResult() {
				let result = ['app-button']

				return result
			}
		}
	}
</script>

<style scoped
       lang="stylus">
	.app-button
		display: inline-flex
		align-items: center
		justify-content: center
</style>