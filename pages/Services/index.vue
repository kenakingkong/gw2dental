<script setup lang="ts">
import Services from '~/data/Services';
import Service from "./Service.vue"
</script>

<template>
  <div class="relative">
    <UiBlockBackground />
    <div class="py-6 md:py-12">
      <UiContainer class="text-white">
        <LayoutTitle>Services</LayoutTitle>
      </UiContainer>
    </div>
  </div>
  <div class="bg-secondary/5">
    <Service v-bind="Services.GENERAL_DENTISTRY">
      <ul class="pt-2 flex items-center gap-2 divide-x">
        <li v-for="treatment in Services.GENERAL_DENTISTRY_TREATMENTS" class="px-4 first:pl-0 last:pr-0">
          <span class="text-lg md:text-2xl font-medium text-gray-400">{{ treatment }}</span>
        </li>
      </ul>
    </Service>
  </div>
  <Service v-bind="Services.PROSTHODONTICS">
    <div class="space-y-4">
      <h2 class="text-lg md:text-2xl font-bold text-primary pt-2">{{ Services.MAX_PROSTHODONTICS.title }}</h2>
      <p class="text-base md:text-xl">{{ Services.MAX_PROSTHODONTICS.description }}</p>
    </div>
  </Service>
  <div class="bg-secondary/5">
    <Service v-bind="Services.DENTAL_IMPLANTS">
      <!-- <div class="w-max mr-auto">
        <UiButtonLink to="/case-studies#patient-3" class="w-max bg-primary text-white flex items-center gap-2">
          <span class="material-symbols-rounded text-xs">image</span>
          <span>See Before & After Images</span>
        </UiButtonLink>
      </div> -->
    </Service>
  </div>
  <Service v-bind="Services.INVISALIGN">
    <div class="w-max mr-auto">
      <UiButtonLink to="/technologies#itero-3d-scanner" class="w-max bg-primary text-white flex items-center gap-2">
        Learn more about the iTero 3D Scanner
      </UiButtonLink>
    </div>
  </Service>
  <div class="bg-secondary/5">
    <Service v-bind="Services.COSMETIC_RECONSTRUCTION">
      <!-- <div class="w-max mr-auto">
        <UiButtonLink to="/case-studies#patient-1" class="w-max bg-primary text-white flex items-center gap-2">
          <span class="material-symbols-rounded text-xs">image</span>
          <span>See Before & After Images</span>
        </UiButtonLink>
      </div> -->
    </Service>
  </div>
</template>