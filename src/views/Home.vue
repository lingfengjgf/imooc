<template>
  <div class="home-content">
    <HomeList :list="golbalStore.list"></HomeList>
  </div>
</template>

<script setup lang="ts">
import HomeList from "../components/HomeList.vue";
import { useGlobalStore } from "../stores";

const golbalStore = useGlobalStore();
</script>

<style scoped>
.home-content {
  padding: 20px;
  min-height: 85vh;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
