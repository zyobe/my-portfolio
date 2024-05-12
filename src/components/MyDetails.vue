<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps({
  content: {
    type: Object,
    required: true
  },
  projects: {
    type: Object,
    required: true
  }
})

const currentYear = new Date().getFullYear()
const startYear = 2008
const totalYears = currentYear - startYear
const totalProjects = ref(0)

const projectsToDisplay = (obj: any) => {
  for (let i = 0; i < obj.length; i++) {
    if (obj[i].display === true) {
      totalProjects.value++
    }
  }

  return totalProjects
}

onMounted(() => {
  projectsToDisplay(props.projects)
})
</script>

<template>
  <div class="text-center lg:text-left xbasis-1/6 lg:basis-1/4">
    <h1 class="text-2xl font-medium mb-4">{{ content.mainContent.title }}</h1>
    <p class="mb-4">
      {{ content.mainContent.intro }}
    </p>
  </div>
  <div class="flex justify-center gap-4 xbasis-1/6 lg:basis-1/4">
    <div
      class="text-center text-white bg-whitex bg-slate-500 border p-3 rounded-xl min-w-36 lg:min-w-40"
    >
      <p>Learning</p>
      <AnimatedCounter :value="totalYears" :duration="1000" class="counter text-6xl lg:text-8xl" />
      <p>years</p>
    </div>
    <div class="text-center text-white bg-slate-500 border p-3 rounded-xl min-w-36 lg:min-w-40">
      <p>Worked on</p>
      <AnimatedCounter
        :value="totalProjects"
        :duration="1000"
        class="counter text-6xl lg:text-8xl"
      />
      <p>Projects</p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
