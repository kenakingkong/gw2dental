<script setup lang="ts">
const props = defineProps({
  src: String,
  alt: String
})
</script>

<template>
  <div class="w-full h-full min-h-[300px] rounded-md bg-blue-100">
    <img :src="props.src" :alt="props.alt" class="h-full w-full object-cover rounded" />
    <div class="absolute top-[73%] right-0 w-2/3 bg-secondary/90 h-12"></div>
    <div class="absolute top-[60%] w-4/5 bg-secondary/90 text-white h-16 p-4">
      <p class="font-bold text-lg">
        <slot />
      </p>
    </div>
  </div>
</template>