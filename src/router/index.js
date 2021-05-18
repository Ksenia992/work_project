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
    path: '/CallConnect',
    name: 'call',
    meta:{layout:'MainTableInfo'},
    // component: () => import('../views/Add_table.vue')
  },
   {
    path: '/groups',
    name: 'groups',
    meta:{layout:'MainTableInfo'},
    component: () => import('../views/Groups.vue')
  },
  {
    path: '/admins',
    name: 'admins',
    meta:{layout:'MainTableInfo'},
    component: () => import('../views/Admins.vue')
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
