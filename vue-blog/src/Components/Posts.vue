<template>
	<div >
		<div class="card">
  			<h5 class="card-header">{{post.title}}</h5>
  				<div class="card-body">
  					<p class="card-text">{{post.body}}</p>
  					<br>
    				<p class="card-text">{{userInfo.username}}</p>
    				<p class="card-text">{{userInfo.email}}</p>
    				<router-link v-bind:to="'/posteditpage/' + postId" class="btn btn-dark">Edit post!</router-link>
  				</div>
		</div>
		<br>
		<p>Comments:</p>
		<br>
		<div class="card" v-for="comment in comments">
			<h5 class="card-header">{{comment.name}}</h5>
  				<div class="card-body">
  					<p class="card-text">{{comment.body}}</p>
  					<br>
    				<p class="card-text">{{comment.email}}</p>
  				</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				post: {},
				userInfo: {},
				postId: this.$route.params.postId,
				comments: [],
			}
		},
		created(){
			this.$http.get('https://jsonplaceholder.typicode.com/posts/' + this.postId).then(function(data){
				this.post = data.body
					this.$http.get('https://jsonplaceholder.typicode.com/users/' + this.post.userId).then(function(userData){
					this.userInfo = userData.body
				});
			});

			this.$http.get('https://jsonplaceholder.typicode.com/posts/' + this.postId +'/comments').then(function(commenData){
				this.comments = commenData.body
			});
		},
	}
</script>

<style>
</style>