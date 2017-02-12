<template>
  <div>
    <div><span>{{ dataSize }} </span>pageTop<button @click="increment">increment</button></div>
  <div>
</template>

<script>
import { mapGetters, mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState([
      'count',
      'data',
      'text'
    ]),
    ...mapGetters([
      'dataSize'
    ])
  },
  methods: {
    ...mapMutations([
      'increment' // this.increment() を this.$store.commit('increment') にマッピングする
    ])
  }
}
</script>

<style>
</style>
