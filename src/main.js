import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import axios from 'axios'

import Board from './components/Board.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'

import fuzzysearch from 'fuzzysearch'

axios.defaults.baseURL = '/api';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

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
		token: localStorage.getItem('user-token') || '',
		status: '',
		editingFeed: false,
		searchString: '',
		activeItem: null,
		items: []	
	},

	mutations: {

		// FEED EDITING MUTATIONS
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
		},

		// FEED CONTENT MUTATIONS
		setItems(state, items) {
			state.items = items
		},

		// AUTH MUTATIONS
		authRequest(state) {
			state.status = 'loading'
		},
		authSuccess(state, token) {
			state.status = 'success'
			state.token = token
		},
		authError(state, /*err*/) {
			state.status = 'error'
			// do something with 'err' ?
		}
	},

	actions: {
		authRequest({commit /*, dispatch*/}, loginDetails) {
			return new Promise((resolve, /*reject*/) => {
				commit('authRequest') // Set state of request in central store


				axios({
					url: '/login', 
					data: loginDetails, 
					method: 'POST'
				}).then((resp) => {
					resolve(resp)
				})


/*				.then((resp) => {
					const token = resp.data.token



					commit('authSuccess', token) // set state of request in central store
					resolve(resp)
				})
				.catch((err) => {
					commit('authError', err)
					

					reject(err)
				})*/
			})
		},
		registerRequest({commit, dispatch}, userDetails) {
			return new Promise((resolve, /*reject*/) => {

				// NOTE: Temporarily avoiding no-unused-vars
				commit
				dispatch

				console.log(userDetails)

				axios({
					url: '/register',
					data: userDetails,
					method: 'POST',
					validateStatus: () => true
				}).then((resp) => {
					resolve(resp)
				})

			})
		},
		boardContentRequest({commit, dispatch}) {
			return new Promise((resolve, /*reject*/) => {
				commit
				dispatch
				axios({
					url: '/home',
					method: 'GET'
				}).then((resp) => {
					console.log(resp)
					commit('setItems', resp.data.posts)

					resolve()
				})
			})
		}
	},
	getters: {

		getFilteredItems: state => {
			let filteredItems = [...state.items]

			if (state.searchString) {
				return filteredItems.filter( item => {
					return (
						fuzzysearch(state.searchString.toLowerCase(), item.title.toLowerCase()) ||  
						fuzzysearch(state.searchString.toLowerCase(), item.content.toLowerCase())
					)
				})
			} else {
				return filteredItems
			}

		},
		isAuthenticated: state => !!state.token,
		authStatus: state => state.status
	
	}

})

Vue.component('an-item', {
	template: `<h1> An item! </h1>`
})

new Vue({
	el: '#app',
	router: router,
	store: store,
	render: h => h(App)
});

