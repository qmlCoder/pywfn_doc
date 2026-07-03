import { defineConfig } from "vitepress";

import mathjax3 from "markdown-it-mathjax3";

const customElements = [
  "mjx-container",
  "mjx-assistive-mml",
  "math",
  "maction",
  "maligngroup",
  "malignmark",
  "menclose",
  "merror",
  "mfenced",
  "mfrac",
  "mi",
  "mlongdiv",
  "mmultiscripts",
  "mn",
  "mo",
  "mover",
  "mpadded",
  "mphantom",
  "mroot",
  "mrow",
  "ms",
  "mscarries",
  "mscarry",
  "msgroup",
  "msline",
  "msrow",
  "mspace",
  "msqrt",
  "mstack",
  "mstyle",
  "msub",
  "msup",
  "msubsup",
  "mtable",
  "mtd",
  "mtext",
  "mtr",
  "munder",
  "munderover",
  "semantics",
  "annotation",
  "annotation-xml",
];

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/mkdocs/pywfn/",
  title: "PyWfn 文档",
  description: "波函数分析python库",
  lastUpdated: true,
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
          { text: "键的性质", link: "/教程/键的性质" },
          { text: "分子性质", link: "/教程/分子性质" },
          { text: "空间性质", link: "/教程/空间性质" },
          { text: "实用工具", link: "/教程/实用工具" },
          { text: "内置数据", link: "/教程/内置数据" },
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
        items: [
          { text: "调整原子顺序", link: "/示例/26.03.13" },
          { text: "ChemDraw设置颜色", link: "/示例/26.03.18" },
          { text: "任意原子轨道的电子密度", link: "/示例/26.04.29" },
          { text: "26.06.09", link: "/示例/26.06.09" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
  markdown: {
    config: (md) => {
      md.use(mathjax3);
    },
  },
  vue: {
    template: {
      compilerOptions: {
        // 让 Vue 识别 MathJax 生成的自定义标签
        isCustomElement: (tag) => customElements.includes(tag),
      },
    },
  },
});
