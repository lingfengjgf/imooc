import { defineStore } from "pinia";

export interface UserProps {
  isLogin: boolean;
  userName?: string;
}

export interface DetailProps {
  id: number;
  title: string;
  img: string;
  author: string;
  copiedCount: number;
}

export interface GlobalDataProps {
  user: UserProps;
  list: DetailProps[];
}

const testData: DetailProps[] = [
  {
    img: "/src/assets/img01.png",
    id: 1,
    title: "前端架构师",
    author: "momo",
    copiedCount: 123,
  },
  {
    img: "/src/assets/img01.png",
    id: 2,
    title: "前端架构师",
    author: "momo",
    copiedCount: 206,
  },
  {
    img: "/src/assets/img01.png",
    id: 3,
    title: "前端架构师",
    author: "momo",
    copiedCount: 58,
  },
  {
    img: "/src/assets/img01.png",
    id: 4,
    title: "前端架构师",
    author: "momo",
    copiedCount: 66,
  },
];

export const useGlobalStore = defineStore("global", {
  state: (): GlobalDataProps => ({
    list: testData,
    user: { isLogin: false },
  }),
});
