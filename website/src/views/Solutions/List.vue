<template>
    <div class="solutions">
        <outLink></outLink>
        <Top :index="'1'"></Top>
        <div class="banner">
            <el-carousel :height="595+'px'" :interval="4000" class="banner_item">
                <el-carousel-item v-for="item in banner" :key="item">
                    <img v-lazy="item" alt>
                </el-carousel-item>
            </el-carousel>
        </div>
        <WordCloud></WordCloud>
        <div class="brand_slogen"></div>
        <div class="light_point">
            <!-- <div class="point" v-for="(item,index) in 6" :key=index>
                <h1>display with picture</h1>
                <router-link :to="{path:'/solutions/detial',query:{id:index}}" tag="div" class="get_more">了解更多</router-link>
            </div>-->
            <div class="around">
                <Marketing></Marketing>
            </div>
            <div class="around">
                <Sell></Sell>
            </div>
            <div class="around">
                <Business></Business>
            </div>
            <div class="around">
                <Ziyuan></Ziyuan>
            </div>
            <div class="around">
                <Controls></Controls>
            </div>
            <div class="around">
                <Education></Education>
            </div>
        </div>
        <Register></Register>
        <Footer></Footer>
    </div>
</template>

<script>
// 同首页
import outLink from "@/components/outsideLink.vue";
import Marketing from "../home/marketing.vue";
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
    name: "List",
    data() {
        return {
            banner: [
                require("../../assets/images/解决方案/solution1.png"),
                require("../../assets/images/解决方案/solution2.png"),
                require("../../assets/images/解决方案/solution3.png"),
                require("../../assets/images/解决方案/solution4.png"),
                require("../../assets/images/解决方案/solution5.png"),
                require("../../assets/images/解决方案/solution6.png")
            ]
        };
    },
    components: {
        Top,
        Register,
        Footer,
        WordCloud,
        ImgDisplay,
        Marketing,
        Sell,
        Business,
        Ziyuan,
        Controls,
        Education,
        outLink
    }
};
</script>

<style scoped lang="less">
.solutions {
    width: 100%;
    overflow: hidden;
    .banner {
        width: 100%;
        height: 595px;
        overflow: hidden;
        text-align: center;
        .banner_item {
            img {
                display: block;
                width: 1920px;
                height: 595px;
                position: absolute;
                left: 50%;
                top: 50%;
                margin-left: -960px;
                margin-top: -297px;
            }
        }
    }
    .brand_slogen {
        width: 100%;
        height: 250px;
        margin: 30px 0;
        background: url("~@/assets/images/slogen.png") center;
    }
    .light_point {
        .around > div {
            position: relative;
            width: 1200px;
            height: 360px;
            margin: 0 auto;
            margin-top: -2px;
            display: flex;
            padding: 38px 0 38px 100px;
            // background:url('~@/assets/images/home/qipao.png') no-repeat center;
            background-size: contain;
            // box-shadow:4px 4px 30px 0px rgba(174,173,173,0.5);
            .shoucut {
                width: 600px;
                .col_t {
                    text-align: left;
                    font-size: 24px;
                    font-weight: 500;
                    color: rgba(74, 144, 226, 1);
                    line-height: 33px;
                }

                .adv_word {
                    text-align: left;
                    padding: 56px 0;
                    p {
                        font-size: 20px;
                        font-family: PingFangSC-Medium;
                        font-weight: 500;
                        color: rgba(102, 102, 102, 1);
                        line-height: 28px;
                    }
                }
            }

            .light_point {
                text-align: left;
                li {
                    margin-bottom: 8px;
                    height: 28px;
                    font-size: 20px;
                    font-family: PingFangSC-Regular;
                    font-weight: 400;
                    color: rgba(64, 64, 64, 1);
                    line-height: 28px;
                    img {
                        width: 21px;
                        display: inline-block;
                        margin-right: 12px;
                        vertical-align: middle;
                    }
                }
            }

            .know_more {
                position: absolute;
                left: 100px;
                top: 260px;
                width: 105px;
                height: 36px;
                background: linear-gradient(
                    360deg,
                    rgba(103, 144, 219, 1) 0%,
                    rgba(118, 157, 234, 1) 100%
                );
                border-radius: 5px;
                .btn {
                    height: 36px;
                    line-height: 36px;
                    color: #ffffff;
                    cursor: pointer;
                    text-align: center;
                }
            }
        }
        & > div:nth-child(even) {
            background: #f4f4f4;
        }
    }
}
</style>
