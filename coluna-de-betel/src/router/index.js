

import PessoasTeste from '../views/PessoasTeste.vue'

import { createRouter, createWebHistory } from 'vue-router'
import Cadastrar from '../views/Cadastrar.vue'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cadastrar',
    name: 'Cadastrar',
    component: Cadastrar
  },
  {
    path: '/pessoas',
    name: 'Pessoas',
    component: PessoasTeste
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
