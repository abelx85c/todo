<template>
  <div class="about">
    <h1>This is an about page</h1>
    <TodoList/>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue'
console.log("印出 views/About.vue")
export default {
  name: 'About',
  components:{
    TodoList
  }
}
</script>>
