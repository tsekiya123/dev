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
export default {
  name: 'app'
}
</script>

<style>
div.view {
  border-width: thick;
  border-color: red;
}
</style>
