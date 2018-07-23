<template>
	<div>
		<div class="text-center">
			<br>
			<div v-if="success">
				<h3>Success! Your post has been submitted!</h3>
			</div>
			<div v-else>
				<h3>Add a new post!</h3>
			</div>
		</div>
		<br>
		<form v-if="!success">
			<input class="form-control" type="text" placeholder="Post Title" v-model="blogPost.postTitle">
			<br>
			<textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Post content" rows="12" v-model="blogPost.postContent"></textarea>
			<br>
			<p>Choose your user:</p>
			<select class="custom-select mr-sm-2" id="inlineFormCustomSelect" v-model="blogPost.postAuthor">
				<option v-for="user in userOptions" :value="user.id">{{user.username}}</option>
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
				userOptions: [],
				blogPost: {
					postTitle: '',
					postContent: '',
					postAuthor: '',
				},
				success: false
			};
		},

		methods: {
			submit: function() {
				this.$http.post('https://jsonplaceholder.typicode.com/posts', {
					title: this.blogPost.postTitle,
					body: this.blogPost.postContent,
					userId: this.blogPost.postAuthor

				}).then(function(data){
					console.log(data);
					this.success = true;
				});
			}
		},
		created(){
			this.$http.get('https://jsonplaceholder.typicode.com/users').then(function(userData){
					this.userOptions = userData.body
				});
		}
	}
</script>