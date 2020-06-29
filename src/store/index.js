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
        count:0
    },
    mutations:{
        
        },
        
    
    getters:{
        
    },
    //异步操作的集合
    actions:{
    
    },
    methods: {
        
    },

    plugins: [createPersistedState()]
})