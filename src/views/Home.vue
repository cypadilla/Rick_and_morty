<template>
  <div class="home">
    <Characters/>
  </div>
</template>

<script>
// @ is an alias to /src
import Characters from '@/components/Characters.vue'
import api from '@/api'
export default {
  name: 'Home',
  components: {
    Characters
  },

  data(){
      return{
        characters:[]
      }
  },


  created(){
    api.getCharacters()
   .then( characters =>(this.characters = characters) )
  //  .finally(()=> this.isLoading = false)
  }
}
</script>
