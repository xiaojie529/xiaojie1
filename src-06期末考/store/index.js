import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from 'vuex-persistedstate'
import axios from 'axios'
//注册
Vue.use(Vuex)

export default new Vuex.Store({
    //保存所有数据的
    //全局状态
    state:{
        isLoading:false,
        count:0,
       
        //请求信息对象
        queryInfo:{
            tab:"all",
            limit:5,
            page:1
        },
    },
    mutations:{
        addCount(state,count){
            state.count++
        },
        changeIndex(state,obj){
            //改变切换样式，并器存到了vuex中
            state.activeIndex = obj.index
            //改变tab切换状态
            state.queryInfo.tab = obj.tab
        },
        cPage(state,num){
            state.queryInfo.page = num
        }
    },
        
    
    getters:{
        
    },
    //异步操作的集合
    actions:{
     numm(context,args){
         context.commit('numm',args)
     }
    },
    methods: {
        
    },

    plugins: [createPersistedState()]
})