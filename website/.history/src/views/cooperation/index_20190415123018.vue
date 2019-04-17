<template>
    <div class="coopration">
        <Top :index="'4'"></Top>
        <imgDisplay :msg="'#606060'"></imgDisplay>
        <div class="new_partner">
            <h1 class="theme">新签客户</h1>
            <div class="container">
                <div class="item" v-for="item in 3" :key="item">
                    <img src alt>
                    <div class="school_info">
                        <p class="come_from">XX校长</p>
                        <p class="come_from">XX教育机构</p>
                        <p class="words">云宝不错</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="older_partner">
            <h1 class="theme">合作客户</h1>
            <div class="container">
                <div class="cooper_display">
                        <div class="showItem">
                            <img src="../../assets/images/合作伙伴/云豆.png" alt="">
                            <img src="../../assets/images/合作伙伴/云豆0.png" alt="">
                        </div>
                        <div class="showItem">
                            <img src="../../assets/images/合作伙伴/泰州.png" alt="">
                            <img src="../../assets/images/合作伙伴/泰州0.png" alt="">
                        </div>
                        <div class="showItem">
                            <img src="../../assets/images/合作伙伴/鲁班.png" alt="">
                            <img src="../../assets/images/合作伙伴/鲁班0.png" alt="">
                        </div>
                        <div class="showItem">
                            <img src="../../assets/images/合作伙伴/金职.png" alt="">
                            <img src="../../assets/images/合作伙伴/金职0.png" alt="">
                        </div>

                        <div class="showItem">
                            <img src="../../assets/images/合作伙伴/华睿.png" alt="">
                            <img src="../../assets/images/合作伙伴/华睿0.png" alt="">
                        </div>
                        <div class="showItem">
                            <img src="../../assets/images/合作伙伴/通州.png" alt="">
                            <img src="../../assets/images/合作伙伴/通州0.png" alt="">
                        </div>
                        <div class="showItem">
                            <img src="../../assets/images/合作伙伴/南京建培.png" alt="">
                            <img src="../../assets/images/合作伙伴/南京建培0.png" alt="">
                        </div>
                        <div class="showItem">
                            <img src="../../assets/images/合作伙伴/易直学.png" alt="">
                            <img src="../../assets/images/合作伙伴/易直学0.png" alt="">
                        </div>

                        <div class="showItem">
                            <img src="../../assets/images/合作伙伴/三成.png" alt="">
                            <img src="../../assets/images/合作伙伴/三成0.png" alt="">
                        </div>
                        <div class="showItem">
                            <img src="../../assets/images/合作伙伴/扬州.png" alt="">
                            <img src="../../assets/images/合作伙伴/扬州0.png" alt="">
                        </div>
                        <div class="showItem">
                            <img src="../../assets/images/合作伙伴/镇江.png" alt="">
                            <img src="../../assets/images/合作伙伴/镇江0.png" alt="">
                        </div>
                        <div class="showItem">
                            <img src="../../assets/images/合作伙伴/瑞宁.png" alt="">
                            <img src="../../assets/images/合作伙伴/瑞宁0.png" alt="">
                        </div>
                    </div>
            </div>
        </div>
        <div class="school_master">
            <el-carousel
                :height="450+'px'"
                arrow="always"
                :interval="4000"
                indicator-position="none"
                class="with_person"
            >
                <el-carousel-item v-for="item in with_person" :key="item">
                    <div class="every">
                        <div class="mankind">
                            <div class="photo_frame">
                                <img :src="item" alt="">
                            </div>
                            <p>海绵宝宝和派大星</p>
                            <p>快乐的源泉</p>
                            <p>谁不想做一只快乐的海星</p>
                        </div>
                        <div class="wordDisc">
                            准备好了吗？孩子们？ 是的，船长 太小声罗 是的，船长 哦~是谁住在深海的大菠萝里 海绵宝宝 方方黄黄伸缩自如 海绵宝宝 如果四处探险是你的愿望 海绵宝宝 那就敲敲甲板让大鱼开路 海绵宝宝 准备… 海绵宝宝，海绵宝宝，海绵宝宝，海绵宝宝♪♪♪ ♪♪♪
                        </div>
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>
        <Register></Register>
        <Footer></Footer>
    </div>
</template>

<script>
import Top from "@/components/top.vue";
import imgDisplay from "@/components/imgDisplay.vue";
import Register from "@/components/linkRegister.vue"; 
import Footer from "@/components/footer.vue";
export default {
    name: "",
    data() {
        return {
            with_person:[
                require("../../assets/images/home/with_person1.jpeg"),
                require("../../assets/images/home/with_person2.png"),
                require("../../assets/images/home/with_person3.jpg"),
            ]
        };
    },
    components: {
        Top,
        imgDisplay,
        Register,
        Footer
    }
};
</script>

<style scoped lang="less">
.coopration {
    width: 100%;
    .new_partner,
    .older_partner {
        width: 1200px;
        margin: 0 auto;
        .container {
            width: 100%;
            display: flex;
            .item {
                width: 33.3%;
                height: 10%;
                img {
                    display: block;
                    width: 50%;
                    height: 10vw;
                    margin: 15px auto;
                    border: 1px solid #ececec;
                }
                p {
                    text-align: center;
                }
            }
            .cooper_display{
                width: 100%;
                display: flex;
                height: 300px;
                padding: 0 0 50px;
                flex-wrap: wrap;
                .showItem{
                    width: 25%;
                    height:60px;
                    text-align: center;
                    position: relative;
                    img{
                        position: absolute;
                        top: 0;
                        left: 50%;
                        margin-left: -80px;
                    }
                    img:nth-child(1){
                        display: none;
                        z-index: 100;
                    }
                    &:hover img:nth-child(1){
                        display: block;
                    }
                    &:hover img:nth-child(2){
                        display: none;
                    }
                }
            }
        }
    }
    .school_master{
        width: 100%;
        .with_person {
            width: 1200px;
            margin: 0 auto;
            .every {
                width: 80%;
                margin: 0 auto;
                display: flex;
                justify-content: space-around;
                .mankind {
                    width: 30%;
                    height: 250px;
                    .photo_frame {
                        width: 242px;
                        height: 250px;
                        margin: 0 auto;
                        border: 1px solid #cccccc;
                        overflow: hidden;
                        img{
                            display: block;
                            width: 242px;
                            height: 250px;
                        }
                    }
                    p {
                        font-family:PFregular;
                        text-align: center;
                        line-height: 28px;
                        font-size:20px;
                    }
                    &>p:nth-child(2){
                        font-weight:500;
                        color:rgba(64,64,64,1);
                    }
                    &>p:nth-child(3){
                        font-weight:400;
                        color:rgba(68,68,68,1);
                    }
                    &>p:nth-child(4){
                        font-weight:400;
                        color:rgba(68,68,68,1);
                    }
                }
                .wordDisc {
                    width: 60%;
                    height: 400px;
                    text-indent: 1rem;
                }
            }
        }
    }
}
</style>
