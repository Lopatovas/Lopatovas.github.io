<template>
	<div>
		<appPost v-for="post in posts" :post="post"></appPost>
	</div>
</template>

<script>
	import singlePost from './PostPage/PostListItem.vue';

	export default{
		components: {
			appPost: singlePost
		},
		data(){
			return {
				posts: []
			}
		},
		methods: {

		},
		created(){
			this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
				this.posts = data.body.slice(0, 50);
			});
		},
	}
</script>

<style>
	
</style>
