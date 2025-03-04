<script setup lang="ts">
const props = defineProps({
  class: String
})
</script>

<template>
  <div class="w-full max-w-6xl mx-auto p-4 md:p-6" :class="class">
    <slot />
  </div>
  
</template>