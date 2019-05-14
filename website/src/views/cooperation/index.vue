<template>
    <div class="coopration">
        <outLink></outLink>
        <Top :index="'4'"></Top>
        <Banner></Banner>
        <div class="new_partner">
            <h1 class="theme">新签客户</h1>
            <div class="container">
                <div class="item">
                    <img src="@/assets/images/合作伙伴/新签客户1.png" alt>
                    <div class="school_info">
                        <p class="come_from">黄永飞</p>
                        <p class="mechism_name">江硕教育</p>
                    </div>
                </div>
                <div class="item">
                    <img src="@/assets/images/合作伙伴/新签客户2.png" alt>
                    <div class="school_info">
                        <p class="come_from">冯均贺</p>
                        <p class="mechism_name">南极瑞宁教育</p>
                    </div>
                </div>
                <div class="item">
                    <img src="@/assets/images/合作伙伴/新签客户3.png" alt>
                    <div class="school_info">
                        <p class="come_from">张斌</p>
                        <p class="mechism_name">巨宏学校校长</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="older_partner">
            <h1 class="theme">合作客户</h1>
            <div class="container">
                <div class="cooper_display">
                    <div class="showItem">
                        <img src="@/assets/images/cooper/云豆.png" alt>
                        <img src="@/assets/images/cooper/云豆fade.png" alt>
                    </div>
                    <div class="showItem">
                        <img src="@/assets/images/cooper/泰州.png" alt>
                        <img src="@/assets/images/cooper/泰州fade.png" alt>
                    </div>
                    <div class="showItem">
                        <img src="@/assets/images/cooper/鲁班.png" alt>
                        <img src="@/assets/images/cooper/鲁班fade.png" alt>
                    </div>
                    <div class="showItem">
                        <img src="@/assets/images/cooper/金职.png" alt>
                        <img src="@/assets/images/cooper/金职fade.png" alt>
                    </div>
                    <div class="showItem">
                        <img src="@/assets/images/cooper/英才.png" alt>
                        <img src="@/assets/images/cooper/英才fade.png" alt>
                    </div>

                    <div class="showItem">
                        <img src="@/assets/images/cooper/华睿.png" alt>
                        <img src="@/assets/images/cooper/华睿fade.png" alt>
                    </div>
                    <div class="showItem">
                        <img src="@/assets/images/cooper/通州.png" alt>
                        <img src="@/assets/images/cooper/通州fade.png" alt>
                    </div>
                    <div class="showItem">
                        <img src="@/assets/images/cooper/建培.png" alt>
                        <img src="@/assets/images/cooper/建培fade.png" alt>
                    </div>
                    <div class="showItem">
                        <img src="@/assets/images/cooper/易直学.png" alt>
                        <img src="@/assets/images/cooper/易直学fade.png" alt>
                    </div>
                    <div class="showItem">
                        <img src="@/assets/images/cooper/泥瓦匠.png" alt>
                        <img src="@/assets/images/cooper/泥瓦匠fade.png" alt>
                    </div>

                    <div class="showItem">
                        <img src="@/assets/images/cooper/三诚.png" alt>
                        <img src="@/assets/images/cooper/三诚fade.png" alt>
                    </div>
                    <div class="showItem">
                        <img src="@/assets/images/cooper/扬州.png" alt>
                        <img src="@/assets/images/cooper/扬州fade.png" alt>
                    </div>
                    <div class="showItem">
                        <img src="@/assets/images/cooper/镇江.png" alt>
                        <img src="@/assets/images/cooper/镇江fade.png" alt>
                    </div>
                    <div class="showItem">
                        <img src="@/assets/images/cooper/瑞宁.png" alt>
                        <img src="@/assets/images/cooper/瑞宁fade.png" alt>
                    </div>
                    <div class="showItem">
                        <img src="@/assets/images/cooper/江硕.png" alt>
                        <img src="@/assets/images/cooper/江硕fade.png" alt>
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
                <el-carousel-item v-for="item in with_person" :key="item.id">
                    <div class="every">
                        <div class="mankind">
                            <div class="photo_frame">
                                <img :src="item.img" alt>
                            </div>
                            <p class="name">{{item.name}}</p>
                            <p class="description">{{item.description}}</p>
                            <p></p>
                        </div>
                        <div class="wordDisc">
                            <p>{{item.remark}}</p>
                            <!-- <img :src="item.img" alt> -->
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
import outLink from "@/components/outsideLink.vue";
import Banner from "@/components/banner.vue";
import Top from "@/components/top.vue";
import Register from "@/components/linkRegister.vue";
import Footer from "@/components/footer.vue";
export default {
    name: "",
    data() {
        return {
            with_person: []
        };
    },
    components: {
        Top,
        Register,
        Footer,
        outLink,
        Banner
    },
    mounted() {
        this.postRequest("v1/application/partner-case").then(res => {
            this.with_person = res.data.data;
        });
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
                .come_from {
                    height: 28px;
                    font-size: 20px;
                    font-weight: 500;
                    color: rgba(64, 64, 64, 1);
                    line-height: 28px;
                }
                .mechism_name {
                    font-size: 18px;
                    color: rgba(68, 68, 68, 1);
                    line-height: 25px;
                }
            }
            .cooper_display {
                width: 100%;
                display: flex;
                height: 300px;
                padding: 0 0 50px;
                flex-wrap: wrap;
                .showItem {
                    width: 20%;
                    height: 80px;
                    text-align: center;
                    position: relative;
                    overflow: hidden;
                    .special {
                        height: 60px;
                        left: 70px;
                    }
                    img {
                        position: absolute;
                        display: block;
                        left: 35px;
                    }
                    img:nth-child(1) {
                        top: -100px;
                        z-index: 5;
                    }
                    img:nth-child(2) {
                        top: 0px;
                        z-index: 5;
                    }
                    &:hover img:nth-child(1) {
                        top: 0;
                    }
                    &:hover img:nth-child(2) {
                        top: 80px;
                    }
                }
            }
        }
    }
    .older_partner {
        position: relative;
        &:before {
            content: " ";
            position: absolute;
            top: 50px;
            height: 40px;
            width: 1200px;
            margin: 0 auto;
            background: url("~@/assets/images/zhuangshi.png") center;
            // background-size: 100%;
        }
    }
    .school_master {
        width: 1200px;
        margin: 0 auto;
        .with_person {
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
                        // border: 1px solid #cccccc;
                        overflow: hidden;
                        img {
                            display: block;
                            width: 210px;
                            margin: 0 auto;
                            height: 220px;
                            box-shadow: 0px 0px 10px 0px rgba(218, 219, 220, 1);
                            border-radius: 8px;
                            margin-top: 5px;
                        }
                    }
                    p {
                        font-family: PFregular;
                        text-align: center;
                        line-height: 28px;
                        font-size: 20px;
                    }
                    .name {
                        margin-top: 20px;
                        font-size: 22px;
                        font-weight: 500;
                        color: rgba(64, 64, 64, 1);
                        line-height: 30px;
                    }
                    .description {
                        font-size: 20px;
                        font-weight: 400;
                        color: rgba(68, 68, 68, 1);
                    }
                    & > p:nth-child(2) {
                        font-weight: 500;
                        color: rgba(64, 64, 64, 1);
                    }
                    & > p:nth-child(3) {
                        font-weight: 400;
                        color: rgba(68, 68, 68, 1);
                    }
                    & > p:nth-child(4) {
                        font-weight: 400;
                        color: rgba(68, 68, 68, 1);
                    }
                }
                .wordDisc {
                    width: 712px;
                    height: 320px;
                    font-size: 20px;
                    font-weight: 400;
                    color: rgba(102, 102, 102, 1);
                    line-height: 28px;
                    padding: 30px 20px;
                    background: rgba(255, 255, 255, 1);
                    box-shadow: 0px 0px 10px 0px rgba(218, 219, 220, 1);
                    margin-top: 5px;
                    border-radius: 16px;
                    display: flex;
                    justify-content: space-around;
                    p {
                        width: 100%;
                    }
                    // img {
                    //     width: 120px;
                    //     height: 120px;
                    // }
                }
            }
        }
    }
}
</style>
