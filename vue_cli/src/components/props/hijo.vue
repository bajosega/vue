<template>

   <div>
      {{ nombre }} , {{ apellido }} esta {{ avatar }}
   </div>

</template>

<script setup>
import { toRefs } from 'vue';


const props = defineProps({

   nombre: String,
   apellido: String,
   edad: Number,
   lenguages: {
      type: Array,
      default: () => []
   },
   experiencia: {
      type: Number,
      default: 0
   },
   avatar: String,
   acceso: {
      type: Boolean,
      default: false
   }

})

const { nombre, apellido, avatar } = toRefs(props)

</script>

<style scoped></style>