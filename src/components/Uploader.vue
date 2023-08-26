<template>
  <div class="file-upload">
    <button @click="uploadClick">
      <span v-if="uploadStatus === 'loading'">正在上传</span>
      <span v-else-if="uploadStatus === 'success'">上传成功</span>
      <span v-else-if="uploadStatus === 'error'">上传失败</span>
      <span v-else>点击上传</span>
    </button>
    <input
      @change="handleFileChange"
      ref="fileInput"
      type="file"
      :style="{ display: 'none' }"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    action: {
      type: String,
      required: true,
    },
  },
});
</script>

<script setup lang="ts">
import { ref } from "vue";
type UploadStatus = "ready" | "loading" | "success" | "error";
const fileInput = ref<null | HTMLInputElement>(null);
const uploadStatus = ref<UploadStatus>("ready");
const uploadClick = () => {
  if (fileInput.value) {
    fileInput.value.click();
  }
};
const handleFileChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  const files = target.files;
  if (files) {
    const uploadFile = files[0];
    const formData = new FormData();
    formData.append(uploadFile.name, uploadFile);
    // axios
  }
};
</script>

<style scoped></style>
