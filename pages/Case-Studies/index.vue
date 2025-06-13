<script setup lang="ts">
import CaseStudies from '~/data/CaseStudies';

useHead({ title: "Case Studies" })
</script>

<template>
  <div class="relative">
    <UiBlockBackground />
    <div class="py-6 md:py-12">
      <UiContainer class="text-white">
        <LayoutTitle>Case Studies</LayoutTitle>
      </UiContainer>
    </div>
  </div>
  <ul>
    <li v-for="caseStudy in CaseStudies.ALL" class="even:bg-secondary/5">
      <UiSection :id="caseStudy.id">
        <div class="space-y-1">
          <p class="md:text-xl text-primary font-medium">{{ caseStudy.patient }}</p>
          <h2 class="text-2xl md:text-4xl font-medium">
            {{ caseStudy.treatment }}
          </h2>
          <!-- <p class="md:text-xl max-w-2xl">{{ caseStudy.description }}</p> -->
          <div class="flex flex-wrap gap-4 md:gap-6 py-8">
            <figure v-for="image in caseStudy.images" class="space-y-2">
              <img :src="image.src" :alt="image.alt"
                class="w-full max-w-full md:max-w-96 h-auto md:h-64 object-cover rounded border" loading="lazy" />
              <figcaption class="font-medium text-center text-gray-500">{{ image.caption }}</figcaption>
            </figure>
          </div>
        </div>
      </UiSection>
    </li>
  </ul>
</template>