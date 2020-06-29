// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//移动端布局rem
import js from '../static/js/rem.js'
//使用vuex仓库
import store from './store'


import Ele from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
Vue.use(ElementUI)



import axios from 'axios'
//讲axios 在原型上定义
Vue.prototype.$http = axios

//全局过滤器
Vue.filter("timeFn",(dateTimeStamp)=>{
  let result =null;
      dateTimeStamp = new Date(dateTimeStamp).getTime()

        var minute = 1000 * 60;
        var hour = minute * 60;
        var day = hour * 24;
        var halfamonth = day * 15;
        var month = day * 30;
        var year = month*12
        var now = new Date().getTime();
        var diffValue = now - dateTimeStamp;
        if (diffValue < 0) {
          return;
        }
        var yearC =diffValue / year
        var monthC = diffValue / month;
        var weekC = diffValue / (7 * day);
        var dayC = diffValue / day;
        var hourC = diffValue / hour;
        var minC = diffValue / minute;
        if(yearC>=1){
          result = "" + parseInt(yearC) + "年前";
        }else if (monthC >= 1) {
          result = "" + parseInt(monthC) + "月前";
        } else if (weekC >= 1) {
          result = "" + parseInt(weekC) + "周前";
        } else if (dayC >= 1) {
          result = "" + parseInt(dayC) + "天前";
        } else if (hourC >= 1) {
          result = "" + parseInt(hourC) + "小时前";
        } else if (minC >= 1) {
          result = "" + parseInt(minC) + "分钟前";
        } else result = "刚刚";
        return result;
     
    
})


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

/

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
