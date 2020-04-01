<template>
  <el-container class="app-main">
    <el-main >
      <!-- <h1>layout/BaseMain</h1> -->
      <router-view />
      <!-- <router-view :key="key" /> -->      
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