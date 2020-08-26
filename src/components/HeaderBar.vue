<template>
	<div class="container">
		<div class="logo">
			LOGO
		</div>
		<div class="links-container">
			<div class="link">
				<router-link to="/"> HOME </router-link>
			</div>
			<div class="link">
				<router-link to="/login"> LOG IN </router-link>
			</div>
			<div class="link">
				<router-link to="/register"> REGISTER </router-link>
			</div>
		</div>
	</div>
</template>

<style scoped type="text/css">

	.container {
		position: relative;
		border-bottom: 1px solid grey;
	}
		
	.logo {
		margin: 0;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translateY(-50%) translateX(-50%);
		font-size: 30px;
	}

	.links-container {
		height: 40px;
		display: flex;
		justify-content: flex-end;
	}

	.link {
		height: 100%;
		border-left: 1px solid whitesmoke;
		padding: 0px 10px;
		display: flex;
		justify-content: center;
		align-items: center;
		transition: 0.3s all;
	}

	.link:hover {
		background: lightgrey;
	}

	.link a {
		text-decoration: none;
		color: darkgrey;
		transition: inherit;
	}

	.link:hover a {
		color: #535353;
	}

	.log-in-button {

	}

</style>