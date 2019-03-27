<template>
    <div class="img_display" ref="imgbg"></div>
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
        // $refs.imgbg
    }
};
</script>

<style scoped lang="less">
.img_display {
    width: 100%;
    overflow: hidden;
    height: 650px;
    background: greenyellow;
}
</style>
