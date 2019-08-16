<template>
	<div class="outsideLink">
		<div class="link_phone" onclick="_MEIQIA('showPanel')">在线咨询</div>
		<div class="link" @mouseover="showIcon('phone')" @mouseleave="hideIcon('phone')">
			<div class="with_icon">
				<img src="../assets/images/outLink/phone.png" alt />
			</div>
			<div class="phoneNo" v-show="this.phone==true">400-8790-758</div>
		</div>
		<div class="link" @mouseover="showIcon('QQ')" @mouseleave="hideIcon('QQ')">
			<div class="with_icon">
                <a target="_blank"
					style="color:#fff;cursor:pointer"
					href="http://wpa.qq.com/msgrd?v=3&uin=88980584&site=qq&menu=yes"></a>
				<img src="../assets/images/outLink/QQ.png" alt />
			</div>
			<div class="QQicon" v-show="this.QQ==true">
				<h1>点我QQ咨询</h1>
			</div>
		</div>
		<div class="link" @mouseover="showIcon('wechat')" @mouseleave="hideIcon('wechat')">
			<div class="with_icon">
				<img src="../assets/images/outLink/wechat.png" alt />
			</div>
			<div class="wechat_icon" v-show="this.wechat==true">
				<img src="../assets/images/wechat.jpg" alt />
			</div>
		</div>
	</div>
</template>
+
<script>
export default {
	name: "",
	data() {
		return {
			phone: false,
			QQ: false,
			wechat: false
		};
	},
	components: {},
	methods: {
		showIcon(item) {
			if (item == "phone") {
				this.phone = true;
			} else if (item == "QQ") {
				this.QQ = true;
			} else if (item == "wechat") {
				this.wechat = true;
			}
		},
		hideIcon(item) {
			if (item == "phone") {
				this.phone = false;
			} else if (item == "QQ") {
				this.QQ = false;
			} else if (item == "wechat") {
				this.wechat = false;
			}
		}
	}
};
</script>

<style scoped lang="less">
.outsideLink {
	position: fixed;
	right: 0;
	top: 50%;
	margin-top: -60px;
	z-index: 999;
	background: rgba(74, 144, 226, 1);
	.link_phone {
		display: block;
		position: relative;
		width: 50px;
		height: 50px;
		padding: 6px;
		line-height: 20px;
		color: #ffffff;
		text-align: center;
	}
	.link {
		cursor: pointer;
		display: block;
		position: relative;
		width: 50px;
		height: 50px;
		color: #ffffff;
		text-align: center;
		.with_icon {
			width: 40px;
			height: 40px;
			padding: 5px;
			margin: 0 auto;
			border-top: 1px solid #ffffff;
			img {
				display: block;
				margin: 0 auto;
				height: 30px;
			}
		}
		.phoneNo {
			position: absolute;
			right: 50px;
			top: 5px;
			background: url("~@/assets/images/outLink/phone_slide.png");
			width: 136px;
			height: 40px;
			line-height: 40px;
			color: 20px;
		}
		.QQicon {
			position: absolute;
			right: 50px;
			top: 5px;
			background: url("~@/assets/images/outLink/phone_slide.png");
			width: 136px;
			height: 40px;
			line-height: 40px;
			color: 20px;
		}
		.wechat_icon {
			text-align: left;
			position: absolute;
			right: 50px;
			top: -25px;
			width: 105px;
			height: 100px;
			background: url("~@/assets/images/outLink/wechat_slide.png") center
				center no-repeat;
			background-size: cover;
			img {
				display: block;
				width: 90px;
				height: 90px;
				margin-top: 5px;
				margin-left: 5px;
			}
		}
	}
}
</style>
