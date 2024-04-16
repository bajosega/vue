<template>
    <div>
  <listadosUsuario></listadosUsuario>
    </div>
</template>

<script setup>

import listadosUsuario from '../../components/Usuarios/ListadoUsuarios.vue';


import axios from 'axios';
import { onMounted,ref } from 'vue';

onMounted(()=>{
    getUsuarios();
})

const getUsuarios =async () => {

const url= ""
const response = await axios.get(url); 
  console.log(response);
}


</script>

<style lang="scss" scoped>

</style>