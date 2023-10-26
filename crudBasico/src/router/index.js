

import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../views/HelloWorld.vue'
import PessoasTeste from '../views/PessoasTeste.vue'

const routes = [
  {
    path: '/hello-world',
    name: 'HelloWorld',
    component: HelloWorld
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
