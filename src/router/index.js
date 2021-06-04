import Vue from 'vue'
import VueRouter from 'vue-router'
import AddMovie from '../components/AddMovie.vue';
import AppMovies from '../components/AppMovies.vue';
import AppLogin from '../components/AppLogin.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/add',
  },
  {
    path: '/add',
    name: 'AddMovie',
    component: AddMovie
  },
  {
    path: '/movies',
    name: 'AllMovies',
    component: AppMovies
  },
  {
    path: '/login',
    name: 'login',
    component: AppLogin
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
