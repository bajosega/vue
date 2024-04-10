
<template>
    
    <div class="col">
        Perfil usuario (componente padre)
    </div>
    <Hijo 
    :nombre="usuario.nombre"
    :apellido="usuario.apellido"
    :avatar="usuario.avatar" />
   

</template>

<script  setup>

import {ref} from 'vue'
import Hijo from "./hijo.vue"

const usuario= ref({
    nombre :'Adrian',
    apellido : 'Seimandi',
    avatar:'😒'
})

</script>

<style  scoped>
    
</style>