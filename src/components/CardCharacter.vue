<template>
<div>  
    <b-container  fluid class="p-5" >
        <b-row align-h="center">
            <b-card no-body class="overflow-hidden" style="max-width: 540px;">
                <b-row no-gutters>
                <b-col md="6">
                    <b-card-img :src="character[0].image" alt="Image" class="rounded-0"></b-card-img>
                </b-col>
                <b-col md="6">
                    <b-card-body
                    :title="character[0].name"
                    :sub-title="`${character[0].status} - ${character[0].gender}`">
                    <h3>Detalles</h3>
                    <b-card-text>
                        Origen - {{character[0].origin.name}}   
                        Locacion - {{character[0].location.name}}
                    </b-card-text>
                    </b-card-body>
                </b-col>
                </b-row>
            </b-card>
            <h2 class="text-center mt-4">Episodios</h2>
            <b-row cols="3" sm="12" class="mt-3" >
                <b-button-group v-for="(episode, index) in character[0].episode" :key="index">
                    <b-button @click="goEpisode(episode)" class="w-25 mb-1 p-2" variant="success"> Episodio: {{episode.split('episode/',-1)[1]}}</b-button>
                </b-button-group>
            </b-row>
        </b-row>
    </b-container>
</div>
</template>

<script>
// import api from '@/api';
export default {
    name:"CardCharacter",

    props:{
      character: {
        type: Array,
        default: () => [],
      },
    },

    methods:{
        //Metodo para redirigir a la vista de episodios
        goEpisode(episode){
            //metodo para extraer los números del episodio 
            let numEpisode = episode.split('episode/',-1)[1]
            console.log(numEpisode)
            this.$router.push({ path:`/episode/${numEpisode}` })
        }
    }
}
</script>

<style>

</style>