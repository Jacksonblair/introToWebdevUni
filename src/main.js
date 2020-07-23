import Vue from 'vue'
import App from './App.vue'

import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    items: [
    	{
    		title: 'An item',
    		content: 'Some text'
    	},
    	{
    		title: 'Another item',
    		content: 'Another some text'
    	}
    ]
  },
  mutations: {
    // increment (state) {
    //   state.count++
    // }
  }
})

new Vue({
  el: '#app',
  store: store,
  render: h => h(App)
});

