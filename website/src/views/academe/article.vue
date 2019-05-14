<template>
    <!----- 文章详情模板 ----->
    <div class="article">
        <Top></Top>
        <div class="detials">
            <h1 class="headline">{{this.main.post_title}}</h1>
            <div class="content">
                <div class="related_info">
                    <div class="essay_tag">
                        <!-- 文章标签： -->
                        <!-- <span v-for="item in this.main.tag" :key="item">{{item}}/</span> -->
                    </div>
                    <div class="establisher">
                        发布人：
                        <span>{{this.main.author_name}}</span>
                    </div>
                    <div class="essay_time">
                        发布时间：
                        <span>{{this.main.created_at}}</span>
                    </div>
                </div>
                <div class="essay_itself">
                    <!-- 转发 -->
                    <div class="transpond">
                        <div class="tools"></div>
                    </div>
                    <!-- 文章主体 -->
                    <div class="essay_main" ref="essay_main"></div>
                </div>
                <div class="betweens_essay">
                    <div class="prev_essay" v-show="this.main.last" @click="search_article(0)">上一篇</div>
                    <div class="next_essay" v-show="this.main.next" @click="search_article(1)">下一篇</div>
                </div>
            </div>
        </div>
        <!-- 下面的精选文章需要登录后查看 -->
        <div class="recommmed">
            <p class="recommed_t">精选文章</p>
            <div class="recommed_article">
                <div class="re_item" v-for="item in 5" :key="item">
                    <img src alt>
                    <!-- <p class="theme">标题</p> -->
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Top from "@/components/top.vue";
import Footer from "@/components/footer.vue";
export default {
    name: "",
    data() {
        return {
            // 这里记录当前这篇文章所有的相关内容
            main: {},
            last: "",
            next: "",
            essay_main: "",
            // 定时器,数字2代表两分钟
            minute: 1
        };
    },
    created() {
        window.scrollTo(0, 0);
        this.getData();
        _MEIQIA("showPanel");
    },
    mounted() {
        // this.WXconfig.wxShowMenu();
    },
    watch: {
        $route() {
            if (this.$route.path === "/academe/article") {
                this.getData();
            }
        }
    },
    methods: {
        // 一个定时的弹出对话框
        openCon() {
            let time = this.minute * 60 * 1000;
            setTimeout(() => {
                _MEIQIA("showPanel");
            }, time);
        },
        getData() {
            let id = this.$route.query.article_id;
            this.postRequest("v1/application/get-paper-detail", { id }).then(
                res => {
                    this.main = res.data.data;
                    this.last = this.main.last;
                    this.next = this.main.next;
                    this.essay_main = this.main.content;
                    this.$refs.essay_main.innerHTML = this.main.content;
                }
            );
        },
        search_article(type) {
            if (type === 0) {
                this.$router.replace({
                    path: "/academe/article",
                    query: { article_id: this.last }
                });
            } else {
                this.$router.replace({
                    path: "/academe/article",
                    query: { article_id: this.next }
                });
            }
        }
    },
    components: {
        Top,
        Footer
    }
};
</script>

<style scoped lang="less">
.article {
    width: 100%;
    .detials {
        width: 1200px;
        margin: 0 auto;
        padding: 45px 0;
        .headline {
            text-align: center;
            font-size: 24px;
            line-height: 40px;
            padding: 20px;
        }
        .content {
            border: 1px solid #ececec;
            padding: 30px;
            .related_info {
                display: flex;
                padding: 5px;
                div {
                    width: 33.3%;
                    text-align: center;
                }
            }
            .essay_itself {
                display: flex;
                padding: 30px 0;
                min-height: 800px;
                .transpond {
                    width: 200px;
                    padding: 0 50px;
                    .tools {
                        border: 1px solid #ececec;
                        height: 800px;
                        border-radius: 10px;
                        background: #b6b6b7;
                        visibility: hidden;
                    }
                }
                .essay_main {
                    width: 900px;
                    min-height: 800px;
                    // height: 800px;
                    padding: 30px;
                    // overflow: auto;
                }
                .essay_main::-webkit-scrollbar {
                    /*滚动条整体样式*/
                    width: 10px; /*高宽分别对应横竖滚动条的尺寸*/
                    height: 1px;
                }
                .essay_main::-webkit-scrollbar-thumb {
                    /*滚动条里面小方块*/
                    border-radius: 10px;
                    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
                    background: #535353;
                }
                .essay_main::-webkit-scrollbar-track {
                    /*滚动条里面轨道*/
                    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
                    border-radius: 10px;
                    background: #ededed;
                }
            }
            .betweens_essay {
                padding-left: 6%;
                height: 60px;
                display: flex;
                justify-content: center;
                div {
                    padding: 15px 25px;
                    cursor: pointer;
                }
            }
        }
    }
    .recommmed {
        width: 80%;
        margin: 0 auto;
        visibility: hidden;
        .recommed_article {
            display: flex;
            .re_item {
                width: 20%;
                padding: 15px;
                height: 13vw;
                img {
                    display: block;
                    width: 150px;
                    height: 150px;
                    margin: 0 auto;
                    border: 1px solid #cccccc;
                }
                p {
                    text-align: center;
                }
            }
        }
    }
}
</style>
