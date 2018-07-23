<template>
	<div class="container">
		<appHeader></appHeader>
		<div class="row">
			<div class="col-md-12">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
	import Header from './Components/Header.vue';
	export default{
		components: {
			appHeader: Header
		}
	}
</script>

<style>
</style>
