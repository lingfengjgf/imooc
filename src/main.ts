import { createApp } from "vue";
import "./style.css";
import Antd from "ant-design-vue";
import App from "./App.vue";
import "ant-design-vue/dist/reset.css";
import router from "./routes";
import { createPinia } from "pinia";

createApp(App).use(Antd).use(router).use(createPinia()).mount("#app");
