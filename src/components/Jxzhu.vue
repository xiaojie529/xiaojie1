<template>
  <div class="jx">
    <p class="title1">
      <span>精选专题</span>
      <van-icon class="small" name="arrow" />
    </p>
    <div class="wai">
      <ul class="list">
        <jxzi v-for="item in list" :jx="item" :key="item.id"></jxzi>
      </ul>
    </div>
  </div>
</template>

<script>
import jxzi from "@/components/Jxzi";
export default {
  data() {
    return {
      list: []
    };
  },
  components: {
    jxzi
  },
  created() {
    this.$http.get("https://api.it120.cc/small4/cms/news/list").then(res => {
      //   console.log(res);
      this.list = res.data.data;
    });
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="less">
.jx {
  border-bottom: 0.18rem solid #f5f5f5;

  .title1 {
    width: 100%;
    height: 0.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    span {
      font-size: 0.2rem;
    }
    .small {
      font-size: 0.2rem;
    }
  }
  .wai {
    width: 100%;
    // height: 3.8rem;
    overflow: auto;
    .list {
      width: 22.8rem;
      display: flex;
    }
  }
}
</style>
