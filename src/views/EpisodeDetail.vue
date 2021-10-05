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

created(){
    this.getEpisode()
},

methods: {
    getEpisode(){
     const id = this.$route.params.id

     Promise.all([api.getEpisode(id)])
     .then( episode => this.episode = episode)
    }
}
}
</script>

<style>

</style>