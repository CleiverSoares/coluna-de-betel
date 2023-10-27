<template>
    <div>
        <div class="input-container">
          <label for="titulo">Titulo: </label>  
          <input type="text" id="titulo" v-model="titulo" placeholder=" Digite o titulo" >
        </div>
       <br>

        <div class="input-container">
          <label for="veículo">  Veículo : </label>  
          <input type="text" id="veículo" v-model="veículo" placeholder=" Digite o  Veículo ">
        </div>
        <br>
      
        <div class="input-container">
          <label for="url">  Url da imagem : </label>  
          <input type="text" id="url" v-model="url" placeholder=" ">
        </div>
        <br>

        <div class="input-container">
          <label for="descricao">  Descrição : </label>  
          <input type="text" id="descricao" v-model="descricao" placeholder=" ">
        </div>
        <br>
        
        <div class="input-container">
          <label for="email"> Email : </label>  
          <input type="text" id="email" v-model="email" placeholder=" Digite seu e-mail">
        </div>
        <br>

        <div class="input-container">
          <label for="nome"> Nome : </label>  
          <input type="text" id="nome" v-model="nome" placeholder=" Digite seu nome">
        </div>
        <br>
        
        <div class="input-container">
          <label for="altura"> Altura : </label>  
          <input type="text" id="email" v-model="email" placeholder=" Digite a altura">
        </div>
        <br>
    
        <div class="input-container">
          <label for="largura"> Largura : </label>  
          <input type="text" id="largura" v-model="largura" placeholder=" Digite a largura">
        </div>
        <br>
    </div>
</template>

<script>

export default {
    name:'Cadastrar',
}
</script>

<style>
.input-container {
    margin-top: 10px;
    flex-direction: column;
    align-items: center;

}
</style>
