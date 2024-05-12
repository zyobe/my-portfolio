import './assets/main.css'

import { createApp } from 'vue'
import { createHead } from '@unhead/vue'
import App from './App.vue'

import { CIcon } from '@coreui/icons-vue'
import {
  cibLess,
  cibBootstrap,
  cibJquery,
  cibJavascript,
  cibHtml5Shield,
  cibCss3Shiled,
  cibSassAlt,
  cibSap,
  cibGrunt,
  cibGulp,
  cibFigma,
  cibBabel,
  cibEslint,
  cibGit,
  cibStorybook,
  cibTypescript,
  cibVueJs,
  cilCode,
  cibNuxtJs,
  cibWebpack,
  cibSubversion,
  cibMysql,
  cilX,
  cibLinkedin,
  cibJest,
  cilArrowCircleTop,
  cilHandPointUp,
  cilChevronTop,
  cilCaretTop,
  cilArrowThickFromBottom,
  cilArrowThickTop,
  cilEnvelopeClosed,
  cilSwapVertical
} from '@coreui/icons'

const icons = {
  cibLess,
  cibBootstrap,
  cibJquery,
  cibJavascript,
  cibHtml5Shield,
  cibCss3Shiled,
  cibSassAlt,
  cibSap,
  cibGrunt,
  cibGulp,
  cibFigma,
  cibBabel,
  cibEslint,
  cibGit,
  cibStorybook,
  cibTypescript,
  cibVueJs,
  cilCode,
  cibNuxtJs,
  cibWebpack,
  cibSubversion,
  cibMysql,
  cilX,
  cibLinkedin,
  cibJest,
  cilArrowCircleTop,
  cilHandPointUp,
  cilChevronTop,
  cilCaretTop,
  cilArrowThickFromBottom,
  cilArrowThickTop,
  cilEnvelopeClosed,
  cilSwapVertical
}

import AnimatedCounter from 'vue-animated-counter'

const app = createApp(App)
const head = createHead()

app.provide('icons', icons)
app.component('CIcon', CIcon)

app.use(head)
app.component('AnimatedCounter', AnimatedCounter)
app.mount('#app')
