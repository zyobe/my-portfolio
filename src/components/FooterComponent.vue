<script setup lang="ts">
import ContactIconsComponent from './ContactIconsComponent.vue'

const currentYear = new Date().getFullYear()
</script>

<template>
  <div class="flex justify-center relative">
    <div>
      <ContactIconsComponent />
    </div>
    <div class="absolute right-0">
      <p>&copy; {{ currentYear }}</p>
    </div>
  </div>
</template>
<style scoped></style>
