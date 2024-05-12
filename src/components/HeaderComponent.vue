<script setup lang="ts">
import ContactIconsComponent from './ContactIconsComponent.vue'

const props = defineProps({
  content: {
    type: Object,
    required: true
  }
})

const assetPath = './public/assets/'
</script>

<template>
  <div class="flex justify-center md:justify-end">
    <div class="flex items-center gap-3 md:gap-4 flex-col md:flex-row-reverse">
      <img
        :src="`${assetPath}${content.headerDetails.image.src}`"
        :alt="content.headerDetails.image.alt"
        class="rounded-full mr-1 w-[60px]"
      />
      <ContactIconsComponent />
    </div>
  </div>
</template>
<style scoped></style>
