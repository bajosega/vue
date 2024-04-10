
<template>
    
   <div>
    {{  nombre }} , {{ apellido }} esta {{avatar}}
   </div>

</template>

<script  setup>
import { toRefs } from 'vue';


const props = defineProps({

nombre:String,
apellido:String,
edad:Number,
avatar:String

})

const {nombre,apellido,avatar} = toRefs(props)

</script>

<style  scoped>
    
</style>