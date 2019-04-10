<template>
   <div class="organization">
       <!-- 机构管理 -->
       <div class="tab_pan">
            <div class="image_text">
                <div class="images_area">
                    <el-carousel trigger="click" height="300px">
                        <el-carousel-item v-for="item in this.carousel" :key="item">
                            <img :src="item" alt>
                        </el-carousel-item>
                    </el-carousel>
                </div>
                <div class="select_article">
                    <div class="selects" v-for="item in 3" :key="item">
                        <p class="head_line">
                            <em>文章标题</em>&emsp;&emsp;白蛇传
                        </p>
                        <p class="simply_info">
                            <em>文章简介</em>&emsp;&emsp;青城山下白素贞，洞中千年修此生
                        </p>
                    </div>
                </div>
            </div>
            <div class="row_box">
                <ul class="article_list">
                    <li
                        v-for="(item,index) in this.dry"
                        :key="index"
                        class="article_item"
                        @click="goToArticle(item.id)"
                    >
                        <div class="simply_pic">
                            <img :src="item.img" alt>
                        </div>
                        <div class="simply_acticle">
                            <div class="headline">文章标题:&emsp;&emsp;{{item.title}}</div>
                            <div class="simply_con">文章简介:&emsp;&emsp;{{item.simply_con}}</div>
                            <div class="establish_info">
                                <span class="time_info">
                                    发布时间:
                                    <em>{{item.time}}</em>
                                </span>
                                <span class="reading_info">
                                    阅读量:
                                    <em>{{item.reading}}</em>次
                                </span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
   </div>
</template>

<script>
export default {
   name: 'organization',
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
  components: {}
}
</script>

<style scoped lang="less">
</style>
