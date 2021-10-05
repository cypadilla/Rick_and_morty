<template>
   <b-container  fluid class="p-5" >
        <b-row align-h="center">
            <b-card no-body class="overflow-hidden" style="max-width: 540px;">
                <b-row no-gutters>
                <b-col md="6">
                    <b-card-body
                    :title="`Nombre del episodio: ${episode[0].name}`"
                    :sub-title="`Estrenado: ${episode[0].air_date}`">
                    <h3>Detalles</h3>
                    <b-card-text>
                        Identificacion: {{episode[0].id}}
                        <br>
                        Episodio: {{episode[0].episode}}
                        <br>
                        Numero de personajes : {{episode[0].characters.length}}
                    </b-card-text>
                    </b-card-body>
                </b-col>
                </b-row>
            </b-card>
        </b-row>
    </b-container>
</template>

<script>
export default {
name:"Episode",

props: {
    episode:{
        type:Array,
        default:()=> []
    }
}

}
</script>

<style>

</style>