import { defineComponent } from "vue";

const RenderVnode = defineComponent({
  props: {
    vNode: {
      type: [Object, String],
      require: true,
    },
  },
  render() {
    return this.vNode;
  },
});

export default RenderVnode;
