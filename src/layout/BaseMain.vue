<template>
  <el-container class="app-main">
    <el-main >
      <!-- <router-view :key="key" /> -->
      <h1>layout/BaseMain</h1>
    </el-main>
  </el-container>
</template>

<script>


export default {
  name: 'AppMain',
  computed: {
    // key() {
    //   return this.$route.path
    // }
  }
};
</script>