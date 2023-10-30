<template>
    <div>
      <h1 class="TelaCadastro"> Tela de cadastro </h1><br><br>

        <div class="input-container">
          <label for="titulo">Titulo: </label> <br>  
          <input type="text" placeholder=" Digite o titulo" >
        </div>
       <br>

        <div class="input-container">
          <label for="veículo">  Veículo : </label>  <br> 
          <input type="text" placeholder=" Digite o Veículo ">
        </div>
        <br>
      
        <div class="input-container">
          <label for="url">  Url da imagem : </label> <br>  
          <input type="text" placeholder=" Informe a url " >
        </div>
        <br>

        <div class="input-container">
          <label for="descricao">  Descrição : </label>  <br> 
          <input type="text"  placeholder=" Descrição "  >
        </div>
        <br>
        
        <div class="input-container">
          <label for="email"> Email : </label>  <br> 
          <input type="text"  placeholder=" Digite seu e-mail">
        </div>
        <br>

        <div class="input-container">
          <label for="nome"> Nome : </label> <br> 
          <input type="text" placeholder=" Digite seu nome">
        </div>
        <br>
        
        <div class="input-container">
          <label for="altura"> Altura : </label>  <br> 
          <input type="text" placeholder=" Digite a altura">
        </div>
        <br>
    
        <div class="input-container">
          <label for="largura" class="texto"> Largura : </label>  <br> 
          <input type="text" placeholder=" Digite a largura">
        </div>
        <br>
        
        <div >
          <button @click="criarNovoItem" class="botao"> Cadastrar </button>
        </div>
        
    </div>
       
</template>

<script>
  import service from '../services'
  import {ref} from 'vue'

export default {
    name:'Cadastrar',

  setup(){

    let novoItem = ref ([])
    async function criarNovoItem(){
        try {
          await service.pessoas.criarPessoa(novoItem)
          Object.keys(novoItem).forEach((key) => {
            novoItem[key] = ''
  
          })
          await fetch()
        } catch (error) {
          console.log(error)
        }
      } 
      return  {
       criarNovoItem,
      }
    }
  }

</script>


<style>

.texto{
  text-align:justify;
}

.TelaCadastro{
   text-align: center;
    margin-top: 10px;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 30px; 
}

.input-container {
    text-align: center;
    margin-top: 10px;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 700

}

.botao{
border-radius: 5px ;
display: flex ;
width: 10%;
height: 30px ;
background-color: #006D77 ;
margin-top: 2%;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-size: 16px;
justify-content: center;
color: #fff;


}

input{
  border-radius: 5px;
  width: 300px;
  height: 28px;
}
</style>
