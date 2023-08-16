<template>
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
</template>

<script setup lang="ts"></script>

<style scoped>
.editor-left {
  background: yellow;
  height: calc(100vh - 128px);
}
.editor-content {
  height: calc(100vh - 128px);
}
.editor-right {
  background: pink;
  height: calc(100vh - 128px);
}
</style>
