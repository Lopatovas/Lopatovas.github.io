import Home from './Components/HomePage.vue';
import PostPage from './Components/Posts.vue';
import PostEditPage from './Components/PostEditPage/PostEdit.vue';
import PostCreationPage from './Components/PostCreationPage/PostCreation.vue';

export const routes = [
	{path: '/', component: Home},
	{path: '/postpage/:postId', component: PostPage},
	{path: '/posteditpage/:postId', component: PostEditPage},
	{path: '/postcreationpage', component: PostCreationPage}

];