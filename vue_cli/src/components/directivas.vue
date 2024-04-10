
<template>
    
    <ul class="list-group list-group-numbered">

        <li class="list-group-item " v-for="m in mensaje"  >
        <b>{{m.titulo}}</b> <small v-html="m.descripcion"></small></li>
    
    </ul>
    

</template>

<script  setup>
import mensaje from '../assets/mensaje.json'
</script>

<style  scoped>
    
</style>
