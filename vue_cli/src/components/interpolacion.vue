
<template>
    <div class="container" >
        <h1 class="display-4"> {{mensaje[0].titulo}} </h1>
        <p v-html="mensaje[0].descripcion"></p>
    </div>
</template>

<script setup>

import mensaje from '../assets/mensaje.json'
//import mensajeHTML from '../assets/mensaje.json'

</script>

<style scoped>
    
</style>
