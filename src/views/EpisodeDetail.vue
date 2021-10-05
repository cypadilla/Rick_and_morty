<template>
  <Episode :episode="episode"/>
</template>

<script>
import Episode from '@/components/Episode';
import api from '@/api';

export default {
name: "EpisodeDetail",

components:{Episode},

data(){
    return{
        episode:[]
    }
},
// Se obtienen los episodios cuando se crea el componente
created(){
    this.getEpisode()
},

methods: {
    // Metodo para obtener los episodios 
    getEpisode(){
     const id = this.$route.params.idEpisode
     Promise.all([api.getEpisode(id)])
     .then( episode => this.episode = episode)
    }
}
}
</script>

<style>

</style>