<template>
    <div class="solutions">
        <Top :index="'1'"></Top>
        <ImgDisplay :msg="'#bb2210'"></ImgDisplay>
        <WordCloud></WordCloud>
        <div class="brand_slogen">
            <h1>品牌slogen</h1>
        </div>
        <div class="light_point">
            <!-- <div class="point" v-for="(item,index) in 6" :key=index>
                <h1>display with picture</h1>
                <router-link :to="{path:'/solutions/detial',query:{id:index}}" tag="div" class="get_more">了解更多</router-link>
            </div> -->
            <Marketing></Marketing>
            <Sell></Sell>
            <Business></Business>
            <Ziyuan></Ziyuan>
            <Controls></Controls>
            <Education></Education>
        </div>
        <Register></Register>
    </div>
</template>

<script>
// 同首页
import Markrting from "../home/marketing.vue";
import Sell from "../home/sell.vue";
import Business from "../home/business.vue";
import Ziyuan from "../home/ziyuan.vue";
import Controls from "../home/controls.vue";
import Education from "../home/education.vue";

import Top from "@/components/top.vue";
import WordCloud from "@/components/wordCloud.vue";
import ImgDisplay from "@/components/imgDisplay.vue";
import Register from "@/components/linkRegister.vue";
import Footer from "@/components/footer.vue";
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
        ImgDisplay,
        Markrting,
        Sell,
        Business,
        Ziyuan,
        Controls,
        Education
    }
};
</script>

<style scoped lang="less">
.solutions {
    width: 100%;
    overflow: hidden;
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
        &>div{
            
        }
    }
}
</style>
