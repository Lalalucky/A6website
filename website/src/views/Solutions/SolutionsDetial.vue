<template>
    <div class="solutions_detial">
        <outLink></outLink>
        <Top :index="1"></Top>
        <div class="banner">
            <el-carousel
                :height="595+'px'"
                :interval="4000"
                class="banner_item"
                indicator-position="none"
            >
                <el-carousel-item v-for="item in banner" :key="item">
                    <img v-lazy="item" alt>
                </el-carousel-item>
            </el-carousel>
        </div>
        <!---------------------------- 营销传播开始 ----------------------------------->
        <div class="point_adv" v-show="this.id==1">
            <div class="advantage">
                <div class="product">
                    <div class="pic_frame">
                        <img src="../../assets/images/dog.png" alt>
                    </div>
                </div>
                <div class="pic_word">
                    <h3>更贴合移动互联网时代的招生活动</h3>
                    <div class="icon_word_stage">
                        <div class="with_icon">
                            <p>1.载体形式丰富：H5、海报、图文、小游戏</p>
                        </div>
                    </div>
                    <div class="icon_word_stage">
                        <div class="with_icon">
                            <p>2.高效便捷操作：海量模板轻松编辑一键生成</p>
                        </div>
                    </div>
                    <div class="icon_word_stage">
                        <div class="with_icon">
                            <p>3.玩法种类多样：免单、砍价、助力、抽奖、电子优惠券等</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="advantage">
                <div class="product">
                    <div class="pic_frame">
                        <img src="../../assets/images/girl.png" alt>
                    </div>
                </div>
                <div class="pic_word">
                    <h3>嵌入微信生态的社群流量池</h3>
                    <div class="icon_word_stage">
                        <div class="with_icon">
                            <p>1.社群引入微信公众号：借助社交流量红利，最大化品牌曝光</p>
                        </div>
                    </div>
                    <div class="icon_word_stage">
                        <div class="with_icon">
                            <p>2.内容种类样式丰富：图文、音视频、资料下载</p>
                        </div>
                    </div>
                    <div class="icon_word_stage">
                        <div class="with_icon">
                            <p>3.引导学员需求：通过内容构建生态，引导学习需求</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="advantage">
                <div class="product">
                    <div class="pic_frame">
                        <img src="../../assets/images/hsq.png" alt>
                    </div>
                </div>
                <div class="pic_word">
                    <h3>裂变式招生传播渠道</h3>
                    <div class="icon_word_stage">
                        <div class="with_icon">
                            <!--  -->
                            <p>1.信息全网覆盖：信息一建发送全网，引流社群蓄水</p>
                        </div>
                    </div>
                    <div class="icon_word_stage">
                        <div class="with_icon">
                            <p>2.借助学员社交网络：内容一键转发朋友圈，高效老带新</p>
                        </div>
                    </div>
                    <div class="icon_word_stage">
                        <div class="with_icon">
                            <p>3.各种裂变奖励机制：积分奖励传播注册，解锁更多社群内容</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!---------------------------- 营销传播开始 ----------------------------------->
        <!---------------------------- 业务升级开始 ----------------------------------->
        <div class="point_adv" v-show="this.id==3">
            <div class="advantage">
                <div class="product">
                    <div class="pic_frame">
                        <img src="../../assets/images/dog.png" alt>
                    </div>
                </div>
                <div class="pic_word">
                    <h3>机构专属在线学习平台</h3>
                    <div class="icon_word_stage">
                        <div class="with_icon">
                            <!--  -->
                            <p>1.随时随地 线上学习 碎片时间 任意地点 点开即学</p>
                        </div>
                    </div>
                    <div class="icon_word_stage">
                        <div class="with_icon">
                            <p>2.丰富内容 自助选购 接入微信支付 即买即学</p>
                        </div>
                    </div>
                    <div class="icon_word_stage">
                        <div class="with_icon">
                            <p>3.在线互动 实时服务 报班 通知 答疑 交流</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="advantage">
                <div class="product">
                    <div class="pic_frame">
                        <img src="../../assets/images/girl.png" alt>
                    </div>
                </div>
                <div class="pic_word">
                    <h3>丰富业务种类</h3>
                    <div class="icon_word_stage">
                        <div class="with_icon">
                            <!--  -->
                            <p>1.丰富商品种类 线上线下相结合的商品阵列</p>
                        </div>
                    </div>
                    <div class="icon_word_stage">
                        <div class="with_icon">
                            <p>2.免费体验课 售前体验 促进转化</p>
                        </div>
                    </div>
                    <div class="icon_word_stage">
                        <div class="with_icon">
                            <p>3.满足更多差异化需求 内容差异化 账号时长 续班</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="advantage">
                <div class="product">
                    <div class="pic_frame">
                        <img src="../../assets/images/hsq.png" alt>
                    </div>
                </div>
                <div class="pic_word">
                    <h3>组织学员专属门户</h3>
                    <div class="icon_word_stage">
                        <div class="with_icon">
                            <!--  -->
                            <p>1.自主管理、组织监督学习 学员 课程 报班 学习记录</p>
                        </div>
                    </div>
                    <div class="icon_word_stage">
                        <div class="with_icon">
                            <p>2.便利长期合作 合同 支付 核销 发票</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!---------------------------- 业务升级结束 ----------------------------------->
        <!---------------------------- 教教务教研开始 ----------------------------------->
        <div class="point_adv" v-show="this.id==4">
            <div class="advantage">
                <div class="product">
                    <div class="pic_frame">
                        <img src="../../assets/images/dog.png" alt>
                    </div>
                </div>
                <div class="pic_word">
                    <h3>培训资源获取和变现</h3>
                    <div class="icon_word_stage">
                        <div class="with_icon">
                            <!--  -->
                            <p>1.自主选购海量优质课件 按需选购 一键应用</p>
                        </div>
                    </div>
                    <div class="icon_word_stage">
                        <div class="with_icon">
                            <p>2.在手资源及时变现 富余教学资源随时变现</p>
                        </div>
                    </div>
                    <div class="icon_word_stage">
                        <div class="with_icon">
                            <p>3.资源无缝对接学习平台 轻松整理 一键上架</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="advantage">
                <div class="product">
                    <div class="pic_frame">
                        <img src="../../assets/images/girl.png" alt>
                    </div>
                </div>
                <div class="pic_word">
                    <h3>实现培训资源沉淀</h3>
                    <div class="icon_word_stage">
                        <div class="with_icon">
                            <!--  -->
                            <p>1.资源结构化管理 属性 知识点 班级 科目</p>
                        </div>
                    </div>
                    <div class="icon_word_stage">
                        <div class="with_icon">
                            <p>2.资源智能加工 抽题组卷 学习检测指导</p>
                        </div>
                    </div>
                    <div class="icon_word_stage">
                        <div class="with_icon">
                            <p>3.内容版权保护 防复制 防盗链</p>
                        </div>
                    </div>
                    <div class="icon_word_stage">
                        <div class="with_icon">
                            <p>4.多媒体处理技术 提高清晰度 节省占用空间及流量</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="advantage">
                <div class="product">
                    <div class="pic_frame">
                        <img src="../../assets/images/hsq.png" alt>
                    </div>
                </div>
                <div class="pic_word">
                    <h3>自动化教务管理</h3>
                    <div class="icon_word_stage">
                        <div class="with_icon">
                            <!--  -->
                            <p>1.课程设置多样 一班多课 一课多班 线上线下相结合</p>
                        </div>
                    </div>
                    <div class="icon_word_stage">
                        <div class="with_icon">
                            <p>2.可视化智能排课 学员、教师、教室冲突自动检测</p>
                        </div>
                    </div>
                    <div class="icon_word_stage">
                        <div class="with_icon">
                            <p>3.赋能线下教学 考勤 课时统计 教学通知</p>
                        </div>
                    </div>
                    <div class="icon_word_stage">
                        <div class="with_icon">
                            <p>4.灵活操作 课时课消、一键处理</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!---------------------------- 教务教研结束 ----------------------------------->
        <!---------------------------- 数据管控开始 ----------------------------------->
        <div class="point_adv" v-show="this.id==5">
            <div class="advantage">
                <div class="product">
                    <div class="pic_frame">
                        <img src="../../assets/images/dog.png" alt>
                    </div>
                </div>
                <div class="pic_word">
                    <h3>数据结构化管理</h3>
                    <div class="icon_word_stage">
                        <div class="with_icon">
                            <!--  -->
                            <p>1.机构的一体化数据管理 打破个业务环节壁垒 实现人、财、物数据接洽</p>
                        </div>
                    </div>
                    <div class="icon_word_stage">
                        <div class="with_icon">
                            <p>2.数据自动处理 财务核算 业务SOP</p>
                        </div>
                    </div>
                    <div class="icon_word_stage">
                        <div class="with_icon">
                            <p>3.数据实时更新 多终端实时同步</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="advantage">
                <div class="product">
                    <div class="pic_frame">
                        <img src="../../assets/images/girl.png" alt>
                    </div>
                </div>
                <div class="pic_word">
                    <h3>终生云端存储</h3>
                    <div class="icon_word_stage">
                        <div class="with_icon">
                            <!--  -->
                            <p>1.全程可追溯 终身多维度查询</p>
                        </div>
                    </div>
                    <div class="icon_word_stage">
                        <div class="with_icon">
                            <p>2.避免泄露 阿里云 华为云</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="advantage">
                <div class="product">
                    <div class="pic_frame">
                        <img src="../../assets/images/hsq.png" alt>
                    </div>
                </div>
                <div class="pic_word">
                    <h3>多维报表助力决策</h3>
                    <div class="icon_word_stage">
                        <div class="with_icon">
                            <!--  -->
                            <p>1.智能整合 维度丰富 招生 教学 教务 财务</p>
                        </div>
                    </div>
                    <div class="icon_word_stage">
                        <div class="with_icon">
                            <p>2.权限查看 各式报表按权限开启查看</p>
                        </div>
                    </div>
                    <div class="icon_word_stage">
                        <div class="with_icon">
                            <p>3.数据实时更新 多终端实时同步</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!---------------------------- 数据管控结束 ----------------------------------->
        <!---------------------------- 继续教育开始 ----------------------------------->
        <div class="point_adv" v-show="this.id==6">
            <div class="advantage">
                <div class="product">
                    <div class="pic_frame">
                        <img src="../../assets/images/dog.png" alt>
                    </div>
                </div>
                <div class="pic_word">
                    <h3>确保信息真实有效</h3>
                    <div class="icon_word_stage">
                        <div class="with_icon">
                            <!--  -->
                            <p>1.确保学员身份信息 课时、身份信息关联</p>
                        </div>
                    </div>
                    <div class="icon_word_stage">
                        <div class="with_icon">
                            <p>2.确保学时 人脸识别 在线考核</p>
                        </div>
                    </div>
                    <div class="icon_word_stage">
                        <div class="with_icon">
                            <p>3.独有视频点播技术 确保课时信息真实有效</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="advantage">
                <div class="product">
                    <div class="pic_frame">
                        <img src="../../assets/images/girl.png" alt>
                    </div>
                </div>
                <div class="pic_word">
                    <h3>数据接入主管平台</h3>
                    <div class="icon_word_stage">
                        <div class="with_icon">
                            <!--  -->
                            <p>1.支持标准课程导入集成</p>
                        </div>
                    </div>
                    <div class="icon_word_stage">
                        <div class="with_icon">
                            <p>2.数据实时同步</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!---------------------------- 继续教育结束 ----------------------------------->
        <!---------------------------- 招生转化开始 ----------------------------------->
        <div class="point_adv" v-show="this.id==2">
            <div class="advantage">
                <div class="product">
                    <div class="pic_frame">
                        <img src="../../assets/images/dog.png" alt>
                    </div>
                </div>
                <div class="pic_word">
                    <h3>更精准的学员画像</h3>
                    <div class="icon_word_stage">
                        <div class="with_icon">
                            <!--  -->
                            <p>1.关联学员生命周期上下游数据社群内行为 推荐积分 购买班级</p>
                        </div>
                    </div>
                    <div class="icon_word_stage">
                        <div class="with_icon">
                            <p>2.数据记录维度丰富跟进状态 沟通方式、时间、内容</p>
                        </div>
                    </div>
                    <div class="icon_word_stage">
                        <div class="with_icon">
                            <p>3.需求标签支持自定义报名 考试 课程 教材 证书</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="advantage">
                <div class="product">
                    <div class="pic_frame">
                        <img src="../../assets/images/girl.png" alt>
                    </div>
                </div>
                <div class="pic_word">
                    <h3>更规范的业务流程</h3>
                    <div class="icon_word_stage">
                        <div class="with_icon">
                            <!--  -->
                            <p>1.构建标准业务体系 公海→私海→商机 联系人</p>
                        </div>
                    </div>
                    <div class="icon_word_stage">
                        <div class="with_icon">
                            <p>2.优化线索分配 信息认领上限 超时自动退回</p>
                        </div>
                    </div>
                    <div class="icon_word_stage">
                        <div class="with_icon">
                            <p>3.实时沟通指导 数据同步 在线沟通 挖掘机巧</p>
                        </div>
                    </div>
                    <div class="icon_word_stage">
                        <div class="with_icon">
                            <p>一键管理操作 创建 共享 送审 评价</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="advantage">
                <div class="product">
                    <div class="pic_frame">
                        <img src="../../assets/images/hsq.png" alt>
                    </div>
                </div>
                <div class="pic_word">
                    <h3>实现学员数据沉淀</h3>
                    <div class="icon_word_stage">
                        <div class="with_icon">
                            <!--  -->
                            <p>1.整合售前各环节数据 社群行为 学员画像 销售流程 订单收款</p>
                        </div>
                    </div>
                    <div class="icon_word_stage">
                        <div class="with_icon">
                            <p>2.数据终身存储云端 阿里云 容灾备份</p>
                        </div>
                    </div>
                    <div class="icon_word_stage">
                        <div class="with_icon">
                            <p>3.数据结构化管理 权限查看 实时更新 全程追溯</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!---------------------------- 招生转化结束 ----------------------------------->
        <Register></Register>
        <div class="yiHelp">
            <h1 class="h1 theme" ref="h_html">易教育如何帮您实现机构运营全面升级</h1>
            <div class="container">
                <div class="tips">
                    <div class="piece">
                        <div>
                            <img src="../../assets/images/home/xuhao1.png" alt>
                            <span>社群营销</span>
                        </div>
                        <p>活动管理</p>
                        <p>文章管理</p>
                        <p>会议管理</p>
                        <p>电子券/优惠券</p>
                    </div>
                </div>
                <div class="tips">
                    <div class="piece">
                        <div>
                            <img src="../../assets/images/home/xuhao2.png" alt>
                            <span>招生管理</span>
                        </div>
                        <p>公海私海</p>
                        <p>沟通商机</p>
                        <p>报价、合同</p>
                        <p>订单、收款</p>
                    </div>
                </div>
                <div class="tips">
                    <div class="piece">
                        <div>
                            <img src="../../assets/images/home/xuhao3.png" alt>
                            <span>教务管理</span>
                        </div>
                        <p>学员管理</p>
                        <p>超级班级</p>
                        <p>教室、教师</p>
                        <p>教资、排课</p>
                    </div>
                </div>
                <div class="tips">
                    <div class="piece">
                        <div>
                            <img src="../../assets/images/home/xuhao4.png" alt>
                            <span>教学管理</span>
                        </div>
                        <p>班级教学</p>
                        <p>在线培训</p>
                        <p>教学通知</p>
                        <p>答疑资讯</p>
                    </div>
                </div>
                <div class="tips">
                    <div class="piece">
                        <div>
                            <img src="../../assets/images/home/xuhao5.png" alt>
                            <span>查询分析</span>
                        </div>
                        <p>报表仓库</p>
                        <p>驾驶舱</p>
                        <p>招生、财务</p>
                        <p>教务、教学</p>
                    </div>
                </div>
                <div class="tips">
                    <div class="piece">
                        <div>
                            <img src="../../assets/images/home/xuhao6.png" alt>
                            <span>继续教育</span>
                        </div>
                        <p>学员管理</p>
                        <p>订单管理</p>
                        <p>课程管理</p>
                        <p>班级管理</p>
                        <p>学时管理</p>
                    </div>
                </div>
                <div class="tips">
                    <div class="piece">
                        <div>
                            <img src="../../assets/images/home/xuhao7.png" alt>
                            <span>协同工作</span>
                        </div>
                        <p>审批管理</p>
                        <p>销售计划</p>
                        <p>任务、报告</p>
                        <p>费用、通知</p>
                    </div>
                </div>
                <div class="tips">
                    <div class="piece">
                        <div>
                            <img src="../../assets/images/home/xuhao8.png" alt>
                            <span>财务管理</span>
                        </div>
                        <p>记账报销</p>
                        <p>收款、收入</p>
                        <p>业绩发票</p>
                        <p>积分审核</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="article">
            <div class="controlers">
                <div @mouseover="tabClick(1)">招生干货</div>
                <div @mouseover="tabClick(2)">招生案例</div>
                <div @mouseover="tabClick(3)">招生工具</div>
            </div>
            <div class="container" v-show="this.curr_column==1">
                <ul class="article_list">
                    <li v-for="(item,index) in this.dry" :key="index" class="article_item">
                        <div class="simply_pic">
                            <img :src="item.img" alt>
                        </div>
                        <div class="simply_acticle">
                            <div class="headline">文章标题:&emsp;&emsp;{{item.title}}</div>
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
                        :total="100"
                    ></el-pagination>
                </div>
            </div>
            <div class="container" v-show="this.curr_column==2">
                <ul class="article_list">
                    <li v-for="(item,index) in this.case" :key="index" class="article_item">
                        <div class="simply_pic">
                            <img :src="item.img" alt>
                        </div>
                        <div class="simply_acticle">
                            <div class="headline">文章标题:&emsp;&emsp;{{item.title}}</div>
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
                        :total="100"
                    ></el-pagination>
                </div>
            </div>
            <div class="container" v-show="this.curr_column==3">
                <ul class="article_list">
                    <li v-for="(item,index) in this.dry" :key="index" class="article_item">
                        <div class="simply_pic">
                            <img :src="item.img" alt>
                        </div>
                        <div class="simply_acticle">
                            <div class="headline">{{item.title}}</div>
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
                        :total="100"
                    ></el-pagination>
                </div>
            </div>
        </div>-->
        <Footer></Footer>
    </div>
</template>

<script>
import outLink from "@/components/outsideLink.vue";
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
            banner1: [require("../../assets/images/解决方案/solution1.png")],
            banner2: [require("../../assets/images/解决方案/solution2.png")],
            banner3: [require("../../assets/images/解决方案/solution3.png")],
            banner4: [require("../../assets/images/解决方案/solution4.png")],
            banner5: [require("../../assets/images/解决方案/solution5.png")],
            banner6: [require("../../assets/images/解决方案/solution6.png")],
            banner: [],
            product: [],
            curr_column: 1,
            currentPage1: 1,
            currentPage2: 1,
            currentPage3: 1,
            dry: [
                {
                    id: "Y23333",
                    title: "悟道修炼 不问一生缘劫",
                    simply_con:
                        "白纸画卷寥寥几笔绘江湖深浅蓬忌血袍粉党桃罩温拾蚕坦竟浴扛牺果漫搂牵划冰初秋标汉议铸撕对搭震毅拉骑聋舅钉害像诞呢阳乏怖事遥旧往宿石园撇白允疑招绍傲妇熟恒亭迹摩淘昨盾吩系春图绢低咽艳汪广跪怀估饥偿话吐录眯膝惨贴蝶匪邮筑妄紧匙福王爽蓬忌血袍粉党桃罩温拾蚕坦竟浴扛牺果漫搂牵划冰初秋标汉议铸撕对搭震毅拉骑聋舅钉害像诞呢阳乏怖事遥旧往宿石园撇白允疑招绍傲妇熟恒亭迹摩淘昨盾吩系春图绢低咽艳汪广跪怀估饥偿话吐录眯膝惨贴蝶匪邮筑妄紧匙福王爽",
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
            ],
            case: [
                {
                    id: "Y23333",
                    title: "新世界",
                    simply_con:
                        "白纸画卷寥寥几笔绘江湖深浅蓬忌血袍粉党桃罩温拾蚕坦竟浴扛牺果漫搂牵划冰初秋标汉议铸撕对搭震毅拉骑聋舅钉害像诞呢阳乏怖事遥旧往宿石园撇白允疑招绍傲妇熟恒亭迹摩淘昨盾吩系春图绢低咽艳汪广跪怀估饥偿话吐录眯膝惨贴蝶匪邮筑妄紧匙福王爽蓬忌血袍粉党桃罩温拾蚕坦竟浴扛牺果漫搂牵划冰初秋标汉议铸撕对搭震毅拉骑聋舅钉害像诞呢阳乏怖事遥旧往宿石园撇白允疑招绍傲妇熟恒亭迹摩淘昨盾吩系春图绢低咽艳汪广跪怀估饥偿话吐录眯膝惨贴蝶匪邮筑妄紧匙福王爽",
                    time: "2019-03-22",
                    reading: "221",
                    img: require("../../assets/images/yun.jpg")
                },
                {
                    id: "Y24444",
                    title: "悟道修炼新世界",
                    simply_con: "白纸画卷 寥寥几笔绘江湖深浅",
                    time: "2019-03-22",
                    reading: "221",
                    img: require("../../assets/images/yun.jpg")
                },
                {
                    id: "Y25555",
                    title: "悟道修炼新世界",
                    simply_con: "白纸画卷 寥寥几笔绘江湖深浅",
                    time: "2019-03-22",
                    reading: "221",
                    img: require("../../assets/images/yun.jpg")
                },
                {
                    id: "Y26666",
                    title: "悟道修炼新世界",
                    simply_con: "白纸画卷 寥寥几笔绘江湖深浅",
                    time: "2019-03-22",
                    reading: "221",
                    img: require("../../assets/images/yun.jpg")
                }
            ],
            tools: []
        };
    },
    created() {
        this.id = this.$route.query.id;
        window.scrollTo(0, 0);
        let id = +this.id;
        switch (id) {
            case 1:
                this.banner = this.banner1;
                break;
            case 2:
                this.banner = this.banner2;
                break;
            case 3:
                this.banner = this.banner3;
                break;
            case 4:
                this.banner = this.banner4;
                break;
            case 5:
                this.banner = this.banner5;
                break;
            case 6:
                this.banner = this.banner6;
                break;
        }
    },
    watch: {
        $route() {
            this.id = this.$route.query.id;
            let id = +this.id;
            switch (id) {
                case 1:
                    this.banner = this.banner1;
                    break;
                case 2:
                    this.banner = this.banner2;
                    break;
                case 3:
                    this.banner = this.banner3;
                    break;
                case 4:
                    this.banner = this.banner4;
                    break;
                case 5:
                    this.banner = this.banner5;
                    break;
                case 6:
                    this.banner = this.banner6;
                    break;
            }
            window.scrollTo(0, 0);
        }
    },
    methods: {
        tabClick(index) {
            console.log(index);
            this.curr_column = index;
        },
        // 分页
        // ++++++++++++++++++++++++++++++++++++++干货++++++++++++++++++++++++++++++++++++++++++++++++++++
        handleCurrentChange1(e) {
            console.log(e);
            // this.postRequest('v1/good/goods',{page:e,limit:10,category:this.category,id:this.id}).then(res=>{
            //     // console.log(res.data.data);
            //     this.allGoods = res.data.data;
            //     this.totalCount = +res.data.count;
            // });
        },
        handleSizeChange1() {
            this.currentPage1 = 1;
        },

        // ++++++++++++++++++++++++++++++++++++案例++++++++++++++++++++++++++++++++++++++++++++++++
        handleCurrentChange2(e) {
            console.log(e);
            // this.postRequest('v1/good/goods',{page:e,limit:10,category:this.category,id:this.id}).then(res=>{
            //     // console.log(res.data.data);
            //     this.allGoods = res.data.data;
            //     this.totalCount = +res.data.count;
            // });
        },
        handleSizeChange2() {
            this.currentPage2 = 1;
        },

        // +++++++++++++++++++++++++++++++++++++++++++++工具+++++++++++++++++++++++++++++++++++++++++
        handleCurrentChange3(e) {
            console.log(e);
            // this.postRequest('v1/good/goods',{page:e,limit:10,category:this.category,id:this.id}).then(res=>{
            //     // console.log(res.data.data);
            //     this.allGoods = res.data.data;
            //     this.totalCount = +res.data.count;
            // });
        },
        handleSizeChange3() {
            this.currentPage3 = 1;
        }
    },
    components: {
        Top,
        ImgDisplay,
        YiHelper,
        Register,
        Footer,
        outLink
    }
};
</script>

<style scoped lang="less">
.solutions_detial {
    width: 100%;
    .banner {
        height: 595px;
    }
    .point_adv {
        width: 1200px;
        margin: 0 auto;
        padding: 30px 0;
        .advantage {
            width: 1200px;
            padding: 30px 45px;
            display: flex;
            border: 0;
            &:nth-child(even) .pic_word {
                order: -1;
            }
            .product {
                width: 410px;
                height: 260px;
                .pic_frame {
                    padding: 0 50px;
                    height: 260px;
                    margin: 0 auto;
                    overflow: hidden;
                    img {
                        width: 410px;
                        height: 260px;
                        display: block;
                    }
                }
            }
            .pic_word {
                width: 60%;
                padding-left: 45px;
                h3 {
                    font-size: 30px;
                    font-weight: 500;
                    color: rgba(102, 102, 102, 1);
                    line-height: 42px;
                    margin-bottom: 45px;
                }
                .icon_word_stage {
                    height: 45px;
                    line-height: 45px;
                    color: #666666;
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
    .yiHelp {
        width: 1200px;
        margin: 30px auto;
        .container {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            .tips {
                margin: 45px 0px 45px;
                width: 25%;
                text-align: center;
                font-family: PFregular;
                .piece {
                    width: 200px;
                    padding: 45px 0;
                    background: #ffffff;
                    margin: 0 auto;
                    border-top: 3px solid #4a90e2;
                    & > div {
                        width: 100%;
                        height: 66px;
                        margin: 10px 0;
                        img {
                            display: inline-block;
                            height: 66px;
                            width: 56px;
                            vertical-align: middle;
                        }
                        span {
                            font-size: 18px;
                            font-weight: 400;
                            display: inline-block;
                            line-height: 66px;
                            margin-left: 10px;
                            color: rgba(43, 43, 43, 1);
                        }
                    }
                    &:hover {
                        box-shadow: 4px 4px 30px 0px rgba(174, 173, 173, 0.5);
                        transform: scale(1.05);
                        transition: 400ms;
                        transition-delay: 200ms;
                    }
                    & > p {
                        font-size: 16px;
                        font-weight: 400;
                        color: rgba(102, 102, 102, 1);
                        line-height: 22px;
                    }
                }
            }
        }
    }
    .article {
        width: 1200px;
        margin: 0 auto;
        padding-bottom: 45px;
        border-bottom: 1px solid #ececec;
        .controlers {
            width: 100%;
            display: flex;
            div {
                width: 33%;
                text-align: center;
                height: 40px;
                padding: 5px 0;
                line-height: 30px;
                font-size: 18px;
            }
        }
        .container {
            .article_list {
                .article_item {
                    width: 1200px;
                    padding: 10px 15px;
                    display: flex;
                    box-sizing: border-box;
                    margin: 10px 0;
                    cursor: pointer;
                    .simply_pic {
                        width: 160px;
                        height: 130px;
                        margin: 0 15px;
                        img {
                            display: inline-block;
                            width: 100%;
                            height: 100%;
                            border: 1px solid #ececec;
                            // background: #ffffff;
                        }
                    }
                    .simply_acticle {
                        width: 1000px;
                        position: relative;
                        .headline {
                            height: 30px;
                            font-size: 22px;
                            font-weight: 400;
                            color: rgba(64, 64, 64, 1);
                            line-height: 30px;
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 1;
                            overflow: hidden;
                        }
                        .establish_info {
                            height: 20px;
                            font-size: 14px;
                            font-weight: 400;
                            color: rgba(151, 150, 150, 1);
                            line-height: 20px;
                            margin-top: 5px;
                            margin-bottom: 10px;
                            .reading_info {
                                margin-left: 45px;
                            }
                        }
                        .simply_con {
                            font-size: 16px;
                            // text-indent: 2rem;
                            font-weight: 400;
                            color: rgba(102, 102, 102, 1);
                            line-height: 22px;
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 2;
                            overflow: hidden;
                        }
                    }
                }
            }
            .pagination {
                text-align: center;
            }
        }
        .goToDetial {
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
