<template>
    <div>
        <div class="input-container">
          <label for="titulo">Titulo: </label>  
          <input type="text" placeholder=" Digite o titulo" >
        </div>
       <br>

        <div class="input-container">
          <label for="veículo">  Veículo : </label>  
          <input type="text" placeholder=" Digite o Veículo ">
        </div>
        <br>
      
        <div class="input-container">
          <label for="url">  Url da imagem : </label>  
          <input type="text" placeholder=" Informe a url " >
        </div>
        <br>

        <div class="input-container">
          <label for="descricao">  Descrição : </label>  
          <input type="text"  placeholder=" Descrição "  >
        </div>
        <br>
        
        <div class="input-container">
          <label for="email"> Email : </label>  
          <input type="text"  placeholder=" Digite seu e-mail">
        </div>
        <br>

        <div class="input-container">
          <label for="nome"> Nome : </label>  
          <input type="text" placeholder=" Digite seu nome">
        </div>
        <br>
        
        <div class="input-container">
          <label for="altura"> Altura : </label>  
          <input type="text" placeholder=" Digite a altura">
        </div>
        <br>
    
        <div class="input-container">
          <label for="largura"> Largura : </label>  
          <input type="text" placeholder=" Digite a largura">
        </div>
        <br>
        
        <div class="botao">
          <button>Cadastrar</button>
        </div>
        
    </div>
       
</template>

<script>

export default {
    name:'Cadastrar',
}
</script>

<style>
.input-container {
    text-align: justify;
    margin-top: 10px;
    /* flex-direction: column; */
    /* align-items: center; */
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 700

}

.botao{
border-radius: 10px!important ;
display: flex!important ;
width: 130px!important ;
height: 28px!important ;
background-color: #006D77!important  ;
text-align: center!important ;
}

input{
  border-radius: 5px;
  width: 300px;
  height: 28px;
}
</style>
