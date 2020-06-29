<template>
  <div class="app">
    <div class="shop">
      <ul>
        <li v-for="(item,index) in obj.result" :key="index">
          <p>{{ item.title }}</p>

          <p>{{ item.price }}</p>
          <p>{{ item.old_price }}</p>
          <p>
            <img :src="item.pic" alt />
          </p>

          <p>
            <button @click="count({index,str:'-'})">-</button>
            <span>{{ item.num }}</span>
            <button @click="count({index,str:'+'})">+</button>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      obj: {}
    };
  },
  created() {},
  mounted() {
      let { data } = this.$http.get("../static/list.json").then(res => {
      console.log(res);
      this.obj = res.data;
    });
  },
  methods: {}
};
</script>

<style scoped>
.app {
  width: 100%;
  height: 100%;
  background-color: #fff;
}
.shop {
  width: 100%;
  height: 300px;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #ccc;
}
</style>
