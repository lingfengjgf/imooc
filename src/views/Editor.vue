<template>
  <a-layout>
    <a-layout-sider width="300">
      <div class="editor-left">组件列表</div>
    </a-layout-sider>
    <a-layout-content>
      <div class="editor-content">
        <div class="deitor-draw" id="canvas-area">
          <component
            v-for="comp in components"
            :key="comp.id"
            :is="comp.name"
            v-bind="comp.props"
          >
            {{ comp.props.text }}
          </component>
        </div>
      </div>
    </a-layout-content>
    <a-layout-sider width="300">
      <div class="editor-right">组件属性</div>
    </a-layout-sider>
  </a-layout>
</template>

<script setup lang="ts">
import { useEditorStore } from "../stores/editor";
const { components } = useEditorStore();
</script>

<script lang="ts">
import { defineComponent } from "vue";
import LText from "../components/LText.vue";

export default defineComponent({
  components: { LText },
});
</script>

<style scoped>
.editor-left {
  background: yellow;
  height: calc(100vh - 128px);
}
.editor-content {
  height: calc(100vh - 128px);
  box-sizing: border-box;
  padding: 20px;
}
.deitor-draw {
  width: 100%;
  height: 300px;
  background: #fff;
}
.editor-right {
  background: pink;
  height: calc(100vh - 128px);
}
</style>
