<template>
  <div class="about">
    <h1>This is an about page</h1>
    <TodoHeader/>
  </div>
</template>

<script>
import TodoHeader from '@/components/TodoHeader.vue'
console.log("印出 views/About.vue")
export default {
  name: 'About',
  components:{
    TodoHeader
  }
}
</script>>
