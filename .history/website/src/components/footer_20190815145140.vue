<template>
	<div class="footer">
		<div class="container">
			<div class="foot_top">
				<div class="main_link">
					<div class="guide">
						<h3>网站导航</h3>
						<router-link to="/solutions/index">解决方案</router-link>
						<router-link to="/productsIntro/index">产品介绍</router-link>
						<!-- <router-link to="/solutions/index">易教育学苑</router-link> -->
						<router-link to="/cooprations/index">合作案例</router-link>
						<router-link to="/server/index">服务支持</router-link>
					</div>
					<div class="plat_link">
						<div class="platform">
							<h3>易学苑</h3>
							<div class="xueyuan">
								<div class="lanmu" v-for="(first,index) in this.news_wrap" :key="index">
									
								</div>
								
							</div>
						</div>
					</div>
					<div class="micro_code">
						<h3>联系我们</h3>
						<div class="link_way">
							<div>
								<span>电话 :</span>&emsp;400-8790-758
							</div>
							<div>
								<span>邮箱 :</span>&emsp;yunbao@yunbaonet.cn
							</div>
						</div>
					</div>
					<div class="icons">
						<h3>关注易教育</h3>
						<div class="wechat">
							<img src="../assets/images/wechat.jpg" alt />
							<p>服务号</p>
						</div>
						<div class="blog">
							<img src="../assets/images/wechat_serve].jpg" alt />
							<p>订阅号</p>
						</div>
					</div>
				</div>
			</div>
			<div class="cooper_list">
				<ul class="friend_link">
					友情链接:
					<li v-for="(item,index) in this.footer" :key="index">
						<a :href="item.url" target="_blank">{{item.name}}</a>
					</li>
				</ul>
			</div>
			<div class="company_info">
				<h2>南京云宝网络有限公司</h2>
				<p>公司地址：南京市雨花区大周路32号软件谷科创城A1栋15F</p>
			</div>
			<div class="property_info">
				<div class="container">
					<p>
						Copyright&copy;2018-2020 南京云宝网络有限公司版权所有 |
						<a
							href="http://www.beian.miit.gov.cn"
							target="_blank"
						>苏ICP备15038143号-4</a>
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "",
	data() {
		return {
			footer: [],
			news_wrap: []
		};
	},
	mounted() {
		this.postRequest("v1/application/friend-link").then(res => {
			this.footer = res.data.data;
		});
		//获取一级栏目和二级栏目
		this.postRequest("v1/application/get-two-column").then(res => {
			// console.log(res.data.data)
			this.news_wrap = res.data.data;
			// console.log(this.news_wrap)
		});
	},
    components: {},
    methods:{
        goToArticle(id) {
            //跳转文章列表
            this.$router.replace({
                path: "/academe/index",
                query: {
                    column_id: id
                }
            });
        }
    }

};
</script>

<style scoped lang="less">
@import "~@/assets/global.less";

.footer {
	margin-top: -1px;
	width: 100%;
	color: #ffffff;
	background: rgba(74, 75, 76, 1);
	text-align: left;
	.container {
		width: 100%;
		.foot_top {
			width: 100%;
			border-bottom: 1px solid #999999;
			padding: 60px 0 40px;
			.main_link {
				width: 1200px;
				margin: 0 auto;
				display: flex;
				.guide {
					width: 200px;
					text-align: left;
					h3 {
						width: 100px;
						text-align: left;
						font-size: 24px;
						font-weight: 500;
						margin-bottom: 30px;
					}
					a {
						width: 100px;
						text-align-last: left;
						text-decoration: none;
						color: #b6b6b7;
						line-height: 25px;
						display: block;
						cursor: pointer;
						font-size: 16px;
						&:hover {
							color: #f5f5f5;
							font-weight: 600;
						}
					}
				}
				.plat_link {
					width: 400px;
					text-align: left;
					.platform {
						h3 {
							font-size: 24px;
							font-weight: 500;
							margin-bottom: 30px;
							text-align: left;
						}
					}
					.xueyuan {
						display: flex;
						width: 300px;
						.lanmu {
							width: 33.3%;
							.lanmu_list > li {
								font-size: 16px;
								height: 25px;
								line-height: 25px;
								font-weight: 400;
								color: #b6b6b7;
								cursor: pointer;
								&:hover {
									color: #f5f5f5;
									font-weight: 600;
								}
							}
						}
					}
				}
				.micro_code {
					width: 400px;
					text-align: left;
					h3 {
						font-size: 24px;
						font-weight: 500;
						margin-bottom: 30px;
					}
					.link_way {
						font-weight: 400;
						line-height: 25px;
						font-size: 16px;
						color: #b6b6b7;
					}
				}
				.icons {
					width: 200px;
					h3 {
						font-size: 24px;
						font-weight: 500;
						margin-bottom: 30px;
					}
					& > div {
						width: 95px;
						display: inline-block;
						text-align: center;
						color: #b6b6b7;
						img {
							display: block;
							width: 85px;
							height: 85px;
						}
						p {
							line-height: 30px;
						}
					}
				}
			}
		}
		.cooper_list {
			display: flex;
			width: 100%;
			height: 100px;
			padding: 30px 0;
			margin: 0 auto;
			border-bottom: 1px solid #999999;
			.friend_link {
				width: 1200px;
				margin: 0 auto;
				display: flex;
				li a {
					margin: 0 5px;
					font-size: 14px;
					line-height: 24px;
					font-family: PingFangSC-Regular;
					font-weight: 400;
					color: rgba(182, 182, 183, 1);
					line-height: 20px;
					cursor: pointer;
				}
			}
		}
		.company_info {
			background: rgba(74, 75, 76, 1);
			padding: 30px 0 0;
			text-align: center;
			color: #ffffff;
			h2 {
				font-size: 24px;
				line-height: 32px;
				height: 32px;
			}
			p {
				font-size: 16px;
				line-height: 30px;
			}
		}
		.property_info {
			width: 100%;
			padding: 1px 18.75% 45px;
			color: rgba(74, 74, 74, 1);
			.container {
				text-align: center;
				p,
				a {
					height: 20px;
					font-size: 14px;
					font-weight: 400;
					color: rgba(255, 255, 255, 1);
					line-height: 20px;
				}
				a {
					text-decoration: #f5f5f5;
					cursor: pointer;
					&:hover {
						border-bottom: 1px solid #ffffff;
					}
				}
			}
		}
	}
}
</style>
