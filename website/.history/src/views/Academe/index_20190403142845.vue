<template>
    <div class="academe">
        <Top :index="'3'"></Top>
        <imgDisplay :msg="'#ff0036'"></imgDisplay>
        <div class="news_tab">
            <div class="tab_controls">
                <router-link tag="div" class="controls" to="/academe/index/company">公司资讯</router-link>
                <router-link tag="div" class="controls" to="/academe/index/industry">行业资讯</router-link>
                <router-link tag="div" class="controls" to="/academe/index/market">市场营销</router-link>
                <router-link tag="div" class="controls" to="/academe/index/organization">机构管理</router-link>
                <router-link tag="div" class="controls" to="/academe/index/products">产品动态</router-link>
                <router-link tag="div" class="controls" to="/academe/index/experience">经验分享</router-link>
            </div>
            <router-view></router-view>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Top from "@/components/top.vue";
import imgDisplay from "@/components/imgDisplay.vue";
import Footer from "@/components/footer.vue";
export default {
    name: "academe",
    data() {
        return {
            carousel: [
                require("../../assets/images/carousel (1).jpg"),
                require("../../assets/images/carousel (2).jpg"),
                require("../../assets/images/carousel (3).jpg")
            ],
            dry: [
                {
                    id: "Y23333",
                    title: "悟道修炼 不问一生缘劫",
                    simply_con: "白纸画卷 寥寥几笔绘江湖深浅",
                    time: "2019-03-22",
                    reading: "221",
                    img: require("../../assets/images/yun.jpg")
                },
                {
                    id: "Y24444",
                    title: "悟道修炼 不问一生缘劫",
                    simply_con: "白纸画卷 寥寥几笔绘江湖深浅",
                    time: "2019-03-22",
                    reading: "221",
                    img: require("../../assets/images/yun.jpg")
                },
                {
                    id: "Y25555",
                    title: "悟道修炼 不问一生缘劫",
                    simply_con: "白纸画卷 寥寥几笔绘江湖深浅",
                    time: "2019-03-22",
                    reading: "221",
                    img: require("../../assets/images/yun.jpg")
                },
                {
                    id: "Y26666",
                    title: "悟道修炼 不问一生缘劫",
                    simply_con: "白纸画卷 寥寥几笔绘江湖深浅",
                    time: "2019-03-22",
                    reading: "221",
                    img: require("../../assets/images/yun.jpg")
                }
            ]
        }
    },
    components: {
        Top,
        imgDisplay,
        Footer
    },
    methods:{
        goToArticle(article_id){
            console.log(article_id)
            this.$router.push({
                path:'/academe/article',
                query:{id:article_id}
            })
        }
    }
};
</script>

<style scoped lang="less">
.academe {
    width: 100%;
    .news_tab {
        padding: 30px 0;
        width: 90%;
        margin: 0 auto;
        .tab_controls {
            display: flex;
            padding: 30px 0;
            .controls {
                width: 16.6%;
                text-align: center;
                cursor: pointer;
            }
        }
    }
}
</style>
