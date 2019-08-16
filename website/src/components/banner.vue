<template>
    <div class="banner">
        <el-carousel :height="595+'px'" :interval="4000" class="banner_item">
            <el-carousel-item v-for="item in this.banner" :key="item.id">
                <a :href="item.url">
                    <div class="imgbox">
                        <img :src="item.img" alt>
                        <!-- <router-link
                            tag="h3"
                            class="free_trial"
                            to="/register"
                            v-show="item.is_button && item.is_button==1"
                        >
                            立即体验
                            <i class="iconfont icon-icon"></i>
                        </router-link>-->
                        <!-- ---------------------跳转到易教育A6的官网-------------------------------- -->
                        <h3 class="free_trial" v-show="item.is_button && item.is_button==1">
                            <a href="http://www.yunbaonet.cn/?yijiaoyu=true" target="_blank">
                                立即体验
                                <i class="iconfont icon-icon"></i>
                            </a>
                        </h3>
                    </div>
                </a>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {
    name: "banner",
    props: ["second_id"],
    data() {
        return {
            banner: []
        };
    },
    mounted() {
        //绑定监听
        window.addEventListener("scroll", this.handleScroll);
        // console.log(this.second_id)
        //banner图片
        if (this.second_id) {
            this.postRequest("v1/application/second-banner").then(res => {
                this.banner = res.data.data;
            });
        } else {
            this.postRequest("v1/application/first-banner").then(res => {
                this.banner = res.data.data;
            });
        }
    },
    methods: {
        outReg() {
            localStorage.setItem("yijiaoyu", true);
        }
    },
    components: {}
};
</script>

<style scoped lang="less">
.banner {
    width: 100%;
    height: 595px;
    overflow: hidden;
    text-align: center;
    .banner_item {
        position: relative;
        background: #4a90e2;
        .el-carousel__item {
            a {
                display: block;
                height: 100%;
                background: linear-gradient(
                    360deg,
                    rgba(103, 144, 219, 1) 0%,
                    rgba(74, 144, 226, 1) 100%
                );
                .imgbox {
                    display: block;
                    width: 1920px;
                    height: 595px;
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    margin-left: -960px;
                    margin-top: -297px;
                    text-align: center;
                    img {
                        display: block;
                        width: 3600px;
                        height: 595px;
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        margin-left: -1800px;
                        margin-top: -297px;
                    }
                }
            }
            .guide {
                position: absolute;
                font-family: PFregular;
                font-weight: 500;
                font-size: 30px;
                color: #ffffff;
                top: 250px;
                left: 360px;
            }
            .free_trial {
                cursor: pointer;
                position: absolute;
                font-size: 20px;
                top: 483px;
                left: 360px;
                text-align: center;
                color: #ffffff;
                width: 180px;
                height: 56px;
                line-height: 36px;
                padding: 10px 0;
                border-radius: 8px;
                background: linear-gradient(
                    180deg,
                    rgba(255, 221, 135, 1) 0%,
                    rgba(246, 185, 84, 1) 100%
                );
                a {
                    display: block;
                    cursor: pointer;
                    background: transparent;
                    color: white;
                }
                i:before {
                    font-size: 20px;
                }
            }
        }
        .el-carousel__item:nth-child(2n) {
            background-color: #99a9bf;
        }
        .el-carousel__item:nth-child(2n + 1) {
            background-color: #d3dce6;
        }
    }
}
</style>
