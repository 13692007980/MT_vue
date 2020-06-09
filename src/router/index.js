import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ANLogin from '../views/AccountNumberLogin.vue'
import PVLogin from '../views/PhoneVerificationLogin.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    component:() => import('../views/Login.vue'),

    children:[
      {
        path: '/anlogin',
        name: 'ANLogin',
        component: ANLogin
      },
      {
        path: '/register',
        name: 'ANLogin',
        component: ANLogin
      },
      {
        path: '/pvlogin',
        component: PVLogin
      }
    ],redirect:'/anlogin'
  },
  {
    path: '/classification',
    component: ()=> import('../views/ClassIfication.vue')
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
