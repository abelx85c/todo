<template>
  <el-container>
    <el-main>
        <!-- <Layout /> -->
        <TodoListAll /> 
        <router-view /> 

    </el-main>
  </el-container>
</template>

<script>
import TodoListAll from "@/components/TodoListAll.vue";
// import Layout from '@/layout'

export default {
  name: "",
  components: {
    TodoListAll
    // Layout 
  }
};
</script>