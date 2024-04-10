<template>
    <h4>Eventos</h4>
    
<!--button @click.ctrl="cambiarColor"> Control CLik </button-->


<form class="conteiner" @submit.prevent="enviarFormulario">

    <input class="form-control mt-2" placeholder="ingrese Apellido ">
    <input class="form-control mt-2" placeholder="ingrese Nombre ">
    <button type="submit" class="btn btn-light mt-2" @click.ctrl="cambiarColor" > Enviar </button>
</form>


</template>

<script  setup>


const background = 'red';

const cambiarColor = (data) =>{
    console.log(data)
}


const enviarFormulario = (evento) =>{
    //data.preventDefault();
    console.log(evento);
}


</script>

<style  scoped>
    
</style>
