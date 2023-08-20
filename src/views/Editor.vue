<template>
  <a-layout>
    <a-layout-sider width="300">
      <div class="editor-left">
        <div class="editor-title">组件列表</div>
        <ComponentList
          :list="defaultTextTemplates"
          @on-item-click="addItem"
        ></ComponentList>
      </div>
    </a-layout-sider>
    <a-layout-content>
      <div class="editor-content">
        <div class="editor-title">画布区域</div>
        <div class="editor-draw" id="canvas-area">
          <edit-wrapper
            @setActive="setActive"
            v-for="comp in editorStore.components"
            :key="comp.id"
            :id="comp.id"
            :active="comp.id === currentElement?.id"
          >
            <div class="editor-comp">
              <component :is="comp.name" v-bind="comp.props">
                {{ comp.props.text }}
              </component>
              <a-button
                @click="delItem(comp.id)"
                class="editor-btn"
                danger
                size="small"
                >删除</a-button
              >
            </div>
          </edit-wrapper>
        </div>
      </div>
    </a-layout-content>
    <a-layout-sider width="300">
      <div class="editor-right">
        <div class="editor-title">组件属性</div>
        <props-table
          v-if="currentElement && currentElement.props"
          :props="currentElement.props"
          @change="handleChange"
        ></props-table>
        <pre>{{ currentElement?.props }}</pre>
      </div>
    </a-layout-sider>
  </a-layout>
</template>

<script setup lang="ts">
import { computed } from "vue";
import ComponentList from "../components/ComponentList.vue";
import EditWrapper from "../components/EditWrapper.vue";
import PropsTable from "../components/PropsTable.vue";
import { defaultTextTemplates } from "../defaultTextTemplates";
import { useEditorStore } from "../stores/editor";
const editorStore = useEditorStore();
const addItem = (props: any) => {
  editorStore.addComponent(props);
};
const delItem = (id: string) => {
  editorStore.delComponent(id);
};
const setActive = (id: string) => {
  editorStore.setActive(id);
};
const currentElement = computed(() => editorStore.getCurrentElement);
const handleChange = (e: any) => {
  editorStore.updateComponent(e);
};
</script>

<script lang="ts">
import { defineComponent } from "vue";
import LText from "../components/LText.vue";

export default defineComponent({
  components: { LText },
});
</script>

<style scoped>
.editor-left,
.editor-content,
.editor-right {
  height: calc(100vh - 128px);
  box-sizing: border-box;
  padding: 20px;
}
.editor-left {
  background: #fff;
}
.editor-content {
  background: #f7f7f7;
}
.editor-draw {
  width: 100%;
  height: 300px;
  background: #fff;
  position: relative;
}
.editor-right {
  background: #fff;
}
.editor-title {
  font-size: 18px;
  margin-bottom: 20px;
}
.editor-comp {
  display: flex;
}
.editor-btn {
  margin-left: 20px;
}
</style>
