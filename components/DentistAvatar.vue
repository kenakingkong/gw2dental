<script setup lang="ts">
const props = defineProps({
  src: String,
  alt: String
})
</script>

<template>
  <img :src="props.src" :alt="props.alt" class="h-8 w-8 object-cover rounded-lg" />
</template>
