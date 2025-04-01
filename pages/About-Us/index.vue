<template>
  <div class="relative">
    <UiBlockBackground />
    <div class="py-6 md:py-12">
      <UiContainer class="text-white">
        <LayoutTitle>About Us</LayoutTitle>
      </UiContainer>
    </div>
  </div>
  <UiSection class="lg:space-y-16">
    <UiQuote class="text-center">
      We are a contemporary dentistry run by a husband-wife duo and a team of amazing
      professionals in San Ramon.
    </UiQuote>
    <p class="text-lg md:text-2xl max-w-2xl mx-auto text-center">
      We’ve been proudly serving patients in the East Bay for the past 20 years.</p>
    <Dentists />
  </UiSection>
  <div class="relative text-white bg-primary">
    <!-- <UiBlockBackground /> -->
    <UiSection>
      <UiQuote>
        We use cutting edge x-ray machinery and 3D modeling technology to make sure you
        get the highest quality dental care.
      </UiQuote>
      <p class="text-lg md:text-2xl max-w-2xl mx-auto text-center">
        Subtitle? idk</p>
      <div class="grid md:grid-cols-3">
        <div>img 1</div>
        <div>img 2</div>
        <div>img 3</div>
      </div>
      <div class="text-center">
        <NuxtLink to="/technologies" class="text-lg">Learn more about our technologies</NuxtLink>
      </div>
    </UiSection>
  </div>
  <UiSection>
    <UiQuote>
      We are dedicated to creating a safe and comfortable office.
    </UiQuote>
    <p class="text-lg md:text-2xl max-w-2xl mx-auto text-center">
      We're dedicated to creating a safe and comfortable office. It's like you are not even at your office. We also
      massage chairs and free wifi during your appointment</p>
  </UiSection>
  <Gallery />
</template>

<script setup lang="ts">
import Dentists from './Dentists.vue';
import Gallery from './Gallery.vue';
</script>