<template>
    <div>
            <h1>Login AD</h1>
            <div>
                <form id="formulario">
                    <input type="text" name="email" value=""><br>
                    <input type="password" name="password" value=""><br>
                    <div class="bbg-blue-200 p-3 " @click="iniciarSesion()"> iniciar  </div>
    
                </form>
        </div>
    </div>
</template>

<script setup>

import {ref} from 'vue';
import axios from 'axios';
import {useouter } from 'vue-router'

const router = userouter();

const formulario = ref({
    email:'',
    password:''
})

const iniciarSesion =async () => {

 const url= ""
 const response = await axios.get(url,{params:{
    email: formulario.value.email,
    password : formulario.value.password
 }}) 
   if(response.data.length >0 ) {
    router.push("name:home")
   }
}

</script>

<style lang="scss" scoped>

</style>