<template>
	<div class="board">
		<div :style="{width: '100%' }">
			<filter-bar/>
		</div>
		<div :style="{height: '100%', display: 'flex' }">
			<div class="left-sub-column">
				<h3>Feed</h3>
				<feed-editor-bar @clickedEdit="editClickedHandler"/>
				<board-item v-for="(item, index) in filteredItems"  
				:activeItem="activeItem"
				:item="item"
				:editingFeed="editingFeed"
				:index="index"
				:key="`item${index}`"
				@clickedItem="itemClickedHandler"/>
			</div>      
			<div class="right-sub-column">
				<board-item-viewer :itemToView="itemToView"/>     
			</div>	
		</div>
	</div>
</template>

<script type="text/javascript">
	import FilterBar from './FilterBar.vue'
	import BoardItem from './BoardItem'
	import BoardItemViewer from './BoardItemViewer'
	import FeedEditorBar from './FeedEditorBar'
	import { mapState, mapGetters } from 'vuex'

	export default {

		// local state
		data () {
			return {
				itemToView: {}
			}
		},

		// When component mounts (lifecycle hook)		
		mounted () {
			this.getBoardContent()
		},

		// State from central store
		computed: {
			...mapState({
				activeItem: state => state.activeItem,
				editingFeed: state => state.editingFeed
			}),
			...mapGetters({
				filteredItems: 'getFilteredItems'
			})
		},

		components: {
			'board-item': BoardItem,
			'board-item-viewer': BoardItemViewer,
			'feed-editor-bar': FeedEditorBar,
			'filter-bar': FilterBar
		},
		methods: {
			itemClickedHandler(index) {
				// get item from store.items at index
				this.itemToView = this.filteredItems[index]
				// set active item in store
				this.$store.commit('setActiveItem', index)
			},
			editClickedHandler() {
				this.$store.commit('setEditingFeed')
			},
			getBoardContent() {
                this.$store.dispatch('boardContentRequest')
                .then(() => {
                    // do something..
                    // board content probably stored in central store, not here.
                }, (err) => {
                    // promise rejected, do something.
                    console.log(err)
                })
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
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.left-sub-column {
		display: inline-block;
		width: 40%;
		height: 100%;
		box-sizing: border-box;
		border-right: 5px solid whitesmoke;
	}

	.right-sub-column {
		display: inline-block;
		width: 60%;
		height: 100%;
		box-sizing: border-box;
	}

</style>

