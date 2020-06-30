<template>
  <div class="home">
    <router-view></router-view>
    <tabbar></tabbar>
  </div>
</template>

<script>
import tabbar from "../components/Tabbar"
export default {
  data() {
    return {
       
    };
  },
  components: {
      tabbar
  },
  created() {
     
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped>

</style>
