<template>
  <div>
    <router-view></router-view>
     <Loading v-if="$store.state.isLoading"></Loading>
  </div>
</template>

<script>
import Loading from "./components/Loading.vue";
export default {
  data() {
    return {};
  },
  components: {Loading},
  created() {},
  mounted() {
    // this.$http.get("https://www.vue-js.com/api/v1/topics").then(res => {});
  },
  methods: {}
};
</script>

<style >
#app{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
*{
  margin: 0;
  padding: 0;
}

</style>