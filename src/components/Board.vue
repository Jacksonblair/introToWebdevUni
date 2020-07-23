<template>
	<div class="board">
		<div class="left-sub-column">
			<h3>Feed</h3>
			<board-item v-for="(item, index) in items" 
			:item="item"
			:index="index"
			:key="`item${index}`"
			@clickedItem="itemClickedHandler"/>
		</div>      
		<div class="right-sub-column">
			<board-item-viewer :itemToView="itemToView"/>     
		</div>
	</div>
</template>

<script type="text/javascript">
	import BoardItem from './BoardItem'
	import BoardItemViewer from './BoardItemViewer'
	import { mapState } from 'vuex'

	export default {
		data () {
			return {
				itemToView: {}				
			}
		},
		components: {
			'board-item': BoardItem,
			'board-item-viewer': BoardItemViewer
		},
		computed: mapState({
			items: state => state.items
		}),
		methods: {
			itemClickedHandler(index) {
				// this.$store.commit('increment')
				// console.log(this.$store.state.count)
				this.itemToView = this.$store.state.items[index]
			}
		}
	}

</script>

<style scoped>
	
	h3 {
		text-align: center;
	}

	.board {
		width: 100%;
		display: flex;
	}

	.left-sub-column {
		display: inline-block;
		width: 50%;
		height: 100%;
		box-sizing: border-box;
		border-right: 5px solid whitesmoke;
	}

	.right-sub-column {
		display: inline-block;
		width: 50%;
		height: 100%;
		box-sizing: border-box;
	}

</style>

