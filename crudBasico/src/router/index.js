

import PessoasTeste from '../views/PessoasTeste.vue'

import { createRouter, createWebHistory } from 'vue-router'
import Cadastrar from '../views/Cadastrar.vue'

const routes = [
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
