<template>
 <div>
   <div class="bg">
      <p>全民砍价></p>
    </div>
    <ul>

      <kj v-for="item in bg" :d="item" :key="item.id"></kj>
    </ul>

 </div>
   
     
  
</template>

<script>
import kj from './Kj'
export default {
  data() {
    return {
       bg:[]
    };
  },
  components: {
    kj
  },
  
  created() {
     this.$http.get("https://api.it120.cc/small4/shop/goods/kanjia/list").then((res) => {
        console.log(res);
        this.bg = res.data.data.goodsMap;
      });
  },
  mounted() {
     
  },
  methods: {}
};
</script>

<style lang="less">
.bg {
  width: 4rem;
  height: 0.5rem;
  text-align: center;
  margin-right: 0.5rem;
  border-bottom: 0.01rem solid #ddd;
  > p {
    font-size: 0.2rem;
  }
}
ul {
  width: 4rem;
  //   height: 1.4rem;
  li {
    width: 4rem;
    // height: 1.4rem;
    .kj {
      display: flex;
      padding: 0.1rem;
      border-bottom: 0.01rem solid #e9e9e9;
      img {
        width: 1.58rem;
        height: 1.58rem;
        border-radius: 0.06rem;
      }
      .nr {
        margin-left: 0.14rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        .nrp1 {
          font-size: 0.16rem;
          width: 2rem;
          overflow: hidden;
        }
        .nrp2 {
          font-size: 0.15rem;
          color: #b2b2b2;
          width: 2rem;
          overflow: hidden;
          margin-top: 0.1rem;
        }
        ol {
          width: 1.8rem;
          display: flex;

          li {
            display: flex;
            flex-wrap: wrap;
           
            .dj {
              font-size: 0.16rem;
              color: red;
            }
            .dj1 {
              font-size: 0.16rem;
            }
            .jq {
              font-size: 0.16rem;
              color: #ccc;
            }
          }
        }
      }
    }
  }
}
</style>
