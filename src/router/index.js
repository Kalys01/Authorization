import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {layout: 'main'},
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    meta: {layout: 'main'},
    component: () => import('../views/About.vue')
  },
  {
    path: '/projects',
    name: 'projects',
    meta: {layout: 'main'},
    component: () => import('../views/Projects.vue')
  },
  {
    path: '/galleries',
    name: 'galleries',
    meta: {layout: 'main'},
    component: () => import('../views/Galleries.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    meta: {layout: 'main'},
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: {layout: 'empty'},
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    meta: {layout: 'empty'},
    component: () => import('../views/Register.vue')
  },
  {
    path: '*',
    name: 'notFound',
    meta: {layout: 'main'},
    component: () => import('../views/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
