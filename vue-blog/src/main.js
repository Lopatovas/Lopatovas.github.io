import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import {routes} from './routes';
import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes
});

Vue.filter('snippet', function(value){
	return value.slice(0, 100) + '...';
});

new Vue({
  el: '#app',
  router,
  data: {
  	posts: []
  },
  methods: {
			fetchData: function(){
  				this.$http.get('/posts')
  				.then(response =>{
  					return response.json();
  				})
  				.then(data => {
  					const resultArray = [];
  					for(let key in data){
  						resultArray.push(data[key]);
  					}
  					this.posts = resultArray;
  				});
  		}
  	},
  	beforeMount(){
  		this.fetchData();
  	},
  render: h => h(App)
})
