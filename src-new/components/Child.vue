<template>
    <div>
       <h4>child</h4>
       {{ $store.state.count }}
    <button @click="add">+</button>
    </div>
</template>

<script>
export default {
   
    data() {
        return {
            
        };
    },
    created() {

    },
    mounted() {

    },
    methods: {
       add(){
        //    this.$store.state.num++
        this.$store.commit('addCount')
       }
    }
};
</script>

<style scoped>

</style>
