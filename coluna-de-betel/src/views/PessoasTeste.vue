<template>
  <div>

    <div>
      <input v-model="novoItem.imagem" placeholder="Imagem" />
      <input v-model="novoItem.title" placeholder="Título" />
      <input v-model="novoItem.descricao" placeholder="Descrição" />
      <input v-model="novoItem.email" placeholder="Email" />
      <input v-model="novoItem.name" placeholder="Veículo" />
      <input v-model="novoItem.high" placeholder="High" />
      <input v-model="novoItem.low" placeholder="Low" />
  
      <button @click="criarNovoItem">Adicionar</button>
    </div>
    <div>
      <div v-for="item in teste" :key="item.id">
        <img :src="item.imagem" :alt="item.title" />
        <h3>{{ item.title }}</h3>
        <p>{{ item.descricao }}</p>
        <p>Email: {{ item.email }}</p>
        <p>Veículo: {{ item.name }}</p>
        <p>High: {{ item.high }}</p>
        <p>Low: {{ item.low }}</p>
        <p>Low: {{ item.id }}</p>
        <input v-model="item.imagem" />
        <input v-model="item.title" />
        <input v-model="item.descricao" />
        <input v-model="item.email" />
        <input v-model="item.name" />
        <input v-model="item.high" />
        <input v-model="item.low" />
  
        <button @click="salvarEdicao(item)">Salvar</button>
        <button @click="deletar(item.id)">deletar</button>
      </div>
    </div>
    </div>
  </template>
  
  <script>
  import service from '../services'
  import { onMounted, reactive, ref } from 'vue'
  
  export default {
    name: "PessoasTeste",
  
    setup() {
      const novoItem = reactive({
        imagem: '',
        title: '',
        descricao: '',
        email: '',
        name: '',
        high: '',
        low: '',
      })
      let listaPessoas = ref([])
      let teste = ref([])
  
      async function fetch() {
        listaPessoas.value = await service.pessoas.getPessoas()
        teste.value = JSON.parse(JSON.stringify(listaPessoas.value.data))
  
        teste.value.reverse()
      }
  
      onMounted(() => {
        fetch()
      })
  
      function salvarEdicao(item) {
        service.pessoas.updatePessoa(item)
      }
      async function deletar(id) {
        try {
          await service.pessoas.deletarPessoa(id)
          await fetch()
        } catch (error) {
          console.log(error)
        }
      }
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
        salvarEdicao,
        teste,
        deletar,
        novoItem,
        criarNovoItem
      }
    }
  }
  </script>
  