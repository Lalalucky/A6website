<template>
    <div class="products_intro">
        <Top></Top>
        <ImgDisplay :msg="'skyblue'"></ImgDisplay>
        <YiHelper :h1="'产品功能'"></YiHelper>
        <!-- 版本 -->
        <div class="versions">
            <div class="ace_exhibition">should be demonstrate with pictures</div>
            <div class="events">
                <h1>我们努力让“变得更好”成为一种常态</h1>
                <!-- 大事记 -->
                <div class="events_path">
                    <div class="row_box">
                        <!-- 盛放图片 -->
                        <img :src="this.img_source" alt>
                    </div>
                </div>
            </div>
        </div>
        <YiJob></YiJob>
        <Register></Register>
        <Footer></Footer>
    </div>
</template>

<script>
import Top from "@/components/Top.vue";
import ImgDisplay from "@/components/ImgDisplay.vue";
import YiHelper from "@/components/YiHelper.vue";
import YiJob from "@/components/YiJob.vue";
import Register from "@/components/LinkRegister.vue";
import Footer from "@/components/Footer.vue";
export default {
    name: "",
    data() {
        return {
            img_source: require("../../assets/images/path.png")
        };
    },
    components: {
        Top,
        ImgDisplay,
        YiHelper,
        YiJob,
        Register
    }
};
</script>

<style scoped lang="less">
.products_intro {
    .versions {
        width: 90%;
        margin: 0 auto;
        .ace_exhibition {
            width: 100%;
            height: 300px;
            line-height: 300px;
            text-align: center;
            background: rgba(120, 191, 209, 0.2);
        }
        .events {
            width: 100%;
            h1 {
                text-align: center;
                line-height: 60px;
                font-size: 24px;
                margin: 30px 0;
            }
            .events_path{
                width: 100%;
                .row_box{
                    width: 100%;
                    height: 400px;
                    overflow-x: hidden;
                    overflow-y: scroll;
                }
            }
        }
    }
}
</style>
