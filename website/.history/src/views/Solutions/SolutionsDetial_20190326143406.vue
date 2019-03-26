<template>
    <div class="solutions_detial">
        <Top></Top>
        <ImgDisplay></ImgDisplay>  
        <div class="point_adv">
            <div class="advantage" v-for="(item,index) in this.product" :key="index">
                <div class="product"></div>
                <div class="pic_word">
                    <h3>{{item.title}}</h3>
                    <div class="icon_word_stage" v-for="(data,v) in item.watch_word" :key="v">
                        <p class="width_icon">{{data.with_icon}}</p>
                        <p>{{data.words}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Top from "@/components/Top.vue";
import ImgDisplay from "@/components/ImgDisplay.vue"
import Footer from "@/components/Footer.vue";
import Register from "@/components/LinkRegister.vue";
export default {
    name: "",
    data() {
        return {
            id:'',
            product:[
                {
                "title":'更贴合移动互联网时代的招生活动',
                "watch_word":[
                    {"with_icon":"载体形式丰富","words":"H5、海报、图文、小游戏"},
                    {"with_icon":"载体形式丰富","words":"H5、海报、图文、小游戏"},
                    {"with_icon":"载体形式丰富","words":"H5、海报、图文、小游戏"},
                    ]
                },{
                "title":"嵌入微信生态的社群流量池",
                "watch_word":[
                    {"with_icon":"社群引入微信公众号","words":"借助社交流量红利，最大化品牌曝光"},
                    {"with_icon":"内容种类样式丰富","words":"图文、音视频、资料下载"},
                    {"with_icon":"引导学员雪球","words":"通过内容构建生态，引导学习需求"},
                    ]
                },{
                "title":"裂变式招生传播渠道",
                "watch_word":[
                    {"with_icon":"信息全网覆盖","words":"信息一建发送全网，引流社群蓄水"},
                    {"with_icon":"内容种类样式丰富","words":"图文、音视频、资料下载"},
                    {"with_icon":"引导学员雪球","words":"通过内容构建生态，引导学习需求"},
                    ]
                }
            ]
        };
    },
    created() {
        this.id=this.$route.query.id
    },
    components: {
       Top,ImgDisplay
    }
};
</script>

<style scoped lang="less">
</style>
