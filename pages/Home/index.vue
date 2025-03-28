<template>
  <div class="w-full h-full min-h-screen flex flex-col">
    <div class="bg-blue-50/10">
      <LayoutHeader />
      <div class="w-full max-w-5xl mx-auto my-2 md:my-16 lg:my-32">
        <Hero />
      </div>
    </div>
    <div class="bg-primary text-white">
      <UiSection class="text-center">
        <span>tooth</span>
        <p class="text-2xl md:text-4xl font-bold tracking-wide max-w-2xl mx-auto">This is the mission statement.
          Something about caring about you.</p>
      </UiSection>
    </div>
    <Treatments />
    <Reviews />
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
