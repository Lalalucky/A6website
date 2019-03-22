<template>
    <!-- 官网主页 -->
    <div>
        <Top></Top>
        <div class="banner">
            <el-carousel name="home">
                <el-carousel-item v-for="item in 4" :key="item">
                    <h3>{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="wordCloud">
            <h3>机构运营，本不应该这么难</h3>
        </div>
       
        <div class="yiHelp">
            <h1>易教育如何帮您实现机构运营全面升级</h1>
            <div class="container">
                <div class="tips" v-for="(item,index) in someHelp" :key="index">
                    <img :src="item.imgUrl" alt="">
                    <p v-for="(op,index) in item.detial_operations" :key="index"></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Top from "@/components/Top.vue";

export default {
    name: "",
    data() {
        return {
            helpImg1:'',
            tabParams: ["营销", "销售", "业务", "资源", "管控", "继续教育"],
            nowIndex: 0,
            isShow: false,
            someHelp:[{imgUrl:helpImg1,title:"",detial_operations:["活动管理","文章管理","会议管理","电子券/优惠券"]},undefined,undefined]
        };
    },
    created(){
        let Img1 = "assets/images/配图.png";
        this.helpImg1 = require("@/"+Img1);
    },
    components: {
        Top
    },
    methods: {
        toggleTabs(index) {
            this.nowIndex = index;
        }
    }
};
</script>
<style scoped lang="less">
.banner {
    width: 100%;
    height: 600px;
    overflow: hidden;
    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 600px;
        margin: 0;
        text-align: center;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n + 1) {
        background-color: #d3dce6;
    }
}
.wordCloud {
    height: 300px;
    width: 100%;
    overflow: hidden;
    box-sizing: border-box;
    background: #99a9bf;
    opacity: 0.75;
    h3 {
        line-height: 300px;
        text-align: center;
    }
}
.yiEdu {
    height: 300px;
    width: 100%;
    overflow: hidden;
    h1 {
        text-align: center;
        line-height: 60px;
        font-size: 24px;
    }
    .sixAdv {
        width: 100%;
        .tab {
            width: 100%;
            display: flex;
            flex-wrap: nowrap;
            li {
                width: 16.6%;
                height: 30px;
                line-height: 30px;
                text-align: center;
            }
        }
        .adv_point {
            width: 100%;
            height: 50px;
            padding: 70px 0;
            text-align: center;
            p {
                line-height: 30px;
            }
        }
    }
}
.yiHelp {
    height: 300px;
    width: 100%;
    overflow: hidden;
    h1 {
        text-align: center;
        line-height: 60px;
        font-size: 24px;
    }
    .container {
        display: flex;
        flex-wrap: wrap;
    }
}
</style>
<style>
 .el-carousel__container {
        height: 600px;
    }
</style>
