<template>
    <!-- 销售 -->
   <div class="sell">
      <div class="shoucut">
           <div class="col_t">销售</div>
           <div class="adv_word">
               <p>通过销售过程及意向学员数据的标准化信息</p>
               <p>处理从而实现精细化销售流程管控</p>
           </div>
       </div>
       <ul class="light_point">
           <li>精细化绘制用户画像，，助力业务分析</li>
           <li>规范化销售行为记录，促进流程改良</li>
           <li>优化线索分配，避免资源浪费</li>
           <li>流程记录实时更新，在线交流指导</li>
       </ul>
       <router-link tag="div" class="know_more" to='/'>
            <div class="btn">
                了解详情
                <i class="iconfont icon-icon"></i>
            </div>
        </router-link>
   </div>
</template>

<script>
export default {
   name: 'sell',
   data() {
       return {}
   },
  components: {}
}
</script>

<style scoped lang="less">
</style>
