<template>
  <div>Loading...<router-link to="/contents">hoge</router-link></div>
</template>

<script>
export default {
  name: 'Loading',
  mounted: function () {
    let router = this.$router
    setTimeout(function () {
      router.push('/contents')
    }, 500)
  }
}
</script>

<style>
</style>
