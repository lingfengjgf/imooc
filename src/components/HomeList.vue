<template>
  <div>
    <a-row :gutter="16">
    <a-col v-for="(item,i) in list" :key="i" class="poster-item" :span="6">
      <a-card hoverable style="width: 100%">
        <template #cover>
          <img :src="item.img" v-if="item&&item.img" />
        </template>
        <a-card-meta title="前端架构师">
          <template #description>www.instagram.com</template>
        </a-card-meta>
      </a-card>
    </a-col>
  </a-row>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
  name:'home-list',
  props:{
    list:{
      type:Array,
      require:true
    }
  }
})
</script>

<style scoped>
.poster-item .ant-card-cover{
  height: 390px;
}
</style>