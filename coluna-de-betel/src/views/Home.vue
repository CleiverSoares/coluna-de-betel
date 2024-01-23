
<template>
  <div class="home-container">
    <div class="div-imagem">
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",
}

</script>
<style scoped>
.home-container {
  width: 100%;
  height: 100%;
}
.div-imagem {
  width: 100%;
  height: 90%;
  background-image: url('../assets//img/baner.jpg');
  background-repeat: no-repeat;
  background-position:   center;
  background-size: cover;
}
</style>


<!-- 

<template>
  <div class="home-container">
    <div class="div-imagem">
      <video controls autoplay muted >
        <source src="../assets/img/video.mp4" type="video/mp4">
      </video>
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",
}

</script>
<style scoped>
.home-container {
  width: 100%;
  height: 100%;
  justify-content: center;
}

.div-imagem {
  width: 100%;

}
video{
  width: 90%;
  height: 50vh;
}
</style> -->
