<template>
  <div>
    設定メニュー
    <div class="button" @click="toConfigDevice">デバイス設定画面へ</div>
    <p>deviceConfigInfo is {{ deviceConfigInfo }}</p>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState([
      'count',
      'data',
      'text',
      'deviceConfigInfo'
    ])
  },
  methods: {
    ...mapMutations([
      'initDeviceConfigInfo'
    ]),
    toConfigDevice: function () {
      // console.log(this.$router)
      // console.log(this.$route)
      // console.log('piyo', this.$router.params.type)
      this.$router.push('/configDevice/12')
    }
  },
  mounted () {
    this.initDeviceConfigInfo()
  }
}
</script>

<style>
.button {
  color: blue;
  width: 10em;
  background-color: orange;
}
</style>
