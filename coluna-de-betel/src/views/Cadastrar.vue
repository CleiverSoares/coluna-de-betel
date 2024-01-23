<template>
  <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow="ratio: false">

    <ul class="uk-slideshow-items" uk-height-viewport="offset-top: true; offset-bottom: 30">
      <li>
        <video controls autoplay muted>
          <source src="../assets/img/video.mp4" type="video/mp4">
        </video>
      </li>
      <li>
        <video controls autoplay muted>
          <source src="../assets/img/video.mp4" type="video/mp4">
        </video>
      </li>
      <li>
        <video controls autoplay muted>
          <source src="../assets/img/video.mp4" type="video/mp4">
        </video>
      </li>
    </ul>

    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href uk-slidenav-previous
      uk-slideshow-item="previous"></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href uk-slidenav-next
      uk-slideshow-item="next"></a>

  </div>
</template>

<script>
import service from '../services'
import { ref } from 'vue'

export default {
  name: 'Cadastrar',

  setup() {

    let novoItem = ref([])
    async function criarNovoItem() {
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
    return {
      criarNovoItem,
    }
  }
}

</script>


<style>
.texto {
  text-align: justify;
}

.TelaCadastro {
  text-align: center;
  margin-top: 10px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 30px;
}

.input-container {
  text-align: center;
  margin-top: 10px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700
}

.botao {
  border-radius: 5px;
  display: flex;
  width: 10%;
  height: 30px;
  background-color: #006D77;
  margin-top: 2%;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 16px;
  justify-content: center;
  color: #fff;


}

input {
  border-radius: 5px;
  width: 300px;
  height: 28px;
}
</style>
