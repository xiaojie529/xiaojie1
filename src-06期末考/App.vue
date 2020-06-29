<template>
  <div id="app">
   
     <Loading v-if="$store.state.isLoading"></Loading>
     
     <ul class="ul">
            <li @click="jump(item.path)" v-for="(item,index) in lcjarr" :key="index">{{ item.name }}
              
            </li>
      </ul>
      <el-input  v-jump="path" @click="add(item)" placeholder="请输入内容" prefix-icon="el-icon-search" ></el-input>
      <ul class="ul">
            <li v-for="(item,index) in lb" :key="index">
              {{ item.name }}
              
            </li>
      </ul>
      <router-view></router-view>
  </div>
</template>

<script>
import Loading from "./components/Loading.vue";
import list from '../static/list.json';

export default {
  data() {
    return {
     path:"/search",
       lcjarr:[
                {
                    name:"女装",
                    path:"/"

                },
                {
                    name:"男装",
                    path:"/nz"

                },
                {
                    name:"童装",
                    path:"/tz"

                },
                {
                    name:"婴幼儿",
                    path:"/yr"

                },
                {
                    name:"运动",
                    path:"/yd"

                },
                {
                    name:"限时特惠",
                    path:"/xsth"

                }

            
              
            ],
            lb:[
              {
                name:"综合"
              },
              {
                name:"销量"
              },
              {
                name:"新品"
              },
              {
                name:"价格"
              },
            ]
          
    };
  },
  components: {Loading,},
  created() {},
  mounted() {
    //Loading
    this.$http.get("https://www.vue-js.com/api/v1/topics").then(res => {});
    
  },
  methods: {
     jump(path){
           this.$router.push({
             path
           })
        },
        enter() {
      //如果本地存储中有
      let searchList = window.localStorage.getItem("searchList");
      if (searchList) {
        //直接给搜索历史
        this.searchList = JSON.parse(searchList);
      } else {
        this.searchList = [];
      }
      //添加数据到搜索历史
      this.searchList.push(this.seartxt);
      window.localStorage.setItem(
        "searchList",
        JSON.stringify(this.searchList)
      );
      this.seartxt = "";
    },
    del() {
      this.searchList = [];
      window.localStorage.setItem("searchList", []);
    },
     add(item){
       this.$store.commit("add",item)
   }
  }
};
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  height:100%;
  display: flex;
  flex-direction: column;
}
body,html{
  height:100%;
  margin:0;
}
.main{
  flex:1;
  background: blue;
}
.header{
  background: pink;
}
.footer{
  background: green;
}
.ul{
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  list-style: none;
}
.ul>li{
  padding: 5px 10px;
}
.ul>li:hover{
  border-bottom: 1px solid #ccc;
}
</style>