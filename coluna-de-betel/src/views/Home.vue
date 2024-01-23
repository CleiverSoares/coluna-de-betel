<template>
  <div class="home-container">
    <div class="div-imagem" v-if="showImage">
      <!-- Conteúdo da imagem de fundo -->
    </div>
    <div class="div-video" v-else>






      <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider="center: true">

        <ul class="uk-slider-items uk-grid uk-grid-match" uk-height-viewport="offset-top: true; offset-bottom: 30">
          <li class="uk-width-1-1">
            <div class="uk-cover-container">
              <div class="video-container">
                <video controls autoplay muted class="uk-width-1-1 uk-height-1-1">
                  <source src="../assets/img/video.mp4" type="video/mp4">
                </video>
              </div>
              <div class="uk-position-center uk-panel">
                <h1>1</h1>
              </div>
            </div>
          </li>
          <li class="uk-width-1-1">
            <div class="uk-cover-container">
              <div class="video-container">
                <video controls autoplay muted>
                  <source src="../assets/img/video.mp4" type="video/mp4">
                </video>
              </div>
              <div class="uk-position-center uk-panel">
                <h1>2</h1>
              </div>
            </div>
          </li>
          <li class="uk-width-1-1">
            <div class="uk-cover-container">
              <div class="video-container">
                <video controls autoplay muted>
                  <source src="../assets/img/video.mp4" type="video/mp4">
                </video>
              </div>
              <div class="uk-position-center uk-panel">
                <h1>3</h1>
              </div>
            </div>
          </li>
          <li class="uk-width-1-1">
            <div class="uk-cover-container">
              <div class="video-container">
                <video controls autoplay muted>
                  <source src="../assets/img/video.mp4" type="video/mp4">
                </video>
              </div>
              <div class="uk-position-center uk-panel">
                <h1>4</h1>
              </div>
            </div>
          </li>
          <li class="uk-width-1-1">
            <div class="uk-cover-container">
              <div class="video-container">
                <video controls autoplay muted>
                  <source src="../assets/img/video.mp4" type="video/mp4">
                </video>
              </div>
              <div class="uk-position-center uk-panel">
                <h1>5</h1>
              </div>
            </div>
          </li>
        </ul>

        <a class="uk-position-center-left uk-position-small uk-hidden-hover" href uk-slidenav-previous
          uk-slider-item="previous"></a>
        <a class="uk-position-center-right uk-position-small uk-hidden-hover" href uk-slidenav-next
          uk-slider-item="next"></a>

      </div>













      <div class="video-container">
        <video controls autoplay muted>
          <source src="../assets/img/video.mp4" type="video/mp4">
        </video>
      </div>
      <div class="overlay"></div>
      <div class="overlay-text">
        <p>Coluna de Betel</p>
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
  justify-content: center;
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
  justify-content: center !important;
  padding: 10px 0px;
}

.video-container {
  overflow: hidden;
  border-radius: 10px;
}

video {
  width: 100%;
  height: 100%;
}

.overlay {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  pointer-events: none;
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
}</style>
