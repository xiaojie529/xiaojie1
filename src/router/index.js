import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
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
      component: Home
    }
  ]
})
