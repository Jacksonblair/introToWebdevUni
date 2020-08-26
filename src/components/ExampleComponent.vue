<template>
	<div> 
		<h2> Enter kg to convert to pounds </h2>
		<input v-model="input"> 	
		<div> {{output}} </div>
	</div>
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				input: 0,
				output: 0
			}
		},
		watch: {
			input: function() {
				this.output = (this.input * 2.205)
			}
		}
	}

</script>