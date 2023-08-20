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

export const testComponents: ComponentData[] = [
  {
    id: uuidv4(),
    name: "l-text",
    props: { text: "hello1", fontSize: "20px", color: "red", lineHeight: 1 },
  },
  {
    id: uuidv4(),
    name: "l-text",
    props: {
      text: "hello2",
      fontSize: "12px",
      fontWeight: "blod",
      textAlign: "left",
      fontFamily: "",
    },
  },
  {
    id: uuidv4(),
    name: "l-text",
    props: {
      text: "hello3",
      fontSize: "16px",
      actionType: "url",
      url: "https://www.baidu.com",
    },
  },
];

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
    setActive(id: string) {
      this.currentElement = id;
    },
    updateComponent({ key = "", value = "" }) {
      const updatedComponent = this.components.find(
        (comp) => comp.id === this.currentElement
      );
      if (updatedComponent) {
        updatedComponent.props[key] = value;
      }
    },
  },
  getters: {
    getCurrentElement: (state) => {
      return state.components.find((comp) => comp.id === state.currentElement);
    },
  },
});
