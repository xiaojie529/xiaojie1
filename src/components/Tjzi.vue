<template>
    <div>
        <li>
            <img :src="j.pic" alt="">
            <p class="tjp1">{{ j.name }}</p>
            <p class="tjp2">{{ j.characteristic}}</p>
            <p class="tjp3">￥{{ j.originalPrice }}</p>
        </li>
    </div>
</template>

<script>
export default {
    props: ["j"],
    data() {
        return {

        };
    },
    created() {

    },
    mounted() {

    },
    methods: {

    }
};
</script>

<style scoped>

</style>
