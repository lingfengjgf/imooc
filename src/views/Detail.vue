<template>
  <div>
      <a-layout :style="{ background: '#fff' }">
        <a-layout-header class="header"><div class="header-title">慕课乐高</div></a-layout-header>
        <a-layout-content>
          <div class="detail-content">
            <a-row :gutter="16">
              <a-col class="detail-img" :span="16">
                <img  :src="info.img" />
              </a-col>
              <a-col  class="detail-info" :span="16">
                <h2 class="detail-title">前端架构师直播海报</h2>
                <a-button type="primary" class="detail-btn">使用模板</a-button>
                <a-button>下载图片海报</a-button>
              </a-col>
            </a-row>
          </div>
        </a-layout-content>
      </a-layout>
  </div>
</template>

<script setup lang="ts">
const info={img:'/src/assets/img01.png'}

</script>

<style scoped>
.header-title{
  color:#fff
}
.detail-content{
  padding: 50px 24px; 
  min-height: 85vh; 
  max-width: 1200px; 
  margin: 0px auto;
}
.detail-img,.detail-info{
  max-width: 400px;
}
.detail-img img{
  width: 100%;
  height: auto;
}
.detail-title{
  margin-bottom: 30px;
}
.detail-btn{
  margin-right: 20px;
}
</style>
