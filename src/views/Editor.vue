<template>
  <div>
      <a-layout :style="{ background: '#fff' }">
        <a-layout-header class="header"><div class="header-title">慕课乐高</div></a-layout-header>
        <a-layout>
          <a-layout-sider width="300">
            <div class="editor-left">组件列表</div>
          </a-layout-sider>
          <a-layout-content>
            <div class="editor-content">画布区域</div>
          </a-layout-content>
          <a-layout-sider width="300">
            <div class="editor-right">组件属性</div>
          </a-layout-sider>
        </a-layout>
      </a-layout>
  </div>
</template>

<script setup lang="ts">


</script>

<style scoped>
.header-title{
  color:#fff
}
.editor-left{
  background: yellow;
  height: calc(100vh - 64px);
}
.editor-content{
  height: calc(100vh - 64px);
}
.editor-right{
  background: pink;
  height: calc(100vh - 64px);
}
</style>
