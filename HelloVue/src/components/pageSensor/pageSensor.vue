<template>
  <div>
    pageSensor {{ text }} count is {{ count }}
    <div>データ{{ data }}</div>
    <button @click="incrementAsync">async-increment</button>
    <button @click="sampleAPI">sampleAPI</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState([
      'count',
      'data',
      'text'
    ])
  },
  methods: {
    ...mapActions([
      'incrementAsync',
      'sampleAPI'
    ])
  },
  mounted () {
    this.sampleAPI()
  }
}
</script>

<style>
</style>
