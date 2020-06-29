<template>
  <div>
    <ul>
       <!-- 渲染 -->
      <li v-for="(item,index) in obj.result" :key="index">
        <p>{{ item.title }}</p>
        
        <p>{{ item.price }}</p>
        <p>{{ item.old_price }}</p>
        <p><img :src="item.pic" alt=""></p>
        <p>
            <i v-jump="path" class="el-icon-shopping-cart-full" @click="addShop(item)"></i>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
        obj:{},
        path:"/shop"
    };
  },
  created() {},
  mounted() {
    //接口
    let { data } = this.$http.get("../static/list.json").then(res => {
      console.log(res);
      this.obj = res.data;
    });
  },
  methods: {
    //添加数据
       addShop(item){
       this.$store.commit("addShop",item)
   }
  }
};
</script>

<style scoped>
ul {
  font-size: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  list-style: none;
  width: 100%;
}
li {
  width: 200px;
}
img{
    width: 150px;
}
</style>
