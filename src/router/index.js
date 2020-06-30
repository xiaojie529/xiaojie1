import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/Home'

import Index from '@/pages/Index'
import Cate from '@/pages/Cate'
import Shop from '@/pages/Shop'
import Wd from '@/pages/Wd'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      //重定向
      redirect:"/home"
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect:"/home/index",
      children:[
        {
          path:"index",
          component: Index,
        },
        {
          path:"cate",
          component: Cate,
        },
        {
          path:"shop",
          component: Shop,
        },
        {
          path:"wd",
          component: Wd,
        }
      ]
    }
  ]
})
