<template>
  <div id="app">
    <div>app</div>
    <pageSensor></pageSensor>
    <pageTop></pageTop>
    <pageSensor></pageSensor>
    <pageTop></pageTop>
  </div>
</template>

<script>
import PageSensor from './components/pageSensor/pageSensor'
import PageTop from './components/pageTop/pageTop'

export default {
  name: 'app',
  components: {
    PageSensor,
    PageTop
  }
}
</script>

<style>
</style>
