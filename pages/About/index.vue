<script setup lang="ts">
import Dentists from './Dentists.vue';
import OfficeGallery from './OfficeGallery.vue';
</script>

<template>
  <div class="relative">
    <UiBlockBackground />
    <div class="py-6 md:py-12">
      <UiContainer class="text-white">
        <LayoutTitle>About Us</LayoutTitle>
      </UiContainer>
    </div>
  </div>
  <UiSection>
    <div class="grid md:grid-cols-3 gap-4">
      <div>
        img here idk
      </div>
      <div class="col-span-2 space-y-4 md:space-y-8">
        <p class="text-lg md:text-2xl">We are a contemporary dentistry run by a husband-wife duo and a team of amazing
          professionals in
          San Ramon. We’ve been serving patients in the Easy Bay for the past 20 years.</p>
        <p class="text-lg md:text-2xl">We use cutting edge x-ray machinery and 3D modeling technology to make sure you
          get the highest
          quality dental care. We also massage chairs and free wifi during your appointment.</p>
      </div>
    </div>
  </UiSection>
  <Dentists />
  <OfficeGallery />
</template>