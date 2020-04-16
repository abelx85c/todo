import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/layout')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404.vue')
  },
  {
    // path: '/hello',
    // name: 'Hello',
    // component: () => import('@/views/TodoList/hello.vue'),
    path: '/portfolio',
    name: 'Layout',
    component: () => import('@/layout'),
    children: [
      {
        path: 'todolist',
        name: 'todolist',
        component: () => import('@/views/TodoList/index.vue'),
        meta: { title: '待辦清單', icon: 'el-icon-notebook-1' },
      },
      {
        path: 'weather',
        name: 'weather',
        component: () => import('@/views/Weather/index.vue'),
      }
    ]
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
