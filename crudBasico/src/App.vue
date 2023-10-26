
<template>
  <NavBar teste="twwww"/>
  <div class="main-container">
    <RouterView />
  </div>
</template>
<script>
import NavBar from '../src/components/Nav-Bar.vue'
import HelloWorld from './views/HelloWorld.vue'

export default {
    name: 'App',
    components: { HelloWorld,NavBar }
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
  padding: 0 16px;
}
</style>
