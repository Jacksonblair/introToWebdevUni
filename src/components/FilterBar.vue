<template>
	<div class="container">
		<input 
		class="fuzzysearch" 
		type="text" 
		:value="searchString"
		@input="updateFuzzySearch($event.target.value)"
		placeholder="Search...">
	</div>
</template>

<script type="text/javascript">
	import { mapState } from 'vuex'

	export default {
		data() {
			return {
				// local state
			}
		},
		methods: {
			updateFuzzySearch(_searchString) {
				this.$store.commit('setSearchString', _searchString)
			}
		},

		// State from central store
		computed: mapState({
			searchString: state => state.searchString
		})
	}

</script>

<style scoped type="text/css">
	.container {
		display: block;
		margin: 5px;
		height: 40px;
		border: 1px solid #cccccc;
		position: relative;
	}

	.fuzzysearch {
		position: relative;
		height: 80%;
		top: 10%;
		margin: 0px 10px;
		top: ;
		/* margin: 0px; */
		box-sizing: border-box;
		border: 1px solid #cccccc;
	}

</style>