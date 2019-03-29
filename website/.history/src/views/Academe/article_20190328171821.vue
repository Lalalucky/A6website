<template>
    <!----- 文章详情模板 ----->
    <div class="article">
        <Top></Top>
        <div class="detials">
            <h1 class="headline">{{this.data.headline}}</h1>
            <div class="content">
                <div class="related_info">
                    <div class="essay_tag">
                        文章标签：
                        <span v-for="item in this.data.tag" :key="item">{{item}}/</span>
                    </div>
                    <div class="establisher">
                        发布人：
                        <span>{{this.data.establisher}}</span>
                    </div>
                    <div class="essay_time">
                        发布时间：
                        <span>{{this.data.time}}</span>
                    </div>
                </div>
                <div class="essay_itself">
                    <!-- 转发 -->
                    <div class="transpond">
                        <div class="tools">
                            
                        </div>
                    </div>
                    <!-- 文章主体 -->
                    <div class="essay_main">{{this.data.main.content}}</div>
                </div>
                <div class="betweens_essay">
                    <div class="prev_essay" v-show="this.data.prev.id">
                        上一篇文章：
                        <span>{{this.data.prev.headline}}</span>
                    </div>
                    <div class="next_essay" v-show="this.data.next.id">
                        下一篇文章：
                        <span>{{this.data.prev.headline}}</span>
                    </div>
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
            data: {
                id: "Y23333",
                headline: "春暖大地 花香人间",
                tag: ["文学", "描物", "绘画"],
                establisher: "小叮当",
                time: "2019-03-22",
                main: {
                    content:
                        "忧深思远出手得卢食不累味撑岸就船修真炼性晕晕沉沉面授机宜赋值语句年灾月晦尔汝之交织田信长常规武器挥霍无度天吴紫凤找台阶儿治外法权病民蛊国行乎富贵下官不职不胜其苦害起肘腋亲仁善邻前一阵子刘宠一钱桑户桊枢无患之患九儒十丐珠玉在傍三江平原三衅三沐粜风卖雨心亿则乐我的一家枉法取私捣虚撇抗晏开之警他他藉藉看家本事九九归一亲子鉴定别具手眼空谷白驹求生害仁磨砻隽切斑衣戏彩甘限文书五内俱崩银团贷款三代执金顺水人情五更三点博洽多闻后拥前遮化学元素市场体系鼻头出火毛发不爽削株掘根甘心情愿总有机碳文无加点虾蟆给事安福国会鸟惊兽骇余韵绕梁指皁为白皓齿红唇马水车龙魂不着体不测之诛衅面吞炭香格里拉身败名裂喧宾夺主惹祸招灾抉瑕擿衅倚山傍水妥妥贴贴淘沙取金茂实英声管窥之见的羞剔痒囹圄充积紧急避险穿针走线雪北香南形之笔墨童颜鹤发金鸡放赦越畔之思殁而不朽勿剪之欢以观后效目秀眉清煎汤洗臀闭门墐户解放思想十殿阎王戚戚嗟嗟兴无灭资"
                },
                prev: {
                    headline: "采蘑菇的小姑娘 背着一个大箩筐",
                    id: "Y1452632"
                },
                next: ""
            }
        };
    },
    mounted(){
        this.WXconfig.wxShowMenu();
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
        width: 80%;
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
                height: 600px;
                .transpond {
                    width: 20%;
                    padding: 0 6%;
                    .tools {
                        border: 1px solid #ececec;
                        height: 540px;
                    }
                }
                .essay_main {
                    width: 80%;
                    padding: 2% 2%;
                    border: 1px solid #ececec;
                }
            }
            .betweens_essay {
                padding-left: 6%;
            }
        }
    }
}
</style>
