
<template>
    <NavBar />
    <RouterView />
    <Footer />
</template>
<script>
import NavBar from '../src/components/Nav-Bar.vue'
import Cadastrar from './views/Cadastrar.vue'
import Footer from '../src/components/Footer.vue'

export default {
  name: 'App',
  components: { NavBar, Cadastrar, Footer }
}
</script>
<style>
* {
  padding: 0;
  margin: 0 auto;
  box-sizing: border-box;

}

#app {
  background-color: var(--c-app-bg);
}

#app {
  height: calc(100vh - 120px) !important;
  width: 100%;

}
</style>
