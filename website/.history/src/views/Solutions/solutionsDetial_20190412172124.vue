<template>
    <div class="solutions_detial">
        <Top :index="1"></Top>
        <ImgDisplay></ImgDisplay>
        <div class="point_adv">
            <div class="advantage" v-for="(item,index) in this.product" :key="index">
                <div class="product">
                    <div class="pic_frame"><img src="../../assets/images/home/with_person1.jpeg" alt=""></div>
                </div>
                <div class="pic_word">
                    <h3>{{item.title}}</h3>
                    <div class="icon_word_stage" v-for="(data,v) in item.watch_word" :key="v">
                        <p class="with_icon">
                            <img :src="item.img" alt>
                            {{data.with_icon}}:{{data.words}}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <Register></Register>
        <YiHelper></YiHelper>
        <div class="article">
            <div class="controlers">
                <div @click="tabClick(1)">招生干货</div>
                <div @click="tabClick(2)">招生案例</div>
                <div @click="tabClick(3)">招生工具</div>
            </div>
            <div class="container" v-show="this.curr_column==1">
                <ul class="article_list">
                    <li v-for="(item,index) in this.dry" :key="index" class="article_item">
                        <div class="simply_pic">
                            <img :src="item.img" alt="">
                        </div>
                        <div class="simply_acticle">
                            <div class="headline">文章标题:&emsp;&emsp;{{item.title}}</div>
                            <div class="establish_info">
                                <span class="time_info">发布时间:<em>{{item.time}}</em></span>
                                <span class="reading_info">阅读量:<em>{{item.reading}}</em>次</span>
                            </div>
                            <div class="simply_con">{{item.simply_con}}</div>
                        </div>
                    </li>
                </ul>
                <div class="block">
                    <el-pagination
                    class="pagination"
                    @size-change="handleSizeChange1"
                    @current-change="handleCurrentChange1"
                    :current-page.sync="currentPage1"
                    :page-size="10"
                    layout="total, prev, pager, next"
                    :total="100">
                    </el-pagination>
                </div>
            </div>
            <div class="container" v-show="this.curr_column==2">
                <ul class="article_list">
                    <li v-for="(item,index) in this.case" :key="index" class="article_item">
                        <div class="simply_pic">
                            <img :src="item.img" alt="">
                        </div>
                        <div class="simply_acticle">
                            <div class="headline">文章标题:&emsp;&emsp;{{item.title}}</div>
                            <div class="establish_info">
                                <span class="time_info">发布时间:<em>{{item.time}}</em></span>
                                <span class="reading_info">阅读量:<em>{{item.reading}}</em>次</span>
                            </div>
                            <div class="simply_con">{{item.simply_con}}</div>
                        </div>
                    </li>
                </ul>
                <div class="block">
                    <el-pagination
                    class="pagination"
                    @size-change="handleSizeChange2"
                    @current-change="handleCurrentChange2"
                    :current-page.sync="currentPage2"
                    :page-size="10"
                    layout="total, prev, pager, next"
                    :total="100">
                    </el-pagination>
                </div>
            </div>
            <div class="container" v-show="this.curr_column==3">
                <ul class="article_list">
                    <li v-for="(item,index) in this.dry" :key="index" class="article_item">
                        <div class="simply_pic">
                            <img :src="item.img" alt="">
                        </div>
                        <div class="simply_acticle">
                            <div class="headline">文章标题:&emsp;&emsp;{{item.title}}</div>
                            <div class="establish_info">
                                <span class="time_info">发布时间:<em>{{item.time}}</em></span>
                                <span class="reading_info">阅读量:<em>{{item.reading}}</em>次</span>
                            </div>
                            <div class="simply_con">{{item.simply_con}}</div>
                        </div>
                    </li>
                </ul>
                <div class="block">
                    <el-pagination
                    class="pagination"
                    @size-change="handleSizeChange3"
                    @current-change="handleCurrentChange3"
                    :current-page.sync="currentPage3"
                    :page-size="10"
                    layout="total, prev, pager, next"
                    :total="100">
                    </el-pagination>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Top from "@/components/top.vue";
import ImgDisplay from "@/components/imgDisplay.vue";
import Footer from "@/components/footer.vue";
import YiHelper from "@/components/yiHelper.vue";
import Register from "@/components/linkRegister.vue";
export default {
    name: "SolutionsDetial",
    data() {
        return {
            id: "",
            product: [],
            curr_column:1,
            currentPage1:1,
            currentPage2:1,
            currentPage3:1,
            dry:[
                {   
                    "id":"Y23333",
                    "title":"悟道修炼 不问一生缘劫",
                    "simply_con":"白纸画卷寥寥几笔绘江湖深浅蓬忌血袍粉党桃罩温拾蚕坦竟浴扛牺果漫搂牵划冰初秋标汉议铸撕对搭震毅拉骑聋舅钉害像诞呢阳乏怖事遥旧往宿石园撇白允疑招绍傲妇熟恒亭迹摩淘昨盾吩系春图绢低咽艳汪广跪怀估饥偿话吐录眯膝惨贴蝶匪邮筑妄紧匙福王爽蓬忌血袍粉党桃罩温拾蚕坦竟浴扛牺果漫搂牵划冰初秋标汉议铸撕对搭震毅拉骑聋舅钉害像诞呢阳乏怖事遥旧往宿石园撇白允疑招绍傲妇熟恒亭迹摩淘昨盾吩系春图绢低咽艳汪广跪怀估饥偿话吐录眯膝惨贴蝶匪邮筑妄紧匙福王爽",
                    "time":"2019-03-22",
                    "reading":"221",
                    "img": require("../../assets/images/yun.jpg")
                },
                {   
                    "id":"Y24444",
                    "title":"悟道修炼 不问一生缘劫",
                    "simply_con":"白纸画卷 寥寥几笔绘江湖深浅",
                    "time":"2019-03-22",
                    "reading":"221",
                    img: require("../../assets/images/yun.jpg")
                },
                {   
                    "id":"Y25555",
                    "title":"悟道修炼 不问一生缘劫",
                    "simply_con":"白纸画卷 寥寥几笔绘江湖深浅",
                    "time":"2019-03-22",
                    "reading":"221",
                    img: require("../../assets/images/yun.jpg")
                },
                {   
                    "id":"Y26666",
                    "title":"悟道修炼 不问一生缘劫",
                    "simply_con":"白纸画卷 寥寥几笔绘江湖深浅",
                    "time":"2019-03-22",
                    "reading":"221",
                    img: require("../../assets/images/yun.jpg")
                },
            ],
            case:[],
            tools:[]
        };
    },
    created() {
        this.id = this.$route.query.id;
        window.scrollTo(0,0)
    },
    methods:{
        tabClick(index){
            console.log(index);
            this.curr_column=index;
        },
        // 分页
        // ++++++++++++++++++++++++++++++++++++++干货++++++++++++++++++++++++++++++++++++++++++++++++++++
        handleCurrentChange1(e){
            console.log(e);
            // this.postRequest('v1/good/goods',{page:e,limit:10,category:this.category,id:this.id}).then(res=>{
            //     // console.log(res.data.data);
            //     this.allGoods = res.data.data;
            //     this.totalCount = +res.data.count;
            // });
        },
        handleSizeChange1(){
            this.currentPage1=1;
        },

        // ++++++++++++++++++++++++++++++++++++案例++++++++++++++++++++++++++++++++++++++++++++++++
        handleCurrentChange2(e){
            console.log(e);
            // this.postRequest('v1/good/goods',{page:e,limit:10,category:this.category,id:this.id}).then(res=>{
            //     // console.log(res.data.data);
            //     this.allGoods = res.data.data;
            //     this.totalCount = +res.data.count;
            // });
        },
        handleSizeChange2(){
            this.currentPage2=1;
        },

        // +++++++++++++++++++++++++++++++++++++++++++++工具+++++++++++++++++++++++++++++++++++++++++
        handleCurrentChange3(e){
            console.log(e);
            // this.postRequest('v1/good/goods',{page:e,limit:10,category:this.category,id:this.id}).then(res=>{
            //     // console.log(res.data.data);
            //     this.allGoods = res.data.data;
            //     this.totalCount = +res.data.count;
            // });
        },
        handleSizeChange3(){
            this.currentPage3=1;
        },
    },
    components: {
        Top,
        ImgDisplay,
        YiHelper,
        Register,
        Footer
    }
};
</script>

<style scoped lang="less">
.solutions_detial {
    width: 100%;
    .point_adv {
        width: 100%;
        .advantage {
            #baseWidth;
            width: 1200px;
            padding: 30px 45px;
            display: flex;
            border: 0;
            &:nth-child(even) .pic_word {
                order: -1;
            }
            .product {
                width:410px;
                height:260px;
                .pic_frame {
                    padding: 0 50px;
                    height:260px;
                    margin: 0 auto;
                    overflow: hidden;
                    img{
                        display: block;
                        width: 100%;
                    }
                }
            }
            .pic_word {
                width: 60%;
                padding-left: 45px;
                h3 {
                    font-size: 30px;
                    line-height: 42px;
                    font-weight: 500;
                    margin-bottom: 15px;
                }
                .icon_word_stage {
                    margin-top: 5px;
                    p {
                        line-height: 25px;
                        font-size: 18px;
                    }
                    .with_icon {
                        img {
                            margin-right: 5px;
                        }
                    }
                }
            }
        }
    }
    .article{
        width:1200px;
        margin: 0 auto;
        padding-bottom: 45px;
        border-bottom: 1px solid #ececec;
        .controlers{
            width: 100%;
            display: flex;
            div{
                width: 33%;
                text-align: center;
                height: 40px;
                padding: 5px 0;
                line-height: 30px;
                font-size: 18px;
            }
        }
        .container{
            .article_list{
                .article_item{
                    width:1200px;
                    padding: 10px 15px;
                    display: flex;
                    box-sizing: border-box;
                    margin: 10px 0;
                    cursor: pointer;
                    .simply_pic{
                        width: 160px;
                        height: 130px;
                        margin: 0 15px;
                        img{
                            display: inline-block;
                            width: 100%;
                            height: 100%;
                            border: 1px solid #ececec;
                            // background: #ffffff;
                        }
                    }
                    .simply_acticle{
                        width: 1000px;
                        position: relative;
                        .headline{
                            height:30px;
                            font-size:22px;
                            font-weight:400;
                            color:rgba(64,64,64,1);
                            line-height:30px;
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 1;
                            overflow: hidden;   
                        }
                        .establish_info{
                            height:20px;
                            font-size:14px;
                            font-weight:400;
                            color:rgba(151,150,150,1);
                            line-height:20px;
                            margin-top: 5px;
                            margin-bottom: 10px;
                            .reading_info{
                                margin-left: 45px;
                            }
                        }
                        .simply_con{
                            font-size:16px;
                            text-indent: 2rem;
                            font-weight:400;
                            color:rgba(102,102,102,1);
                            line-height:22px;
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 2;
                            overflow: hidden;
                        }
                    }
                }
            }
            .pagination{
                text-align: center;
            }
        }
        .goToDetial{
            width: 100px;
            height: 40px;
            cursor: pointer;
            line-height: 30px;
            text-align: center;
            border: 1px solid #ececec;
            border-radius: 5px;
            padding: 5px 0;
            margin: 10px auto;
        }
    }
}
</style>
