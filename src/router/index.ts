import { createRouter, createWebHistory } from 'vue-router'
import Pagination from '../views/pagination/pagination.vue'
import Layout from "../layouts/index.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: 
  [
    {
      path: '/login',
      name: 'login',
      component: () => import ("../views/auth/login.vue"),

    },
    {
      path: '/',
      name: 'home',
      component: Layout,
      redirect: "/home" ,
      children:[{
        path:"/home",
        name:"Home",
        component: Pagination,
      }]
    },
    {
      path: '/form',
      component: Layout,
      children:[{
        path: "",
        name:'form',
        component: () => import ("../views/form/pageForm.vue"),
    }]
    },
    {
      path: '/form-validate',
      component: Layout,
      children:[{
        path: "",
        name:'form-validate',
        component: () => import ("../views/form/validate/validate-form.vue"),
    }
  
  ]   
    }
  ]
})

export default router
