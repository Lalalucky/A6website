<template>
    <!----- 文章详情模板 ----->
    <div class="article">
        <Top></Top>
        <div class="detials">
            <h1 class="headline"></h1>
            <div class="content">
                <div class="related_info">
                    <div class="essay_tag">文章标签：</div>
                    <div class="establisher">发布人：</div>
                    <div class="essay_time">发布时间：</div>
                </div>
                <div class="essay_itself">
                    <!-- 转发 -->
                    <div class="transpond"></div>
                    <!-- 文章主体 -->
                    <div class="essay_main">

                    </div>
                </div>
                <div class="betweens_essay">
                    <div class="prev_essay">上一篇文章：</div>
                    <div class="next_essay">下一篇文章：</div>
                </div>
            </div>
        </div>
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
            data:{
                "headline":'春暖大地 花香人间',
                "tag":["文学","描物","绘画"],
                "establisher":'小叮当',
                "time":'2019-03-22',
                "main":{
                    
                },
                "prev":'55661212',
                "next":'',
            }
        };
    },
    components: {
        Top,
        Footer
    }
};
</script>

<style scoped lang="less">
</style>
