<template>
  <CardCharacter :character="character"/>
</template>

<script>
import CardCharacter from '@/components/CardCharacter.vue'
import api from '@/api'
export default {
 name:"CharacterDetatil",
 components:{CardCharacter},
 data (){
     return{
         character:[]
     }
 },

 created(){
     this.getCharacter()
 },

 methods:{
    getCharacter(){
        const id = this.$route.params.id
        Promise.all ( [api.getCharacter(id) ])
        .then( (character) => this.character = character )
    }
 }
}
</script>

<style>

</style>