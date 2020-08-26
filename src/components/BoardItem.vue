<template>
	<div :class="
		[ 
			// If editing feed, all items have same style
			editingFeed ? ['item', 'editing', categoryStyles[item.category]] : 
			// If there is no active item, give default style
			(activeItem == undefined) ? ['item', 'default', categoryStyles[item.category]] : 
			// If activeItem is equal to this items index (it is active), show active item style
			(activeItem == index) ? ['item', 'active', categoryStyles[item.category]] :
			// else show non active style
			['item', 'inactive', categoryStyles[item.category]]
		]">

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

	.item {
		height: auto;
		margin: 10px 0px;
		border: 1px solid grey;
		transition: 0.3s all;
		padding: 1%;
		white-space: nowrap;
	}

	.default {
		margin-left: 2.5%;
		margin-right: 2.5%;
	}

	.active {
		margin-right: 0%;
		margin-left: 5%;
	}

	.inactive {
		margin-right: 2.5%;
		margin-left: 2.5%;
		opacity: 0.75;
	}

	.editing {
		margin-left: 2.5%;
		margin-right: 2.5%;		
	}

	.item .title {
		font-weight: bold;
		font-size: 20px;
	}

	.item:hover {
		margin-right: 0%;
		margin-left: 5%;
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