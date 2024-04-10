<template>
    <h4>Bind</h4>
    <div :style="`background: ${background}; height: 50px; width: 50px;`"></div>

    <button @click="cambiarColor">Cambiar color</button>
</template>

<script setup>
import { ref } from 'vue';

const background = ref('red');

const cambiarColor = () => {
    if (background.value == 'red')
        background.value = 'green'
    else
        background.value = 'red'

}
</script>

<style scoped></style>

