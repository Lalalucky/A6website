<template>
    <div class="solutions_detial">
        <Top></Top>
        <ImgDisplay></ImgDisplay>  
        <div class="point_adv">
            <div class="advantage" v-for="(item,index) in 3" :key="index">
                <div class="product"></div>
                <div class="pic_word">
                    <h3>{{item.title}}</h3>
                    <p class="with_icon">{{item.watch_word[0].with_icon}}</p>
                    <p>{{item.watch_word[0].words}}</p>
                    <p class="with_icon"></p>
                    <p></p>
                    <p class="with_icon"></p>
                    <p></p>
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
            product:[{
                "title":'更贴合移动互联网时代的招生活动',
                "watch_word":[
                    {"with_icon":"载体形式丰富","words":"H5、海报、图文、小游戏"},
                    {"with_icon":"载体形式丰富","words":"H5、海报、图文、小游戏"},
                    {"with_icon":"载体形式丰富","words":"H5、海报、图文、小游戏"},
                    ]
            },{},{}]
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
