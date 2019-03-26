<template>
    <div class="solutions_detial">
        <Top></Top>
        <ImgDisplay></ImgDisplay>  
        <div class="point_adv">
            <div class="advantage">
                
            </div>
        </div>
    </div>
</template>

<script>
import Top from "@/components/Top.vue";
import ImgDisplay from "@/components/ImgDisplay.vue"
import Footer from "@/components/Footer.vue";
import Register from "@/components/LinkRegister.vue";
export default {
    name: "",
    data() {
        return {
            id:''
        };
    },
    created() {
        this.id=this.$route.query.id
    },
    components: {
       Top,ImgDisplay
    }
};
</script>

<style scoped lang="less">
</style>
