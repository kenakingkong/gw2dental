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
  <UiSection>
    <div class="space-y-12 md:space-y-16 lg:space-y-24">
      <Service v-bind="Services.GENERAL_DENTISTRY">
        <ul class="pt-2 flex items-center gap-2 divide-x">
          <li v-for="treatment in Services.GENERAL_DENTISTRY_TREATMENTS" class="px-4 first:pl-0 last:pr-0">
            <span class="text-lg md:text-2xl font-medium text-gray-400">{{ treatment }}</span>
          </li>
        </ul>
      </Service>
      <Service v-bind="Services.INVISALIGN" />
      <Service v-bind="Services.DENTAL_IMPLANTS" />
      <Service v-bind="Services.PROSTHODONTICS">
        <h2 class="text-lg md:text-2xl font-bold text-primary pt-2">{{ Services.MAX_PROSTHODONTICS.title }}</h2>
        <p class="text-base md:text-xl">{{ Services.MAX_PROSTHODONTICS.description }}</p>
      </Service>
      <Service v-bind="Services.COSMETIC_RECONSTRUCTION">
      </Service>
    </div>
  </UiSection>
</template>