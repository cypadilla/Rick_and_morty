<template>
  <div class="home">
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
        page:1,
        pages:1
      }
  },


  created(){
    api.getCharacters()
   .then( data => {
     this.characters = data.results
     this.pages = data.info.pages

    //  console.log(data.info)
   })
  //  .finally(()=> this.isLoading = false)
  },

  
}
</script>
