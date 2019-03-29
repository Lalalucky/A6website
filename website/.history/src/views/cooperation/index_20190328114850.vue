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
        .container{
            width: 100%;
            display: flex;
            .item{
                width: 33.3%;
                height: 10%;
                img{
                    display: block;
                    width: 50%;
                    height: 10vw;
                    margin: 0 auto;
                    border: 1px solid #ececec;
                    margin: 5px 0;
                }
                p{
                    text-align: center;
                }
            }
        }
    }
}
</style>
