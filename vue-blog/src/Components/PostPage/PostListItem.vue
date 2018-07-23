<template>
	<div class="card">
		<div class="card">
  			<h5 class="card-header">{{post.title}}</h5>
  				<div class="card-body">
    				<p class="card-text">{{post.body | snippet}}</p>
    				<router-link v-bind:to="'/postpage/' + post.id" class="btn btn-dark">View post!</router-link>
  				</div>
		</div>
	</div>
</template>

<script>
	export default{
		props: ['post'],
	}
</script>