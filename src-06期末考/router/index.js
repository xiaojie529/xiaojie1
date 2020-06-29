import Vue from 'vue'
import Router from 'vue-router'
import Nz from '@/components/Nz'
import Gz from '@/components/Gz'
import Tz from '@/components/Tz'
import Yd from '@/components/Yd'
import Yr from '@/components/Yr'
import Xsth from '@/components/Xsth'
import search from '@/components/search'
import Shop from '@/components/Shop'
// //解决重复触发报错去除
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
// import Child from '@/components/Child'
Vue.use(Router)

export default new Router({
  routes: [
   {
      path: '/',
      name: 'Gz',
      component: Gz,
     
    },
    {
      path: '/nz',
      name: 'Nz',
      component: Nz
    },
    {
      path: '/tz',
      name: 'Tz',
      component: Tz
    },
    {
      path: '/yd',
      name: 'Yd',
      component: Yd
    },
    {
      path: '/yr',
      name: 'Yr',
      component: Yr
    },
    {
      path: '/xsth',
      name: 'Xsth',
      component: Xsth
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
    },
   
  ]
})
