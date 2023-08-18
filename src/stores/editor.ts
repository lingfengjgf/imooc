import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid";

export interface EditorProps {
  components: ComponentData[]; // 供中间编辑器渲染的数组
  currentElement: string; // 当前编辑的元素
}

export interface ComponentData {
  props: { [key: string]: any };
  id: string;
  name: string;
}

export const testComponents: ComponentData[] = [
  { id: uuidv4(), name: "l-text", props: { text: "hello1", fontSize: "20px" } },
  { id: uuidv4(), name: "l-text", props: { text: "hello2", fontSize: "12px" } },
  { id: uuidv4(), name: "l-text", props: { text: "hello3", fontSize: "16px" } },
];

export const useEditorStore = defineStore("editor", {
  state: (): EditorProps => ({
    components: testComponents,
    currentElement: "",
  }),
});
