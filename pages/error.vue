<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})
</script>

<template>
  <div class="min-h-[60vh] flex flex-col items-center justify-center bg-secondary text-white">
    <UiHeader v-if="error?.statusCode == 400">Page not found</UiHeader>
    <UiHeader v-else>Something went wrong</UiHeader>
  </div>
</template>