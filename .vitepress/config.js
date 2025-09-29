export default {
  title: 'Antlia',
  description: '轻量级脚本项目部署工具',
  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/logo.png' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ],
  themeConfig: {
    logo: '/logo.png',
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '没有找到结果',
            resetButtonTitle: '清除搜索',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },
    nav: [
      { text: '指南', link: '/guide' },
      { text: 'GitHub', link: 'https://github.com/zhende1113/Antlia' },
    ],
    editLink: {
      pattern: 'https://github.com/zhende1113/Antlia/edit/main/docs/:path',
      text: '不妥之处，敬请雅正'
    },
sidebar: {
  '/': [
    {
      text: '其他功能',
      items: [
        { text: '项目脚本状态', link: '/guide' },
      ]
    },
    {
      text: 'Bot项目相关',
      items: [
        { text: 'AstrBot', link: '/QQBot/AstrBot' },
        { text: 'Eridanus', link: '/QQBot/Eridanus' },
        { text: 'NapCat', link: '/QQBot/NapCat' },
        { text: 'Lagange.OneBot', link: '/QQBot/Lagange-OneBot' },
      ]
    },
    {
      text: 'Python环境管理相关',
      items: [
        { text: 'UV', link: '/Python/uv' },
      ]
    }
  ]
}

  },
}
