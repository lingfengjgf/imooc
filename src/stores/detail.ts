import { defineStore } from "pinia";

export interface DetailProps {
  id: number;
  title: string;
  img: string;
  author: string;
  copiedCount: number;
}

export interface DetailsProps {
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
    img: "/src/assets/img02.png",
    id: 2,
    title: "天天开心",
    author: "momo",
    copiedCount: 206,
  },
  {
    img: "/src/assets/img03.png",
    id: 3,
    title: "招聘",
    author: "momo",
    copiedCount: 58,
  },
  {
    img: "/src/assets/img04.png",
    id: 4,
    title: "JAVA 入门",
    author: "momo",
    copiedCount: 66,
  },
  {
    img: "/src/assets/img05.png",
    id: 5,
    title: "慕课 Live",
    author: "momo",
    copiedCount: 248,
  },
  {
    img: "/src/assets/img06.png",
    id: 6,
    title: "每日分享",
    author: "momo",
    copiedCount: 179,
  },
  {
    img: "/src/assets/img07.png",
    id: 7,
    title: "慕课资讯",
    author: "momo",
    copiedCount: 113,
  },
];

export const useDetailStore = defineStore("detail", {
  state: (): DetailsProps => ({
    list: testData,
  }),
  getters: {
    getDetailId: (state) => {
      return (id: number) => state.list.find((item) => item.id === id);
    },
  },
});
