<script setup lang="ts">
import ProjectModal from './ProjectModal.vue'

const props = defineProps({
  project: {
    type: Object,
    required: true
  },
  assetPath: String
})
</script>

<template>
  <div
    v-if="props.project.image.src"
    class="flex flex-col justify-center items-center bg-white relative h-20 sm:h-30 mx-4 -mt-6 overflow-hidden text-white bg-clip-border rounded-xl shadow-md px-4 py-8 sm:py-14 lg:p-12"
  >
    <img
      :src="`${assetPath}${props.project.image.src}`"
      :alt="props.project.image.alt"
      class="grayscale group-hover:grayscale-0 max-h-[50px] md:max-h-none md:max-w-[70%] lg:max-w-[70%]"
    />
  </div>
  <div class="details flex flex-col h-full p-6">
    <div>
      <div
        v-if="props.project.yearStart"
        class="text-sm mb-4 inline-block bg-slate-500 text-white px-1 rounded"
      >
        <time :datetime="props.project.yearStart">{{ props.project.yearStart }}</time>
        <span v-if="props.project.yearEnd > props.project.yearStart">-</span>
        <time
          v-if="props.project.yearEnd > props.project.yearStart"
          :datetime="props.project.yearEnd"
          >{{ props.project.yearEnd }}</time
        >
      </div>
      <div class="mb-4">
        <h2 class="font-medium text-xl antialiased leading-snug tracking-normal text-blue-gray-900">
          {{ props.project.brand }}
        </h2>

        <p v-if="props.project.type" class="text-sm">({{ props.project.type }})</p>
      </div>
    </div>

    <div class="pt-2 border-t border-slate-200">
      <h3 class="mb-4 font-medium">Techstack used</h3>
      <ul class="flex flex-wrap gap-3.5">
        <li
          v-for="techstack in props.project.techstack"
          :key="techstack.name"
          class="hover:opacity-50"
        >
          <CIcon
            :icon="techstack.icon"
            customClassName="icon fill-gray-400 w-7"
            :title="techstack.name"
          />
        </li>
      </ul>
    </div>
  </div>
  <div v-if="props.project.details" class="p-6 pt-0 mt-auto">
    <ProjectModal :project="props.project" :assetPath="assetPath" />
  </div>
</template>
