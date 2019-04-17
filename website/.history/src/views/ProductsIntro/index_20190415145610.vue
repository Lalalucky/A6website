<template>
    <div class="products_intro">
        <Top :index="'2'"></Top>
        <ImgDisplay :msg="'skyblue'"></ImgDisplay>
        <YiHelper :h1="'产品功能'"></YiHelper>
        <!-- 版本 -->
        <div class="versions">
            <div class="ace_exhibition">should be demonstrate with pictures</div>
            <div class="events">
                <h1>我们努力让“变得更好”成为一种常态</h1>
                <!-- 大事记 -->
                <div class="events_path">
                    <div class="row_box"></div>
                </div>
            </div>
        </div>
        <YiJob :showTime='showTime'></YiJob>
        <Register></Register>
        <Footer></Footer>
    </div>
</template>

<script>
import Top from "@/components/top.vue";
import ImgDisplay from "@/components/imgDisplay.vue";
import YiHelper from "@/components/yiHelper.vue";
import YiJob from "@/components/yiJob.vue";
import Register from "@/components/linkRegister.vue";
import Footer from "@/components/footer.vue";
export default {
    name: "",
    data() {
        return {
            img_source: require("../../assets/images/path.png"),
            showTime:false,
        };
    },
    components: {
        Top,
        ImgDisplay,
        YiHelper,
        YiJob,
        Register,
        Footer
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },
    methods:{
        handleScroll() {
            let scrollTop =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop;
                // console.log(scrollTop);
            if( scrollTop>2400 ){
                this.showTime = true;
            }
        },
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
                    img{
                        display: block;
                        width: 60%;
                    }
                }
            }
        }
    }
}
</style>
