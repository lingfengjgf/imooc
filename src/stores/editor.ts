import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid";
import { TextComponentProps } from "../defaultProps";

export interface EditorProps {
  components: ComponentData[]; // 供中间编辑器渲染的数组
  currentElement: string; // 当前编辑的元素
}

export interface ComponentData {
  props: { [key: string]: any };
  id: string;
  name: string;
}

export const testComponents: ComponentData[] = [];

export const useEditorStore = defineStore("editor", {
  state: (): EditorProps => ({
    components: testComponents,
    currentElement: "",
  }),
  actions: {
    addComponent(props: Partial<TextComponentProps>) {
      const newComponent: ComponentData = {
        id: uuidv4(),
        name: "l-text",
        props,
      };
      this.components.push(newComponent);
    },
    delComponent(id: string) {
      this.components = this.components.filter((comp) => comp.id != id);
    },
  },
});
