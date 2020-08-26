<template>
	<div>
		<button class="button edit" @click="$emit('clickedEdit')">Edit</button>
		<button class="button delete">Delete</button>		
	</div>
</template>

<script type="text/javascript">
	export default {

	}
</script>

<style scoped type="text/css">
	.button {
		margin: 0px 5px;
	}

	.edit {
		margin-left: 3%;
	}

</style>