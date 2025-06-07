<template>
  <div class="relative">
    <UiBlockBackground />
    <div class="py-6 md:py-12">
      <UiContainer class="text-white">
        <LayoutTitle>About Us</LayoutTitle>
      </UiContainer>
    </div>
  </div>
  <Dentists />
  <div class="relative text-white bg-primary">
    <Technologies />
  </div>
  <Gallery />
</template>

<script setup lang="ts">
import Dentists from './Dentists.vue';
import Gallery from './Gallery.vue';
import Technologies from './Technologies.vue';

useHead({ title: "About Us" })
</script>