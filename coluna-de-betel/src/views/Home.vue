<template>
  <div class="home-container">
    <div class="div-imagem" v-if="showImage">
    </div>
    <div class="div-video" v-else>
      <video controls autoplay muted>
        <source src="../assets/img/video.mp4" type="video/mp4">
      </video>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  name: "Home",
  setup() {
    const showImage = ref(true);

    const handleResize = () => {
      showImage.value = window.innerWidth >= 959;
    };

    onMounted(() => {
      window.addEventListener("resize", handleResize);
      handleResize(); 
    });

    onUnmounted(() => {
      window.removeEventListener("resize", handleResize);
    });

    return {
      showImage,
    };
  },
};
</script>

<style scoped>
.home-container {
  width: 100%;
  height: 100%;
}

.div-imagem {
  width: 100%;
  height: 90%;
  background-image: url('../assets/img/baner.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  max-width: 100%;
}
.div-video{
  background-color: #b4c7c9;
height: 100%;
display: flex;
justify-content: center;
padding: 10px;
}
video {
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  height: 100%;
}
</style>
