<template>
    <div class="coopration">
        <Top></Top>
        <imgDisplay :msg="'#606060'"></imgDisplay>
        <div class="new_partner">
            <h1>新签客户</h1>
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
            <h1>合作客户</h1>
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
    </div>
</template>

<script>
import Top from "@/components/top.vue";
import imgDisplay from "@/components/imgDisplay.vue";
import Footer from "@/components/footer.vue";
export default {
    name: "",
    data() {
        return {};
    },
    components: {
        Top,
        imgDisplay,
        Footer
    }
};
</script>

<style scoped lang="less">
.coopration {
    width: 100%;
    .new_partner,
    .older_partner {
        width: 80%;
        margin: 0 auto;
        h1 {
            text-align: center;
            line-height: 60px;
            font-size: 24px;
            margin: 30px 0;
        }
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
        }
    }
    .school_master{
        width: 80%;
        margin: 0 auto;
        .with_person {
            .every {
                width: 80%;
                margin: 0 auto;
                display: flex;
                justify-content: space-around;
                .mankind {
                    width: 30%;
                    height: 400px;
                    .photo_frame{
                        width: 80%;
                        height: 15vw;
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
