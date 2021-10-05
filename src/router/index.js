import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CharacterDetail from '@/views/CharacterDetail'
import EpisodeDetail from '@/views/EpisodeDetail'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/character/:id',
    name:'character-detail',
    component:CharacterDetail
  },
  {
    path:'/episode/:id',
    name:'episode-detail',
    component:EpisodeDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
