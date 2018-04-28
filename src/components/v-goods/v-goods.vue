<template>
  <div>
    I am goods
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<script type="es6">
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css'
  export default {
    name: "v-goods",
    data:function () {
      return{

      }
    },
    mounted:function () {
      // this.$router.push('/goods/xiaoliang');
      var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: 3000,
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
      });
    }
  }
</script>

<style lang="scss">
  .swiper-container {
    width: 100%;
    height: 300px;
  }
</style>
