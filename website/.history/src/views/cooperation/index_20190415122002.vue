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
                <el-carousel-item v-for="item in 4" :key="item">
                    <div class="every">
                        <div class="mankind">
                            <div class="photo_frame"></div>
                            <p>校长介绍{{item}}</p>
                        </div>
                        <div class="wordDisc">
                            这是吹的牛这是吹的牛这是吹的牛这是吹的牛这是吹的牛这是吹的牛这是吹的牛这是吹的牛这是吹的牛这是吹的牛
                            这是吹的牛这是吹的牛这是吹的牛这是吹的牛这是吹的牛这是吹的牛这是吹的牛这是吹的牛这是吹的牛这是吹的牛
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
        return {};
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
            width: 80%;
            margin: 0 auto;
            .every {
                width: 80%;
                margin: 45px auto;
                display: flex;
                justify-content: space-around;
                .mankind {
                    width: 30%;
                    height: 400px;
                    .photo_frame{
                        width: 100%;
                        height: 18vw;
                        margin: 0 auto;
                        border: 1px solid #cccccc;
                    }
                    p{
                        text-align: center;
                        line-height: 30px;
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
