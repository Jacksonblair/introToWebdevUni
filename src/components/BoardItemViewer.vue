<template>
	<div>
		<h3> Board item viewer </h3>
		<p>{{itemToView.content}}</p>
	</div>
</template>

<script type="text/javascript">
	export default {
		props: ['itemToView']
	}
</script>