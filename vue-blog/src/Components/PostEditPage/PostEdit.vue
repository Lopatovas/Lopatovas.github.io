<template>
	<div>
		<div class="text-center">
			<br>
			<div v-if="success">
				<h3>Success! Your post has been edited!</h3>
			</div>
			<div v-else>
				<h3>Edit an existing post!</h3>
			</div>
		</div>
		<br>
		<form v-if="!success">
			<input class="form-control" type="text" placeholder="Post Title" v-model="blogPost.postTitle">
			<br>
			<textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Post content" rows="12" v-model="blogPost.postContent"></textarea>
			<br>
			<p>Choose your user:</p>
			<select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
				<option :value="userInfo.username" selected>{{userInfo.username}}</option>
      		</select>
		</form>
		<br>
		<div v-if="!success">
			<button type="button" class="btn btn-dark" @click="submit">Post!</button>
		</div>
		<div v-else>
			<router-link to="/" class = "btn btn-dark">Homepage</router-link>
		</div>
	</div>
</template>

<script>
	export default{
		data: function(){
			return{
				blogPost: {
					postTitle: '',
					postContent: '',
					postAuthor: ''
				},
				userInfo: {},
				postId: this.$route.params.postId,
				success: false
			};
		},
		created(){
			this.$http.get('https://jsonplaceholder.typicode.com/posts/' + this.postId).then(function(data){
				this.blogPost.postTitle = data.body.title,
				this.blogPost.postContent = data.body.body,
				this.blogPost.postAuthor = data.body.userId,
					this.$http.get('https://jsonplaceholder.typicode.com/users/' + this.blogPost.postAuthor).then(function(userData){
						this.userInfo = userData.body
				});
			});
		},
		methods: {
			submit: function() {
				this.$http.put('https://jsonplaceholder.typicode.com/posts/' + this.postId, {
					title: this.blogPost.postTitle,
					body: this.blogPost.postContent,
					userId: this.blogPost.postAuthor


				}).then(function(data){
					console.log(data);
					this.success = true;
				});
			}
		}
	}
</script>

<style>
	
</style>