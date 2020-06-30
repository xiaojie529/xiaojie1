<template>
  <div>
    <van-tabbar route active-color="#f00">
      <van-tabbar-item to="/home/index" icon="wap-home-o">
            首页
      </van-tabbar-item>
       <van-tabbar-item  to="/home/cate" icon="apps-o">
            分类
      </van-tabbar-item>
       <van-tabbar-item to="/home/shop" icon="cart-o">
            购物车
      </van-tabbar-item>
       <van-tabbar-item to="/home/wd" icon="contact">
            个人
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped>
</style>
