<template>
  <div v-if="withHeader">
    <a-layout :style="{ background: '#fff' }">
      <a-layout-header class="header">
        <router-link to="/">慕课乐高</router-link>
      </a-layout-header>
      <a-layout-content class="content">
        <router-view></router-view>
      </a-layout-content>
      <a-layout-footer class="footer">Footer</a-layout-footer>
    </a-layout>
  </div>
  <div v-else>
    <a-layout :style="{ background: '#fff' }">
      <a-layout-header class="header">
        <router-link to="/">慕课乐高</router-link>
      </a-layout-header>
      <router-view></router-view>
    </a-layout>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

const router = useRoute();
const withHeader = computed(() => router.meta.withHeader);
</script>

<style scoped>
.header-title {
  color: #fff;
}
</style>
