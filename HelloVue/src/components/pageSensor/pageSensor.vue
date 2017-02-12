<template>
  <div>
    pageSensor {{ text }} count is {{ count }}
    <div>データ{{ data }}</div>
    <li v-for="item in data">
      {{ item.title }}
    </li>
    <button @click="incrementAsync">async-increment</button>
    <button @click="sampleAPI">sampleAPI</button>
    <button @click="resetData">resetData</button>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
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
    ]),
    ...mapMutations([
      'resetData'
    ])
  },
  mounted () {
    this.sampleAPI()
  }
}
</script>

<style>
</style>
