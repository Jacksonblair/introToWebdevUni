<template>
	<div class="item" @click="() => clickedItem(index)">
		<div class="title">{{item.title}}</div>
		<div class="content">{{item.content}}</div>
	</div>
</template>

<script type="text/javascript">
	
	export default {
		props: ['item', 'index'],
		methods: {
			clickedItem(itemIndex) {
				this.$emit('clickedItem', itemIndex)
			}
		}
	}

</script>

<style scoped>
	.item {
		height: 80px;
		margin: 10px 0px;
		margin-left: 0%;
		margin-right: 5%;
		border: 1px solid grey;
		transition: 0.3s all;
		padding: 1%;
	}

	.item .title {
		font-weight: bold;
		font-size: 20px;
	}

	.item:hover {
		margin-right: 2%;
		margin-left: 3%;
	}

	.item p {
		margin: 0;
		padding: 0;
	}
</style>