import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index/Index'
import List from '@/components/Index/List'
import Details from '@/components/Index/Details'
import Login from '@/components/Index/Login'
import Reg from '@/components/Index/Reg'
import PersInfo from '@/components/Index/PersInfo'
import Search from '@/components/Index/Search'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/details',
      name: 'Details',
      component: Details
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/reg',
      name: 'Reg',
      component: Reg
    },
    {
      path: '/persinfo',
      name: 'PersInfo',
      component: PersInfo
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
})
