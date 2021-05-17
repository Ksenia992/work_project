import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    meta:{layout:'Sign'},
    component: () => import('../views/Login_one.vue')
  },
  {
    path: '/sign_in',
    name: 'sign_in',
    meta:{layout:'Sign'},
    component: () => import('../views/Login_two.vue')
  },
  {
    path: '/',
    name: 'Main',
    meta:{layout:'Main'},
    component: () => import('../views/MainTable.vue')
  },
  {
    path: '/search',
    name: 'Search',
    meta:{layout:'Main'},
    component: () => import('../views/Search.vue')
  },
  {
    path: '/details',
    name: 'details',
    meta:{layout:'MainTableInfo'},
    component: () => import('../views/Check.vue')
  },
  {
    path: '/add_info',
    name: 'add',
    meta:{layout:'MainTableInfo'},
    component: () => import('../views/Add_table.vue')
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
