<template>
  <div>
    <div class="swiper-container gallery-thumbs">
      <div class="swiper-wrapper">
        <div class="swiper-slide">TOP</div>
        <div class="swiper-slide">SENSOR</div>
      </div>
    </div>
    <div class="swiper-container gallery-top">
      <div class="swiper-wrapper gallery-top-w">
        <div class="swiper-slide"><PageTop/></div>
        <div class="swiper-slide"><PageSensor/></div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from '../../../static/swiper.min.js'
import PageTop from '../pageTop/pageTop'
import PageSensor from '../pageSensor/pageSensor'

export default {
  name: 'Contents',
  components: {
    PageTop,
    PageSensor
  },
  mounted: function () {
    console.log('parent')
    var gThumbs = new Swiper('.gallery-thumbs', {
      speed: 400,
      spaceBetween: 0,
      slideToClickedSlide: true,
      touchRatio: 0.2,
      slidesPerView: 2,
      loop: false
    })
    var gTop = new Swiper('.gallery-top', {
      speed: 400,
      spaceBetween: 0,
      autoHeight: true,
      slidesPerView: 1
    })
    gThumbs.params.control = gTop
    gTop.params.control = gThumbs
  }
}
</script>

<style>
.swiper-container {
    width: 100%;
    height: 300px;
}
.swiper-slide {
    background-size: cover;
    background-position: center;
}
.gallery-top {
    height: 80%;
    width: 100%;
    background-color: pink;
    min-height: 200px;
}
.gallery-thumbs {
    height: 20%;
    box-sizing: border-box;
    padding: 10px 0;
    background-color: orange;
}
.gallery-thumbs .swiper-slide {
    width: 50%;
    height: 100%;
    opacity: 0.2;
}
.gallery-thumbs .swiper-slide-active {
    opacity: 1;
}
</style>
