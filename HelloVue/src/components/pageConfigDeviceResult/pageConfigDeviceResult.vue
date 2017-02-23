<template>
  <div>
    <div class="title">デバイス設定結果画面</div>

    <p>deviceConfigInfo is: {{ deviceConfigInfo }}</p>
    <p>deviceConfigInfo.name is: {{ deviceConfigInfo.name }}</p>
    <div class='button' @click="toDeviceConfig">リトライ</div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
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
    ...mapActions([
      'incrementAsync',
      'sampleAPI'
    ]),
    ...mapMutations([
      'resetData'
    ]),
    toDeviceConfig: function () {
      this.$router.go(-1)
    }
  }
}
</script>

<style>
</style>
