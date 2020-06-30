<template>
  <div>
    <p class="tjp">
      <span>人气推荐</span>
      <van-icon name="arrow" />
    </p>
    <ul class="lb">
        <tjzi v-for="item in tj"  :j="item" :key="item.id" v-show="item.characteristic"></tjzi>
    </ul>
  </div>
</template>

<script>
import tjzi from '@/components/Tjzi'
export default {
  data() {
    return {
        tj:[]
    };
  },
  components: {
      tjzi
  },
  created() {
      this.$http.get("https://api.it120.cc/small4/shop/goods/list").then((res)=>{
          console.log(res)
          this.tj =res.data.data
      })
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="less">
.tjp {
  font-size: 0.2rem;
  width: 100%;
  height: 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.lb{
    width: 4rem;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 0.02rem;
    li{
        width: 1.8rem;
       
    //    display: flex;
        img{
            width: 1.72rem;
            height: 2.2rem;
        }
        .tjp1{
           font-size: 0.16rem;
           color: #000;
           width: 2rem;
           overflow: hidden;
           text-overflow: ellipsis;
           white-space: nowrap;
        }
        .tjp2{
            font-size: 0.16rem;
           color: #ccc;
           width: 2rem;
           overflow: hidden;
           text-overflow: ellipsis;
           white-space: nowrap;
        }
        .tjp3{
            font-size: 0.16rem;
            color:red;
        }
    }
    
}
</style>
