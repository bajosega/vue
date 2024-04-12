
<template>
   <h3>VModel Buscador de Texto</h3>

    <div v-if="inputValue===''">
        Ingrese Texto
    </div>
    <div v-else>
        Buscando  {{ inputValue }}
    </div>
    
    
    <input 
    class="form-control mt-2" 
    placeholder="Buscador"
    v-model="inputValue">
    <button @click="buscar"> Buscar</button>
    <button> Limpiar</button>
   
     <div v-if="encontrado"> Encontrado </div>
     <div v-else="encontrado"> NO Encontrado </div>
    
     <h4>Busqueda usuarios</h4>
     <input 
     class="form-control mt-2" 
     placeholder="Buscar Usuarios"
     v-model="usuarioInputValue">
     <button @click="filtrarUsuarios"> Buscar</button>
     <button> Limpiar</button>
     
    <div v-if="usuarios.length">

        <div 
        v-for="(usuario,index) in usuarios"
        :key="index"
        >
        {{ usuario }}
        </div>

    </div>

    <div v-if="usuariosEncontrados.length > 0">
        <h4>usuarios Encontrados</h4>
        <div 
        v-for="(usuario,index) in usuariosEncontrados"
        :key="index"
        >
        {{ usuario }}
        </div>

    </div>


</template>

<script  setup>

import {ref} from 'vue'
import mensaje from '../assets/mensaje.json'


const inputValue = ref('')
const encontrado  = ref('')
const encontradoAplicado  = ref('')

const buscar=()=>{
console.log(mensaje.descripcion)

    encontrado.value=mensaje.descripcion.includes(inputValue.value)
    encontradoAplicado.value=true
}

const limpiarBusqueda=()=>{

    inputValue.value=false
    encontradoAplicado.value=false
    encontrado.value=false
}


const usuarios= ref([
"Adrian","Jose","Pedro"
])

const usuarioInputValue  = ref('')
const usuariosEncontrados  = ref('')


const filtrarUsuarios=()=>{

    usuariosEncontrados.value=usuarios.value.filter( (u)=> u.toLowerCase()==usuarioInputValue.value.toLowerCase())
}


</script>

<style  scoped>
    
</style>