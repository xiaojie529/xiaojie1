<template>
  <div class="wrap">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in banners" :key="index">
        <img :src="item.picUrl" alt />
      </van-swipe-item>
    </van-swipe>
    <ul class="ul">
        <li>
            <img src="/static/imgs/cd1.7808faf.png" alt="">
            <p>签到</p>
        </li>
        <li>
            <img src="/static/imgs/tu2.png" alt="">
            <p>礼券</p>
        </li>
        <li>
            <img src="/static/imgs/tu3.png" alt="">
            <p>砍价</p>
        </li>
        <li>
            <img src="/static/imgs/tu4.png" alt="">
            <p>专栏</p>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banners: []
    };
  },
  created() {
    this.$http.get("https://api.it120.cc/small4/banner/list").then(res => {
      this.banners = res.data.data;
    });
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="less">
.wrap{
    position: relative;
}
.wrap{
  .ul {
    width: 100%;
    height: 1rem;
    background: white;
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    text-align: center;
    border-radius: 20% 20% 0 0;
    border-bottom: 0.2rem solid #F5F5F5;
}
}
.wrap>ul>li{
    width: 25%;
}
.wrap>ul>li>p{
    font-size: 0.2rem;
    margin-top: 0.1rem;
}
.wrap>ul>li>img{
    width: 0.3rem;
    height: 0.3rem;
    display: block;
    margin: 0 auto;
}
.my-swipe .van-swipe-item {
  color: #fff;
}
.my-swipe {
  height: 4rem;
  overflow: hidden;
}
.my-swipe img {
  width: 100%;
  height: 4rem;
}
</style>
