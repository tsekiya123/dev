<template>
  <div>
    <div class="title">デバイス設定画面</div>

    <input v-model="deviceConfigInfo.name" placeholder="edit me">
    <p>deviceConfigInfo is: {{ deviceConfigInfo }}</p>
    <p>deviceConfigInfo.name is: {{ deviceConfigInfo.name }}</p>
    <router-link to="/configDeviceResult" tag="div" class="button">OK</router-link>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState([
      'deviceConfigInfo'
    ])
  },
  methods: {
    ...mapActions([
      'getDeviceConfigInfoName'
    ]),
    ...mapMutations([
      'setDeviceConfigInfo'
    ])
  },
  mounted () {
    console.log('mounted', this.deviceConfigInfo)
    if (!this.deviceConfigInfo.name) {
      console.log('for Config')
      this.setDeviceConfigInfo(this.$route.params.type)
      this.getDeviceConfigInfoName()
    } else {
      console.log('for Result')
    }
    console.log('mounted after', this.deviceConfigInfo)
  }
}
</script>

<style>
div.title {
  font-size: 2em;
}
</style>
