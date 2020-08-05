import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

import Board from './components/Board.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'

import fuzzysearch from 'fuzzysearch'

Vue.use(Vuex)
Vue.use(VueRouter)

const routes = [
	{ path: '/', component: Board },
	{ path: '/login', component: Login },
	{ path: '/register', component: Register }
]

const router = new VueRouter({
	routes: routes
})

const store = new Vuex.Store({
	state: {
		editingFeed: false,
		searchString: '',
		activeItem: null,
		items: [
			{
				title: 'An item',
				content: 'Some text',
				author: 'Steve',
				category: 0,
				day: '15',
				month: 'JAN'
			},
			{
				title: 'Another item',
				content: 'Another some text',
				author: 'Steve',
				category: 1,
				day: '20',
				month: 'FEB'
			},
			{
				title: 'Another item',
				content: 'Another some text',
				author: 'Steve',
				category: 1,
				day: '20',
				month: 'FEB'
			},
			{
				title: 'Another item',
				content: 'Another some text',
				author: 'Steve',
				category: 1,
				day: '20',
				month: 'FEB'
			},
			{
				title: 'Another item',
				content: 'Another some text',
				author: 'Steve',
				category: 1,
				day: '20',
				month: 'FEB'
			},
			{
				title: 'Another item',
				content: 'Another some text',
				author: 'Steve',
				category: 1,
				day: '20',
				month: 'FEB'
			},
			{
				title: 'Another item',
				content: 'Another some text',
				author: 'Steve',
				category: 1,
				day: '20',
				month: 'FEB'
			},
			{
				title: 'Another item',
				content: 'Another some text',
				author: 'Steve',
				category: 1,
				day: '20',
				month: 'FEB'
			},
			{
				title: 'Another item',
				content: 'Another some text',
				author: 'Steve',
				category: 1,
				day: '20',
				month: 'FEB'
			},
			{
				title: 'Another item',
				content: 'Another some text',
				author: 'Steve',
				category: 1,
				day: '20',
				month: 'FEB'
			},
			{
				title: 'Another item',
				content: 'Another some text',
				author: 'Steve',
				category: 1,
				day: '20',
				month: 'FEB'
			}
		]	
	},

	mutations: {
		// increment (state) {
		//   state.count++
		// }
		setActiveItem(state, index) {
			// console.log(`Setting active item to index: ${index}`)
			state.activeItem = index
		},
		setSearchString(state, searchString) {
			// console.log(`Updating searchString to: ${searchString}`)
			state.searchString = searchString
		},
		setEditingFeed(state) {
			state.editingFeed = !state.editingFeed
		}
	},

	getters: {

		getFilteredItems: state => {
			let filteredItems = [...state.items]

			if (state.searchString) {
				return filteredItems.filter( item => {
					return (
						fuzzysearch(state.searchString, item.title) ||  
						fuzzysearch(state.searchString, item.content)
					)
				})
			} else {
				return filteredItems
			}

		}

	}

})

new Vue({
	el: '#app',
	router: router,
	store: store,
	render: h => h(App)
});

