<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  console.log("測試env檔讀到什麼 " + process.env.VUE_APP_API)
  export default {
    name: 'app'
  }
</script>

<style>
</style>