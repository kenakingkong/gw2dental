<template>
  <div class="w-full h-full min-h-screen flex flex-col">
    <div class="bg-blue-50">
      <LayoutHeader />
      <div class="w-full max-w-6xl mx-auto md:mt-16 md:mb-8">
        <Hero />
      </div>
      <div class="p-4 w-full max-w-6xl mx-auto rounded-lg bg-white p-4 md:p-16 text-center space-y-4 md:space-y-8 shadow">
        <Treatments />
      </div>
    </div>
    <div class="bg-primary text-white">
      <Reviews />
    </div>
    <div>
      <Faqs />
    </div>
    <LayoutFooter />
  </div>
</template>

<script setup lang="ts">
import Faqs from './Faqs.vue';
import Hero from './Hero.vue';
import Reviews from './Reviews.vue';
import Treatments from './Treatments.vue';

definePageMeta({ layout: "custom" })
</script>
