<template>
  <div>
      <b-container fluid class="p-5 ">
          <b-row>
            <b-col cols="12" md="3" sm="6" class="center" align-h="center"
            v-for="(character, index) in characters"
            :key="index"
            >
                <b-card-group deck>
                    <b-card
                        :title = "character.name"
                        :img-src= "character.image"
                        :img-alt= "character.name"
                        img-top
                        tag="article"
                        style="max-width: 20rem;"
                        class="mb-4 text-center"
                    >   
                        <b-button 
                         pill variant="success"
                         :to="{name:'character-detail', params:{id:character.id}}">
                            Ver detalle
                         </b-button>
                    </b-card>
                </b-card-group>
            </b-col>
            <infinite-loading @infinite="getCharacters"></infinite-loading>
          </b-row>
      </b-container>
  </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading';
import api from "@/api";

export default {
    name: 'Characters',

    components:{ InfiniteLoading },

    data() {
    return {
      page: 1,
      };
    },
    props: {
    characters: {
      type: Array,
      default: () => [],
      },
    },

  methods:{
    getCharacters($state){
      Promise.all([api.getCharactersPage(this.page)])
      .then((character) =>{
        if(character.length){
          this.page += 1
          this.characters = this.characters.concat(character[0])
          console.log(this.characters)
          $state.loaded();
        }else{
          $state.complete();
        }
       }
      )
    }
  },


}
</script>

<style scoped lang="scss">

</style>