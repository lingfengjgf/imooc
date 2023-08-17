<template>
  <a-button v-if="!user?.isLogin" type="primary" @click="login">登录</a-button>
  <div v-else>
    <a-dropdown-button>
      <router-link to="/setting">{{ user.userName }}</router-link>
      <template v-slot:overlay>
        <a-menu>
          <a-menu-item key="0" @click="logout">退出</a-menu-item>
        </a-menu>
      </template>
    </a-dropdown-button>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";
import { message } from "ant-design-vue";
import { UserProps, useUserStore } from "../stores/user";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "user-profile",
  props: {
    user: {
      type: Object as PropType<UserProps>,
      require: true,
    },
  },
  setup() {
    const userStore = useUserStore();
    const router = useRouter();
    const login = () => {
      userStore.isLogin = true;
      userStore.userName = "vivi";
      message.success("登录成功", 2);
    };
    const logout = () => {
      userStore.isLogin = false;
      message.success("退出登录成功，2s后跳转到首页", 2);
      setTimeout(() => {
        router.push("/");
      }, 2000);
    };
    return { login, logout };
  },
});
</script>

<style scoped></style>
