<template>
  <div>
    <a-row :gutter="16">
      <a-col v-for="(item, i) in list" :key="i" class="poster-item" :span="6">
        <router-link :to="{ name: 'detail', params: { id: item.id } }">
          <a-card hoverable style="width: 100%">
            <template #cover>
              <img class="item-img" :src="item.img" v-if="item && item.img" />
            </template>
            <a-card-meta :title="item.title">
              <template #description>
                <div class="info">
                  <span>作者： {{ item.author }}</span>
                  <span class="count">{{ item.copiedCount }}</span>
                </div>
              </template>
            </a-card-meta>
          </a-card>
        </router-link>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { DetailProps } from "../stores/detail";
export default defineComponent({
  name: "home-list",
  props: {
    list: {
      type: Array as PropType<DetailProps[]>,
      require: true,
    },
  },
});
</script>

<style>
.poster-item {
  margin-bottom: 20px;
}
.poster-item .ant-card-cover {
  height: 390px;
  overflow: hidden;
}
.info {
  font-size: 14px;
  color: #333;
}
.count {
  margin-left: 20px;
}
</style>
