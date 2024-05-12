<script setup lang="ts">
import { content } from '../content/content'
</script>

<template>
  <div class="flex items-end gap-4">
    <a :href="`mailto:${content.email}`">
      <CIcon
        icon="cilEnvelopeClosed"
        customClassName="icon fill-gray-600 w-7 hover:opacity-50"
        title="Email"
      />
    </a>
    <div v-for="(externalLink, index) in content.externalLinks" :key="index">
      <a :href="externalLink.link" class="">
        <CIcon
          icon="cibLinkedin"
          customClassName="icon fill-gray-600 w-6 hover:opacity-50"
          title="LinkedIn"
        />
      </a>
    </div>
  </div>
</template>
<style scoped></style>
