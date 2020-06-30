<template>
  <div>
    

    <li>
      <div class="kj">
        <img :src="d.pic" alt />
        <div class="nr">
          <p class="nrp1">{{ d.name }}</p>
          <p class="nrp2">{{ d.characteristic }}</p>
          <ol>
            <li>
              <p class="dj">￥{{ d.minPrice }}</p>
              <p class="dj1">低价</p>
            </li>
            <li>
              <p class="jq">￥{{ d.originalPrice }}</p>
              <p class="jq">原价</p>
            </li>
            <li>
              <p class="jq">{{ d.stores }}件</p>
              <p class="jq">限量</p>
            </li>
          </ol>
        </div>
      </div>
   
   </li>
  </div>
</template>

<script>

export default {
  props: ["d"],
  data() {
    return {
     
    };
  },
  created() {
   
  },
  mounted() {
    
  },
  methods: {}
};
</script>

<style  lang="less">
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
            margin: 0.05rem;
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
