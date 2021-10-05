<template>
  <div class="home">
    <!-- Envio del personaje por props -->
    <Characters :characters="characters"/>

  </div>
</template>

<script>
// @ is an alias to /src
import Characters from '@/components/Characters.vue';


import api from '@/api'
export default {
  name: 'Home',
  components: {
    Characters,

  },

  data(){
      return{
        characters:[],
      }
  },

//Se obtienen los personajes cuando se crea el componente 
  created(){
    api.getCharacters()
   .then( data => {
     this.characters = data.results
   })
  },

  
}
</script>
