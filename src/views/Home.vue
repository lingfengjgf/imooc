<template>
  <div>
      <a-layout :style="{ background: '#fff' }">
        <a-layout-header class="header"><div class="header-title">慕课乐高</div></a-layout-header>
        <a-layout-content class="content">
          <div class="home-content">
            <HomeList :list="list"></HomeList>
          </div>
        </a-layout-content>
        <a-layout-footer class="footer">Footer</a-layout-footer>
      </a-layout>
  </div>
</template>

<script setup lang="ts">
import HomeList from '../components/HomeList.vue'
const list=[
  {img:'/src/assets/img01.png'},
  {img:'/src/assets/img01.png'},
  {img:'/src/assets/img01.png'},
  {img:'/src/assets/img01.png'},
];

</script>

<style scoped>
.header-title{
  color:#fff
}
.home-content{
  padding:20px;
  min-height: 85vh;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
