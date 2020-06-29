<template>
    <div>
       <ul>
                <li v-for="(item,index) in obj.result" :key="index">
                    <p>{{ item.title }}</p>
                    <p>{{ item.status }}</p>
                    <p>{{ item.pid }}</p>
                    <p>{{ item.sort }}</p>
                </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            obj:{}
        };
    },
    created() {

    },
    mounted() {
        let { data } = this.$http.get("../static/fenlei.json").then(res => {
      console.log(res);
      this.obj = res.data;
    });
    },
    methods: {

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
</style>
