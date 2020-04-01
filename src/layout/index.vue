<template>
  <div id="app">
    <el-container>
      <el-aside width="200px">
        <BaseAside />
      </el-aside>
      <el-container>
        <el-header>
          <BaseHeader />
        </el-header>
        <el-main>
          <!-- <h1>layout/index</h1>           -->
          <BaseMain />
        </el-main>
        <el-footer>
          <BaseFooter />
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import BaseAside from "@/layout/BaseAside.vue";
import BaseHeader from "@/layout/BaseHeader.vue";
import BaseMain from "@/layout/BaseMain.vue";
import BaseFooter from "@/layout/BaseFooter.vue";

export default {
  name: "Layout",
  components: {
    BaseAside,
    BaseHeader,
    BaseMain,
    BaseFooter
  }
};
</script>

<style scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 50px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>