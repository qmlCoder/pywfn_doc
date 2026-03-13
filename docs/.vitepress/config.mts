import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/mkdocs/pywfn/",
  title: "PyWfn 文档",
  description: "波函数分析python库",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "教程", link: "/教程/设计理念" },
      { text: "理论", link: "/理论/波函数分析" },
      { text: "示例", link: "/示例/index" },
    ],

    sidebar: [
      {
        text: "教程",
        items: [
          { text: "设计理念", link: "/教程/设计理念" },
          { text: "文件读取", link: "/教程/文件读取" },
          { text: "原子性质", link: "/教程/原子性质" },
          { text: "键の性质", link: "/教程/键の性质" },
          { text: "分子性质", link: "/教程/分子性质" },
          { text: "空间性质", link: "/教程/空间性质" },
          { text: "实用工具", link: "/教程/实用工具" },
        ],
      },
      {
        text: "理论",
        items: [
          { text: "波函数分析", link: "/理论/波函数分析" },
          { text: "实空间函数", link: "/理论/实空间函数" },
        ],
      },
      {
        text: "示例",
        items: [{ text: "调整原子顺序", link: "/示例/26.03.13" }],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
