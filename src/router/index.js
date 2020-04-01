import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'aaa',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/hello',
    name: 'Hello',
    component: () => import('@/views/TodoList/hello.vue'),
    children: [
      {
        path: 'todolistall',
        name: 'hello-TodoListAll',
        component: () => import('@/views/TodoList/index.vue'),
        meta: { title: '待辦清單', icon: 'el-icon-notebook-1' },
      }
    ]
  },
  {
    path: '*',
    redirect: '/home'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
