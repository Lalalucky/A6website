<template>
    <div class="img_display"></div>
</template>

<script>
export default {
    name: "ImgDisplay",
    props:['msg'],
    data() {
        return {};
    },
    components: {},
    mounted(){
        console.log(this.msg);

    }
};
</script>

<style scoped lang="less">
.img_display {
    width: 100%;
    overflow: hidden;
    height: 650px;
    background: skyblue;
}
</style>
