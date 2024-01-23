<template>
  <div class="home-container">
    <div class="div-imagem" v-if="showImage">
      <!-- Conteúdo da imagem de fundo -->
    </div>
    <div class="div-video" v-else>
      <video controls autoplay muted>
        <source src="../assets/img/video.mp4" type="video/mp4">
      </video>
      <div class="overlay"></div>
      <div class="overlay-text">
        <p>Coluna de Betel
        </p>
      </div>
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
      showImage.value = window.innerWidth >= 500;
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

.div-video {
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
}

.overlay {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.overlay-text {
  width: 100%;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: 24px;
  font-weight: bold;
}

video {
  width: 100%;
  height: 100%;
}</style>
