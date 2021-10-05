import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CharacterDetail from '@/views/CharacterDetail'
import EpisodeDetail from '@/views/EpisodeDetail'

Vue.use(VueRouter)

const routes = [
  //Ruta principal
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  //Ruta para conocer los detalles del personaje, recibe un id
  {
    path:'/character/:id',
    name:'character-detail',
    component:CharacterDetail
  },
    //Ruta para conocer los detalles del episodio, recibe un id
  {
    path:'/episode/:idEpisode',
    name:'episode-detail',
    component:EpisodeDetail
  },
  //Ruta de error, el usuario sera redirigido hacia el componente Home
  {
    path: "*",
    name: "error",
    component: Home,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
