import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/hello',
    name: 'Hello',
    component: () => import('@/views/TodoList/hello.vue'),
    children: [
      {
        path: 'todolist',
        name: 'hello-TodoList',
        component: () => import('@/views/TodoList/index.vue'),
        meta: { title: '待辦清單', icon: 'el-icon-notebook-1' },
      }
    ]
  }

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
