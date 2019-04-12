<template>
<!-- 营销 -->
   <div class="marketing">
       <div class="shoucut">
           <div class="col_t">营销</div>
           <div class="adv_word">
               <p>通过销售过程及意向学员数据的标准化信息</p>
               <p>处理从而实现精细化销售流程管控</p>
           </div>
       </div>
       <ul class="light_point">
           <li><img src="../../assets/images/icons/marketing/活动.png" alt="">活动一键启动，内容丰富</li>
           <li><img src="../../assets/images/icons/marketing/信息.png" alt="">信息全渠道覆盖，成本更低</li>
           <li><img src="../../assets/images/icons/marketing/fa_bu.png" alt="">活动曝光更多，反复触达学员</li>
           <li><img src="../../assets/images/icons/marketing/公众号.png" alt="">公众号承接流量，引流社群</li>
           <li><img src="../../assets/images/icons/marketing/库存.png" alt="">社群售前蓄水，促进后续转化</li>
           <li><img src="../../assets/images/icons/marketing/搜索.png" alt="">社交裂变模板，背书式自主传播</li>
           <li><img src="../../assets/images/icons/marketing/券类.png" alt="">自定义电子券，餐椅华定点转化</li>
       </ul>
   </div>
</template>

<script>
export default {
   name: 'marketing',
   data() {
       return {}
   },
  components: {}
}
</script>

<style scoped lang="less">
    .shoucut{
        width: 600px;
        .col_t{
            text-align: left;
            font-size: 24px;
            font-weight: 500;
            color:rgba(74,144,226,1);
            line-height:33px;
        }
        .adv_word{
            text-align: left;
            padding: 56px 0;
            p{
                font-size:20px;
                font-family:PingFangSC-Medium;
                font-weight:500;
                color:rgba(102,102,102,1);
                line-height:28px;
            }
        }
    }
    .light_point{
        text-align: left;
        li{
            margin-bottom: 8px;
            height:28px;
            font-size:20px;
            font-family:PingFangSC-Regular;
            font-weight:400;
            color:rgba(64,64,64,1);
            line-height:28px;
        }
    }
</style>
