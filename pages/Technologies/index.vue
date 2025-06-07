<script setup lang="ts">
import Technologies from '~/data/Technologies';

useHead({ title: "Technologies" })
</script>

<template>
  <div class="relative">
    <UiBlockBackground />
    <div class="py-6 md:py-12">
      <UiContainer class="text-white">
        <LayoutTitle>Technologies</LayoutTitle>
      </UiContainer>
    </div>
  </div>
  <ul>
    <li v-for="technology in Technologies.ALL" class="even:bg-secondary/5">
      <UiSection :id="technology.id" class="space-y-2">
        <div class="space-y-2">
          <h2 class="text-2xl md:text-4xl font-medium text-primary">
            {{ technology.name }}
          </h2>
          <p class="md:text-xl max-w-2xl">{{ technology.description }}</p>
        </div>
        <div class="flex flex-wrap gap-4 md:gap-6">
          <figure v-for="image in technology.images" class="space-y-2">
            <img :src="image.src" :alt="image.alt"
              class="w-full max-w-full md:max-w-96 h-auto md:h-64 object-cover rounded border" />
            <figcaption class="font-medium text-center text-gray-500">{{ image.caption }}</figcaption>
          </figure>
        </div>
      </UiSection>
    </li>
  </ul>
</template>