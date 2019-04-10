<template>
    <div class="yiServer">
        <h1 class="theme"><span></span>一站式服务，我们努力做到更好</h1>
        <div class="container">
            <div class="service" @mouseover="this.flag=1;">
                <div class="picFrame">
                    <img src="../assets/images/home/专属顾问.png" alt="" v-show="this.flag!=1">
                </div>
                <h3>专属服务</h3>
                <p class="intro">合作机构将用于专属的服务顾问</p>
                <p class="intro">7*24*365提供在线服务支持</p>
            </div>
            <div class="service">
                <div class="picFrame">
                    <img src="../assets/images/home/多终端支持.png" alt="">
                </div>
                <h3>多终端支持</h3>
                <p class="intro">支持电脑、平板、手机多平台对接，</p>
                <p class="intro">满足机构不同需求场景</p>
            </div>
            <div class="service">
                <div class="picFrame">
                    <img src="../assets/images/home/数据安全.png" alt="">
                </div>
                <h3>数据安全</h3>
                <p class="intro">阿里云、七牛云保障服务器稳定工作</p>
                <p class="intro">确保数据安全</p>
            </div>
            <div class="service">
                <div class="picFrame">
                    <img src="../assets/images/home/版本升级.png" alt="">
                </div>
                <h3>版本升级</h3>
                <p class="intro">版本定期更新迭代</p>
                <p class="intro">解决方案不断升级</p>
            </div>
            <div class="service">
                <div class="picFrame">
                    <img src="../assets/images/home/课件资源加密.png" alt="">
                </div>
                <h3>课件资源加密</h3>
                <p class="intro">系统防下载，视频转码等方面</p>
                <p class="intro">为课件资源提供平保障</p>
            </div>
            <div class="service">
                <div class="picFrame">
                    <img src="../assets/images/home/行业资深履历资深.png" alt="">
                </div>
                <h3>行业资深履历</h3>
                <p class="intro">关机及技术团队深耕职业教育行业</p>
                <p class="intro">专注于教育系统开发</p>
            </div>
        </div>
        <div class="knowMore">
            <div>在线咨询</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "yiServer",
    data() {
        return {
            flag:0
        };
    },
    components: {}
};
</script>

<style scoped lang="less">
.yiServer {
    width: 100%;
    padding: 30px 0;
    h1 {
        text-align: center;
        line-height: 60px;
        font-size: 24px;
        margin: 30px 0;
    }
    .container {
        width: 90%;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        .service {
            margin: 45px 0;
            width: 33.3%;
            text-align: center;
            font-family: PingFangSC-Regular;
            .picFrame{
                width: 100px;
                height: 100px;
                margin: 0 auto;
                padding-top: 1px;
                border-radius: 50%;
                box-shadow:0px 2px 18px 2px rgba(189,213,247,1);
                img{
                    display: block;
                    margin: 28px auto;
                }
            }
            h3 {
                font-size: 18px;
                font-weight: bold;
                line-height: 25px;
                margin: 10px 0;
            }
            .intro{
                font-size: 18px;
                height: 25px;
                font-weight: 400;
            }
            &>.intro:nth-child(3){
                color:rgba(43,43,43,1);
            }
            &>.intro:nth-child(4){
                color:rgba(102,102,102,1);
            }
        }
    }
    .knowMore{
        div {
            width: 8%;
            height: 30px;
            box-sizing: border-box;
            border: 1px solid #ececec;
            border-radius: 15px;
            margin: 20px auto;
            line-height: 30px;
            text-align: center;
            cursor: pointer;
        }
    }
}
</style>
