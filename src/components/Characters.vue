<template>
  <div>
      <b-container fluid class="p-5 ">
          <b-row>
            <b-col cols="12" md="3" sm="6" class="center" align-h="center"
            v-for="character in characters"
            :key="character.id"
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
          </b-row>
      </b-container>
  </div>
</template>

<script>

export default {
    name: 'Characters',

    props: {
    characters: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped lang="scss">

</style>