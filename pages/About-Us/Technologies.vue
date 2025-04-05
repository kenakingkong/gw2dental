<script setup lang="ts">
import Technologies from '~/data/Technologies';
</script>

<template>
  <UiSection>
    <UiQuote class="text-center">
      We use cutting edge X-Ray machinery and 3D modeling technology to make sure you
      get the highest quality dental care.
    </UiQuote>
    <div class="grid md:grid-cols-3 gap-8 py-4">
      <figure v-for="technology in Technologies.FEATURED" class="mx-auto space-y-2">
        <img :src="technology.image.src" :alt="technology.image.alt" class="w-64 h-64 mx-auto object-cover rounded" />
        <figcaption class="text-lg font-medium text-center">{{ technology.name }}</figcaption>
      </figure>
    </div>
    <div class="text-center">
      <UiButtonLink to="/technologies" class="text-lg text-white bg-secondary">Learn more about our technologies
      </UiButtonLink>
    </div>
  </UiSection>
</template>