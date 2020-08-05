<template>
	<div :class="
		[ editingFeed ? ['editing', categoryStyles[item.category]] : 
		[activeItem == index ? 'activeItem' : 'item', categoryStyles[item.category]]]">

		<div class="left">	
			<div v-if="!editingFeed" class="dateBox">
				<div class="day">{{item.day}}</div>
				<div class="month">{{item.month}}</div>
			</div>
			<div v-if="editingFeed" class="checkBox">
				<input type="checkbox" name="">
			</div>
		</div>

		<div class="right" @click="() => clickedItem(index)">
			<div class="category">{{categoryStyles[item.category]}}</div>
			<div class="title">{{item.title}}</div>
			<div class="author">Posted by
				<a href="">
					{{item.author}}
				</a>
			</div>			
		</div>

	</div>
</template>

<script type="text/javascript">
	
	export default {
		data() {
			return {
				categoryStyles: ['REMINDER', 'ANNOUNCEMENT'],
			}
		},
		props: ['item', 'index', 'activeItem', 'editingFeed'],
		methods: {
			clickedItem(itemIndex) {
				this.$emit('clickedItem', itemIndex)
			}
		}
	}

</script>

<style scoped>

	/* Hardcoded categories */
	.REMINDER {
		background: #ffadad;
	}

	.ANNOUNCEMENT {
		background: #adbfff;
	}

	.left, .right {
		display: inline-block;
		height: 100%;
		vertical-align: top;
	}

	.left {
		width: 40px;
	}

	.right {
		width: calc(100% - 40px);
	}

	.activeItem {
		height: auto;
		margin: 10px 0px;
		margin-right: 2%;
		margin-left: 3%;	
		border: 1px solid grey;
		padding: 1%;	
		white-space: nowrap;
	}

	.item {
		height: auto;
		margin: 10px 0px;
		margin-left: 0%;
		margin-right: 5%;
		border: 1px solid grey;
		transition: 0.3s all;
		padding: 1%;
		white-space: nowrap;
	}

	.editing {
		height: auto;
		margin: 10px 0px;
		margin-left: 0%;
		margin-right: 5%;
		border: 1px solid grey;
		transition: 0.3s all;
		padding: 1%;
		white-space: nowrap;	
	}

	.item .title, .activeItem .title, .editing .title {
		font-weight: bold;
		font-size: 20px;
	}

	.item:hover {
		margin-right: 2%;
		margin-left: 3%;
	}

	.item p, .activeItem p, .editing p {
		margin: 0;
		padding: 0;
	}

	.category {

	}

	.dateBox {
		width: 40px;
		height: 40px;
	}

</style>