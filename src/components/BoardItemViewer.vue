<template>
	<div class="container">

		<div v-if="!itemToView.title">
			<p class="noItem">
				Click an item to view it's contents				
			</p>

			<example-component/>
		</div>
		<div v-else>
			<h2> {{itemToView.title}} </h2>
			<p> {{itemToView.content}} </p>			
		</div>
	</div>
</template>

<script type="text/javascript">
	import exampleComponent from './ExampleComponent'

	export default {
		props: ['itemToView'],
		data() {
			return {
				// local state

			}
		},
		methods: {
			// methods		
		},
		components: {
			'example-component': exampleComponent
		}
	}
</script>

<style scoped type="text/css">
	h3 {
		text-align: center;
	}
	
	.container {
		padding: 10px;
	}

	.noItem {
		text-align: center;
		color: #a3a9b5;
		font-size: 22px;
	}
</style>