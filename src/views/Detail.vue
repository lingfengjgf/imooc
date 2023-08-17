<template>
  <div class="detail-content">
    <a-row :gutter="16">
      <a-col class="detail-img" :span="16">
        <img :src="info.img" />
      </a-col>
      <a-col class="detail-info" :span="16">
        <h2 class="detail-title">{{ info?.title }}</h2>
        <div class="detail-text">
          <span>作者：{{ info?.author }}</span
          ><span class="detail-num">{{ info?.copiedCount }}</span>
        </div>
        <router-link to="/editor">
          <a-button type="primary" class="detail-btn">使用模板</a-button>
        </router-link>
        <a-button>下载图片海报</a-button>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useDetailStore, DetailProps } from "../stores/detail";

const router = useRoute();
const detailStore = useDetailStore();
const currentId = router.params.id as string;
const info = computed(
  () => <DetailProps>detailStore.getDetailId(parseInt(currentId))
);
</script>

<style scoped>
.detail-content {
  padding: 50px 24px;
  min-height: 85vh;
  max-width: 1200px;
  margin: 0px auto;
}
.detail-img,
.detail-info {
  max-width: 400px;
  overflow: hidden;
}
.detail-img img {
  width: 100%;
  height: auto;
}
.detail-title {
  margin-bottom: 30px;
}
.detail-btn {
  margin-right: 20px;
}
.detail-num {
  margin-left: 20px;
  color: #666;
}
.detail-text {
  margin: 20px 0;
  font-size: 16px;
  color: #333;
}
</style>
