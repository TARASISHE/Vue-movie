import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import MovieDetail from '../views/MovieDetail.vue';
import Forum from '../views/Forum.vue';
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';
import { auth } from '../firebase';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/forum',
      name: 'Forum',
      component: Forum,
      meta: { 
        requiresAuth: true 
      }
    },
    {
      path: '/movie/:id',
      name: 'Movie Detail',
      component: MovieDetail
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
});

router.beforeEach((to, from, next) =>{
  if (to.matched.some((record)=> record.meta.requiresAuth) && !auth.currentUser){
    next('/');
    return;
  } else {
    next();
  } 
});


export default router;
