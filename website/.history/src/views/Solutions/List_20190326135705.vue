<template>
    <div class="solutions">
        <Top></Top>
        <div class="img_display"></div>
        <WordCloud></WordCloud>
        <div class="brand_slogen">
            <h1>品牌slogen</h1>
        </div>
        <div class="light_point">
            <div class="point" v-for="(item,index) in 6" :key=index>
                <h1>display with picture</h1>
                <router-link :to="{path:'/solutions/detial',query:{id:index}}" tag="div" class="get_more">了解更多</router-link>
            </div>
        </div>
        <Register></Register>
        <Footer></Footer>
    </div>
</template>

<script>
import Top from "@/components/Top.vue";
import WordCloud from "@/components/WordCloud.vue";
import Img_display from "@/components/Img_display.vue";
import Register from "@/components/LinkRegister.vue";
import Footer from "@/components/Footer.vue";
export default {
    name: "",
    data() {
        return {};
    },
    components: {
        Top,
        Register,
        Footer,
        WordCloud,
        Img_display
    }
};
</script>

<style scoped lang="less">
.solutions {
    width: 100%;
    overflow: hidden;
    .img_display {
        width: 100%;
        height: 650px;
        background: greenyellow;
    }
    .brand_slogen{
        #baseWidth;
        height: 450px;
        h1{
            line-height: 300px;
            text-align: center;
            font-size: 30px;
        }
    }
    .light_point{
        width: 100%;
        text-align: center;
        .point{
            #baseWidth;
            height: 350px;
            padding: 30px 0;  
            position: relative; 
            .get_more{
                position: absolute;
                bottom: 60px;
                left: 100px;
                width: 120px;
                height: 40px;
                padding: 5px 0;
                line-height: 30px;
                border: 1px solid #ececec;
                border-radius: 5px;
            } 
        }
    }
}
</style>
