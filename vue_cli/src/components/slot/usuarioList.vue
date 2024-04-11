<template>
    <div class="conteiner">

        <div class="">
            Lista usuarios
            <div class="col col-4"
            v-for="(usuario,index) in usuarios"
            :key="index">

            <slot :usuario="usuario">
            <Usuario
                :nombre="usuario.nombre"
                :apellido="usuario.apellido"
                :avatar="usuario.avatar"
               />
            </slot>
            </div>
        

        </div>

    </div>
</template>

<script setup>
import { toRefs } from 'vue'
import Usuario from './Usuario.vue'

const props = defineProps({
    usuarios:Array
})

const {usuario} = toRefs(props)

</script>

<style lang="scss" scoped>

</style>