<template>
  <el-container>
    <el-main>
      <TodoList></TodoList>
    </el-main>
  </el-container>
</template>

<script>
import TodoList from "@/components/TodoList.vue";

export default {
  name: "",
  components: {
    TodoList
  }
};
</script>