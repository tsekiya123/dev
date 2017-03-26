<template>
  <div class="contents">
    <!-- swiper -->
    <div class="tab_container">
      <div class="swiper-button-prev" slot="button-prev">TOP</div>
      <div class="swiper-button-next" slot="button-next">SENSOR</div>
    </div>
    <swiper :options="swiperOption">
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'Contents',
  components: {
    'swiper': swiper,
    'swiperSlide': swiperSlide
  },
  data () {
    return {
      swiperOption: {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        pagination: '.swiper-pagination',
        paginationType: 'progress',
        loop: true,
        initialSlide: 0 // Topページ:0,Sensorページ:1
      }
    }
  }
}
</script>

<style>
.contents {
  border: 1em;
  background-color: lightgray;
  width: 100vw;
  height: 100vh;
}
.swiper-slide {
  height: 100%;
}
.swiper-container {
  height: 100%;
}
.tab_container div {
  position: relative !important;
  width: 100% !important;
  margin-top: 0 !important;
  background-image: none !important;
  text-align: center;
}
.tab_container {
  display: flex;
  justify-content: space-between;
}
</style>
