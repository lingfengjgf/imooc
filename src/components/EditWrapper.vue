<template>
  <div
    v-if="id"
    @click="onItemClick(id)"
    class="edit-wrapper"
    :class="{ active: active }"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    id: {
      type: String,
      requier: true,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["set-active"],
  setup(props, { emit }) {
    console.log(props);

    const onItemClick = (id: string) => {
      emit("set-active", id);
    };

    return { onItemClick };
  },
});
</script>

<style scoped>
.edit-wrapper {
  padding: 0;
  cursor: pointer;
  border: 1px solid transparent;
  user-select: none;
}
.edit-wrapper:hover {
  border: 1px dashed #ccc;
}
.edit-wrapper.active {
  border-color: #3e7fff;
}
</style>
