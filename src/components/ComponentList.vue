<template>
  <div class="component-list">
    <div
      @click="onItemClick(item)"
      v-for="(item, i) in list"
      :key="i"
      class="component-list-item"
    >
      <l-text v-bind="item"></l-text>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LText from "./LText.vue";

export default defineComponent({
  name: "component-list",
  components: { LText },
  props: {
    list: {
      type: Array,
      require: true,
    },
  },
  emits: ["on-item-click"],
  setup(props, { emit }) {
    console.log(props);

    const onItemClick = (data: any) => {
      emit("on-item-click", data);
    };
    return { onItemClick };
  },
});
</script>

<style scoped>
.component-list-item {
  padding: 10px;
  text-align: center;
}
</style>
