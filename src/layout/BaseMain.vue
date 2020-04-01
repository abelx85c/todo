<template>
  <el-container class="app-main">
    <el-main >
      <router-view :key="key" />
    </el-main>
  </el-container>
</template>

<script>


export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.path
    }
  }
};
</script>