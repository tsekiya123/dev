<template>
  <div class="contents">
    <div @click="getIndex()">getIndex</div>
    <div>count is {{ count }}</div>
    <!-- swiper -->
    <div class="tab_container">
      <div class="swiper-button-prev" @click="slideTo(0)">TOP</div>
      <div class="swiper-button-next" @click="slideTo(1)">SENSOR</div>
    </div>
    <!-- <div id="navigation">
      <div id="active_bar">bar</div>
    </div> -->
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
import { mapState } from 'vuex'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

// let getIndexFunc

export default {
  name: 'Contents',
  components: {
    'swiper': swiper,
    'swiperSlide': swiperSlide
  },
  computed: {
    ...mapState([
      'count'
    ])
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'progress',
        initialSlide: 0, // Topページ:0,Sensorページ:1
        onSlideChangeStart: function () {
          // ActiveなスライドのIndexを取得する
          // console.log('onTouchEnd called')
          let bar = document.getElementById('active_bar')
          if (getIndexFunc() === 0) {
            bar.style.transform = 'translateX(0)'
          } else if (getIndexFunc() === 1) {
            bar.style.transform = 'translateX(100%)'
          }
        },
        paginationProgressRender: function (swiper, progressbarClass) {
          return '<div class="bg_orange"/>'
        }
      }
    }
  },
  methods: {
    slideTo: function (index) {
      console.log('slideTo called')
      this.$refs.mySwiper.swiper.slideTo(index)
    }
    // getIndex: function () {
    //   console.log('getIndex called')
    //   console.log('index is ', this.$refs.mySwiper.swiper.activeIndex)
    //   return this.$refs.mySwiper.swiper.activeIndex
    // }
  },
  mounted: function () {
    // setTimeout(function () {
    //   console.log('Timeout')
    // }, 3000)
    // getIndexFunc = this.getIndex
    console.log('mounted')
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
#navigation {
  background-color: gray
}
#active_bar {
  width: 50%;
  background-color: orange;
  transition-duration:0.3s;
}
.bg_orange {
  width: 50%;
  height: 0.25em;
  background: orange;
}
</style>
