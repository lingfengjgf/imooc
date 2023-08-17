import { defineStore } from "pinia";

export interface UserProps {
  isLogin: boolean;
  userName?: string;
}

export const useUserStore = defineStore("user", {
  state: (): UserProps => ({
    isLogin: false,
  }),
});
