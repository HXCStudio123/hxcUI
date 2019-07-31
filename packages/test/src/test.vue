<template>
    <div class="xr-test" @click="handleClick">{{ num }}</div>
</template>

<script>
    export default {
        //name 是未来的标签名字！！！！！！
        name: "hxcTest", // 这个名字很重要，name是未来的标签名<hxc-test></hxc-test>
        data(){
            return{
                num:0
            }
        },
        methods: {
            handleClick () {
                this.num++
            }
        }
    }
</script>

<style scoped>
    .xr-test {
        width: 100px;
        height: 100px;
        line-height: 100px;
        border-radius: 50%;
        font-size: 30px;
        text-align: center;
        background: #24292e;
        color: white;
    }
</style>