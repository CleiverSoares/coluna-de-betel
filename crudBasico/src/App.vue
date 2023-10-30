
<template>
  <div class="main-container">
    <NavBar/>
    <RouterView />
    <Footer />
  </div>
</template>
<script>
import NavBar from '../src/components/Nav-Bar.vue'
import Cadastrar from'./views/Cadastrar.vue'
import Footer from '../src/components/Footer.vue'

export default {
    name: 'App',
    components: { NavBar,Cadastrar,Footer }
}
</script>
<style>
* {
  padding: 0;
  margin: 0 auto;
  box-sizing: border-box;
  
}
#app{
  background-color: var(--c-app-bg);
}

.main-container {
  flex: 1;
  min-height: 100vh;
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
}
</style>
