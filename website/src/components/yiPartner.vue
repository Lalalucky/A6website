<template>
    <div class="yiPartner">
        <h1 class="theme">伙伴的认同，就是最好的口碑</h1>
        <div class="container">
            <el-carousel
                :height="450+'px'"
                arrow="always"
                :interval="4000"
                indicator-position="none"
                class="with_person"
            >
                <el-carousel-item v-for="item in with_person" :key="item.id">
                    <div class="every">
                        <div class="mankind">
                            <div class="photo_frame">
                                <img :src="item.img" alt>
                            </div>
                            <p class="name">{{item.name}}</p>
                            <p class="description">{{item.description}}</p>
                            <p></p>
                        </div>
                        <div class="wordDisc">
                            <p>{{item.remark}}</p>
                            <!-- <img :src="item.img" alt> -->
                        </div>
                    </div>
                </el-carousel-item>
            </el-carousel>
            <div class="cooper_display">
                <div class="showItem">
                    <img src="../assets/images/cooper/云豆.png" alt>
                    <img src="../assets/images/cooper/云豆fade.png" alt>
                </div>
                <div class="showItem">
                    <img src="../assets/images/cooper/泰州.png" alt>
                    <img src="../assets/images/cooper/泰州fade.png" alt>
                </div>
                <div class="showItem">
                    <img src="../assets/images/cooper/鲁班.png" alt>
                    <img src="../assets/images/cooper/鲁班fade.png" alt>
                </div>
                <div class="showItem">
                    <img src="../assets/images/cooper/金职.png" alt>
                    <img src="../assets/images/cooper/金职fade.png" alt>
                </div>
                <div class="showItem">
                    <img src="../assets/images/cooper/英才.png" alt>
                    <img src="../assets/images/cooper/英才fade.png" alt>
                </div>

                <div class="showItem">
                    <img src="../assets/images/cooper/华睿.png" alt>
                    <img src="../assets/images/cooper/华睿fade.png" alt>
                </div>
                <div class="showItem">
                    <img src="../assets/images/cooper/通州.png" alt>
                    <img src="../assets/images/cooper/通州fade.png" alt>
                </div>
                <div class="showItem">
                    <img src="../assets/images/cooper/建培.png" alt>
                    <img src="../assets/images/cooper/建培fade.png" alt>
                </div>
                <div class="showItem">
                    <img src="../assets/images/cooper/易直学.png" alt>
                    <img src="../assets/images/cooper/易直学fade.png" alt>
                </div>
                <div class="showItem">
                    <img src="../assets/images/cooper/泥瓦匠.png" alt>
                    <img src="../assets/images/cooper/泥瓦匠fade.png" alt>
                </div>

                <div class="showItem">
                    <img src="../assets/images/cooper/三诚.png" alt>
                    <img src="../assets/images/cooper/三诚fade.png" alt>
                </div>
                <div class="showItem">
                    <img src="../assets/images/cooper/扬州.png" alt>
                    <img src="../assets/images/cooper/扬州fade.png" alt>
                </div>
                <div class="showItem">
                    <img src="../assets/images/cooper/镇江.png" alt>
                    <img src="../assets/images/cooper/镇江fade.png" alt>
                </div>
                <div class="showItem">
                    <img src="../assets/images/cooper/瑞宁.png" alt>
                    <img src="../assets/images/cooper/瑞宁fade.png" alt>
                </div>
                <div class="showItem">
                    <img src="../assets/images/cooper/江硕.png" alt>
                    <img src="../assets/images/cooper/江硕fade.png" alt>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "yiPartner",
    data() {
        return {
            with_person: []
        };
    },
    components: {},
    mounted() {
        this.postRequest("v1/application/partner-case").then(res => {
            this.with_person = res.data.data;
        });
    }
};
</script>

<style scoped lang="less">
.yiPartner {
    width: 1200px;
    margin: 0 auto;
    .container {
        width: 1200px;
        margin: 0 auto;
        .with_person {
            .every {
                width: 80%;
                margin: 0 auto;
                display: flex;
                justify-content: space-around;
                .mankind {
                    width: 30%;
                    height: 250px;
                    .photo_frame {
                        width: 242px;
                        height: 250px;
                        margin: 0 auto;
                        // border: 1px solid #cccccc;
                        overflow: hidden;
                        img {
                            display: block;
                            width: 210px;
                            margin: 0 auto;
                            height: 220px;
                            box-shadow: 0px 0px 10px 0px rgba(218, 219, 220, 1);
                            border-radius: 8px;
                            margin-top: 5px;
                        }
                    }
                    p {
                        font-family: PFregular;
                        text-align: center;
                        line-height: 28px;
                        font-size: 20px;
                    }
                    .name {
                        margin-top: 20px;
                        font-size: 22px;
                        font-weight: 500;
                        color: rgba(64, 64, 64, 1);
                        line-height: 30px;
                    }
                    .description {
                        font-size: 20px;
                        font-weight: 400;
                        color: rgba(68, 68, 68, 1);
                    }
                    & > p:nth-child(2) {
                        font-weight: 500;
                        color: rgba(64, 64, 64, 1);
                    }
                    & > p:nth-child(3) {
                        font-weight: 400;
                        color: rgba(68, 68, 68, 1);
                    }
                    & > p:nth-child(4) {
                        font-weight: 400;
                        color: rgba(68, 68, 68, 1);
                    }
                }
                .wordDisc {
                    width: 712px;
                    height: 320px;
                    font-size: 20px;
                    font-weight: 400;
                    color: rgba(102, 102, 102, 1);
                    line-height: 28px;
                    padding: 30px 20px;
                    background: rgba(255, 255, 255, 1);
                    box-shadow: 0px 0px 10px 0px rgba(218, 219, 220, 1);
                    margin-top: 5px;
                    border-radius: 16px;
                    display: flex;
                    justify-content: space-around;
                    p {
                        width: 100%;
                    }
                }
            }
        }
        .cooper_display {
            display: flex;
            height: 300px;
            padding: 0 0 50px;
            flex-wrap: wrap;
            .showItem {
                width: 20%;
                height: 80px;
                text-align: center;
                position: relative;
                overflow: hidden;
                img {
                    position: absolute;
                    display: block;
                    left: 35px;
                }
                img:nth-child(1) {
                    top: -100px;
                    z-index: 5;
                }
                img:nth-child(2) {
                    top: 0px;
                    z-index: 20;
                }
                &:hover img:nth-child(1) {
                    top: 0;
                }
                &:hover img:nth-child(2) {
                    top: 80px;
                }
            }
        }
    }
}
</style>
