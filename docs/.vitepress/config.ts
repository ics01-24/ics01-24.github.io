import { defineConfig } from 'vitepress'
import { nav } from './utils/nav'
import { sidebar } from './utils/sidebar'
import mathjax3 from 'markdown-it-mathjax3'

/**
 * 参考：https://vitepress.vuejs.org/config/app-configs.html
 *
 * 修改这里需要重启项目才可以生效
 */

const customElements = ['mjx-container']

const config = defineConfig({
  title: 'ICS Fall 2023',
  description: 'USTC ICS CS1002A.01 Fall 2023 Homepage',
  lang: 'zh-CN',
  lastUpdated: true,
  themeConfig: {
    lastUpdatedText: '最后更新时间',
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/ics01-23/ics01-23.github.io',
      },
    ],
    editLink: {
      pattern: 'https://github.com/ics01-23/ics01-23.github.io/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页 ',
    },
    nav,
    sidebar,
  },
  markdown: {
    config: (md) => {
      md.use(mathjax3)
    },
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: tag => customElements.includes(tag),
      },
    },
  },
})

export default config
