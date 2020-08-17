import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
<<<<<<< HEAD
import Index from '@/components/Index/Index'
import List from '@/components/Index/List'
import Details from '@/components/Index/Details'
import Login from '@/components/Index/Login'
import Reg from '@/components/Index/Reg'
import PersInfo from '@/components/Index/PersInfo'
import Search from '@/components/Index/Search'
=======
import Index from '@/components/Index'


>>>>>>> 6fd8703aa0c068c7e8ffb148b2ddb5e35285e009
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
<<<<<<< HEAD
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
=======
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index
>>>>>>> 6fd8703aa0c068c7e8ffb148b2ddb5e35285e009
    }
  ]
})
