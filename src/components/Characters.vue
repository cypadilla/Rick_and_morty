<template>
  <div>
      <b-container fluid class="p-5 ">
          <b-row>
            <b-col cols="12" md="3" sm="6" class="center" align-h="center"
            v-for="(character, index) in mutableCharacter"
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
      mutableCharacter:this.characters
      };
    },
    props: {
    characters: {
      type: Array,
      default: () => [],
      },
    },

  methods:{
    // Función para obtener los personajes 
    getCharacters($state){
      Promise.all([api.getCharactersPage(this.page)])
      .then((character) =>{
        if(character.length){
          this.page += 1
          // Función para no transformar los datos de los props
          this.mutableCharacter= this.mutableCharacter.concat(character[0])
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