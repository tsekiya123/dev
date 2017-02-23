<template>
  <div id="app">
    <!-- <div>app</div>
    <pageSensor></pageSensor>
    <pageTop></pageTop>
    <pageSensor></pageSensor>
    <pageTop></pageTop> -->
    <router-link to="/config">設定画面へ</router-link>
    <div class="view">
      <router-view/>
    </div>
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
div.view {
  border-width: thick;
  border-color: red;
}
</style>
