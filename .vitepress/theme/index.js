import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import './styles/custom.css'
import './styles/font.css'
import './styles/doc-fade-in.css'
import './styles/style.css'
import ArticleShare from './components/ArticleShare.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // logo 后插入
      "logo-after": () =>
        h('img', {
          src: '/logo1.png',
          alt: 'Antlia Logo',
          style: 'width:40px;height:40px;border-radius:50%;object-fit:cover;',
        }),
      // 目录（aside-outline）后插入 ArticleShare
      "aside-outline-after": () => h(ArticleShare),
    })
  },
}

