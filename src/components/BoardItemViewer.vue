<template>
	<div>
		<h3> Board item viewer </h3>
		<h2> {{itemToView.title}} </h2>
		<p> {{itemToView.content}} </p>
	</div>
</template>

<script type="text/javascript">
	export default {
		props: ['itemToView']
	}
</script>

<style scoped type="text/css">
	h3 {
		text-align: center;
	}
</style>