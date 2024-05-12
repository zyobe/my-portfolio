<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useHead } from '@unhead/vue'
import HeaderComponent from './components/HeaderComponent.vue'
import MyDetails from './components/MyDetails.vue'
import ProjectCard from './components/ProjectCard.vue'
import FooterComponent from './components/FooterComponent.vue'
import { content } from './content/content'
import { projects } from './content/projects'
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
  cilEnvelopeClosed
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
  cilEnvelopeClosed
}

const assetPath = './public/assets/'

let shallowProjects = ref([...projects])

const reOrder = () => {
  shallowProjects.value = shallowProjects.value.slice().reverse()
  return shallowProjects.value
}

const scrollToTop = () => {
  const rootElement = document.documentElement
  rootElement.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

useHead({
  title: 'Adam Hutson - Frontend Developer',
  meta: [
    {
      name: 'Details of projects I have worked on during my time as a Frontend Developer',
      content:
        'A Frontend Developer who always attempts to learn new technologies in this fast paced, ever changbing industry. Open to discussing any Frontend related opportunities. I use Vue, Nuxt, Typescript, Javascript, Storybook, Gulp, Grunt, Webpack, jQuery, HTML, CSS, SASS, Tailwind, Bootstrap, Agile, Git.'
    }
  ]
})

onMounted(() => {
  document.addEventListener('keyup', (event) => {
    console.log(event)
  })
})
</script>

<template>
  <header class="relative">
    <div
      id="skip-link"
      class="absolute translate-y-[-100%] focus-within:translate-y-[0%] bg-slate-500 text-white py-2 px-6"
    >
      Skip to <a href="#intro">introduction</a>, <a href="#project-details">project details</a> or
      <a href="#footer">footer</a>
    </div>
    <div class="container p-4 mx-auto">
      <HeaderComponent :content="content" />
    </div>
  </header>

  <main>
    <div class="container px-4 mx-auto">
      <div id="intro" class="mb-4 md:mb-0 lg:flex lg:justify-center lg:items-start lg:gap-4">
        <MyDetails :content="content" :projects="projects" />
      </div>
      <div class="mb-10 flex justify-end">
        <button
          class="flex ml-auto mr-4 mb-4 rounded-lg align-middle select-none bg-slate-500 text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm p-3 hover:bg-slate-700 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
          @click="reOrder()"
        >
          <CIcon icon="cilSwapVertical" customClassName="icon w-5" title="Change year order" />
        </button>
      </div>
      <ul
        id="project-details"
        class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      >
        <template v-for="(project, index) in shallowProjects" :key="index">
          <li
            v-if="project.display"
            :id="`project-${index}`"
            class="group text-gray-500 flex flex-col bg-white border bg-clip-border border-1 border-grey-300 mb-6 md:mt-0 shadow-md rounded-xl"
            :class="!project.image.src ? '-mt-6' : ''"
          >
            <ProjectCard :project="project" :assetPath="assetPath" />
          </li>
        </template>
      </ul>
    </div>
    <button
      id="scrollToTopBtn"
      @click="scrollToTop()"
      class="flex ml-auto mr-4 mb-4 rounded-lg bg-slate-500 text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm p-3 hover:bg-slate-700 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
    >
      <CIcon icon="cilArrowThickTop" customClassName="icon w-5" title="Scroll to top" />
    </button>
  </main>

  <footer id="footer">
    <div class="border-t border-gray-300">
      <div class="container px-4 py-4 mx-auto">
        <FooterComponent />
      </div>
    </div>
  </footer>
</template>

<style>
body {
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  font-style: normal;
}
</style>
