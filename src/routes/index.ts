import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Editor from "../views/Editor.vue";
import Detail from "../views/Detail.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: { withHeader: true },
    },
    {
      path: "/editor",
      name: "editor",
      component: Editor,
    },
    {
      path: "/detail/:id",
      name: "detail",
      component: Detail,
      meta: { withHeader: true },
    },
  ],
});

export default router;
