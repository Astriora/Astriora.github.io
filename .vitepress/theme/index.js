import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import './styles/custom.css'
import './styles/font.css'
import './styles/doc-fade-in.css'
import './styles/style.css'
import './styles/changelog.css'  // 添加这行
import ArticleShare from './components/ArticleShare.vue'

// GitChangelog 插件
import { NolebaseGitChangelogPlugin } from '@nolebase/vitepress-plugin-git-changelog/client'
import '@nolebase/vitepress-plugin-git-changelog/client/style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'logo-after': () =>
        h('img', {
          src: '/logo1.png',
          alt: 'Antlia Logo',
          style: 'width:40px;height:40px;border-radius:50%;object-fit:cover;',
        }),
      'aside-outline-after': () => h(ArticleShare),
    })
  },
  enhanceApp({ app }) {
    app.use(NolebaseGitChangelogPlugin, {
      locales: {
        'zh-CN': {
          changelog: {
            title: '页面历史',
            noData: '暂无历史记录',
            lastEdited: '最后编辑于',
            lastEditedBy: '最后编辑者',
            viewFullHistory: '查看完整历史',
            commitMessage: '提交信息',
          },
          contributors: {
            title: '贡献者',
            noData: '暂无贡献者',
          },
        },
      },
      mapAuthors: [
        {
          name: 'zhende1113',
          avatar: '/logo1.png',
        },
        {
          name: 'Astriora', 
          avatar: '/logo1.png',
        },
      ],
    })
  },
}