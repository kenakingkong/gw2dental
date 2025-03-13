<script setup lang="ts">
import Dentists from './Dentists.vue';
import OfficeGallery from './OfficeGallery.vue';
</script>

<template>
  <UiContainer>
    <div class="grid md:grid-cols-2">
      <div class="border rounded p-4">img</div>
      <div class="bg-primary text-white p-4 md:p-8 lg:p-12 rounded-lg space-y-4">
        <LayoutTitle>About Us</LayoutTitle>
        <p class="text-lg md:text-2xl">We are a contemporary dentistry run by a husband-wife duo and a team of amazing
          professionals in
          San Ramon. We’ve been serving patients in the Easy Bay for the past 20 years.</p>
        <p class="text-lg md:text-2xl">We use cutting edge x-ray machinery and 3D modeling technology to make sure you
          get the highest
          quality dental care. We also massage chairs and free wifi during your appointment.</p>
      </div>
    </div>
  </UiContainer>
  <Dentists />
  <OfficeGallery />
</template>