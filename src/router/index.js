import Vue from 'vue'
import VueRouter from 'vue-router'
import guest from './middleware/guest'
import auth from './middleware/auth'
import middlewarePipeline from './middlewarePipeline'
import store from '../store/modules/auth.store';


Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    meta: {
      middleware: [
          guest
      ]
  },
    component: () => import('../views/Login.vue')
  },
  {
    path: '/',
    name: 'Main',
    meta:{layout:'Main',  middleware: [
      auth
  ]

},

    component: () => import('../views/MainTable.vue'),
    // children:[{
    //   path: '/search',
    //   name: 'main.search',
    //   meta:{layout:'Main'},
    //   component: () => import('../views/Search.vue')
    // }],
    // beforeEnter: (to, from, next) => {
    //   if (store.state.user.isLogged) {
    //     next({ name: 'admins' });
    //   } else {
    //     next({ name: 'groups' });
    //   }
    // },

    
  },


  // {
  //   path: '/search',
  //   name: 'Search',
  //   meta:{layout:'Main'},
  //   component: () => import('../views/Search.vue')
  // },
 
  {
    path: '/CallConnect',
    name: 'call',
    meta:{layout:'MainTableInfo'},
    component: () => import('@/components/Modals/Add_tenants.vue')
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
  {
    path: '/users',
    name: 'users',
    meta:{layout:'MainTableInfo'},
    component: () => import('../views/Users.vue')
  },
  
  
  
  // {
  //   path: '/check',
  //   name: 'check',
  //   meta:{layout:'MainTableInfo'},
  //   component: () => import('../components/Modals/deleteAdmin.vue')
  // },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
      return next()
  }
  const middleware = to.meta.middleware
  const context = {
      to,
      from,
      next,
      store
  }
  return middleware[0]({
      ...context,
      next: middlewarePipeline(context, middleware, 1)
  })
})

export default router
