<script setup>
import Interpolacion from './components/interpolacion.vue'
import Directivas from './components/directivas.vue'
import bindear from './components/bind.vue'
import Eventos from './components/eventos.vue'
import VModel from './components/vModel.vue'
import Layout from './components/slot/Layout.vue'

import Padre from './components/props/padre.vue'

import UsuarioList from './components/slot/usuarioList.vue'

import usuarios from './assets/usuarios.json'
import Usuario from './components/slot/Usuario.vue'






</script>

<template>
 <div>Componente APP 
  
   
    <h4> usando layout que tiene el navbar</h4>
    <Layout>
    <h4> usando padre y slot en el padre </h4>
    <padre></padre>

    <h4>Bindear</h4>
    <bindear></bindear>

    </Layout>

    <br>

    <UsuarioList :usuarios="usuarios"></UsuarioList>

    <br>
    <UsuarioList :usuarios="usuarios"
    v-splot="{Usuario}">

    <div class="col">
      <Usuario 
                :nombre="Usuario.nombre"
                :apellido="Usuario.apellido"
                :avatar="Usuario.avatar"
               />
               <button class="btn btn-default" 
               @click="alert('Eliminar usuario' + Usuario.nombre)">borrar</button>
    </div>

    </UsuarioList>

 </div>


 

</template>

<style scoped>
</style>
