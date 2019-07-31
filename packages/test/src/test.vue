<template>
    <div class="xr-test" @click="handleClick">
        {{ num }}
        <div>
            test
        </div>
    </div>
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

<style lang="scss" scoped>
    $font-size:14px;

    .xr-test {
        width: 100px;
        height: 100px;
        line-height: 100px;
        border-radius: 50%;
        font-size: $font-size;
        text-align: center;
        background: orange;
        color: white;
    }
    .xr-test{
        div {
            position: absolute;
            width: 100px;
            height: 100px;
            background-color: #0acf97;
            font-size: $font-size;
        }
        &:hover{
            cursor: pointer;
        }
    }
    @mixin divClass($test:white){
        background-color: $test;
    }
</style>