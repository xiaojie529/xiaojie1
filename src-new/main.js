// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
//使用vuex仓库
import store from './store'


import Ele from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
Vue.use(ElementUI)


//请求拦截器
axios.interceptors.request.use((config)=>{
  // console.log(config)
  // console.log('执行了')
  //隐藏loading
  store.state.isLoading =true
  return config
})
//响应拦截器
axios.interceptors.response.use((response)=>{
  // console.log(response)
  // console.log('响应了')
  //显示loading
  store.state.isLoading = false
  return response
})

//讲axios 在原型上定义
Vue.prototype.$http = axios

//全局自定义指令
Vue.directive("jump",(el,{ value },vnode,oldNode)=>{
  el.onclick = ()=>{
    vnode.context.$router.push({
      path:value
    })
  }
})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
