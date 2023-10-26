
<template>
  <div class="main-container">
    <NavBar/>
    <RouterView />
  </div>
</template>
<script>
import NavBar from '../src/components/Nav-Bar.vue'
import Cadastrar from'./views/Cadastrar.vue'

export default {
    name: 'App',
    components: { NavBar,Cadastrar }
}
</script>
<style>
* {
  padding: 0;
  margin: 0 auto;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  
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
