<script setup lang="ts">
import Services from '~/data/Services';
</script>

<template>
  <div class="bg-secondary/10">
    <UiSection>
      <UiSectionHeader class="text-center">
        <template v-slot:header>Find your Treatment</template>
        <template v-slot:subheader>We have a wide range of treatments and services -
          from routine cleanings to tooth replacements.</template>
      </UiSectionHeader>
      <ul class="w-full max-w-2xl mx-auto grid md:grid-cols-3 gap-4 py-4">
        <li class="flex flex-col items-center gap-2">
          <UiIcon :name="Services.GENERAL_DENTISTRY.icon" size="64" />
          <span class="text-xl font-medium">{{ Services.GENERAL_DENTISTRY.title }}</span>
        </li>
        <li class="flex flex-col items-center gap-2">
          <UiIcon :name="Services.PROSTHODONTICS.icon" size="64" />
          <span class="text-xl font-medium">{{ Services.PROSTHODONTICS.title }}</span>
        </li>
        <li class="flex flex-col items-center gap-2">
          <UiIcon :name="Services.COSMETIC_RECONSTRUCTION.icon" size="64" />
          <span class="text-xl font-medium">{{ Services.COSMETIC_RECONSTRUCTION.title }}</span>
        </li>
      </ul>
      <UiButtonLink to="/services" class="text-white bg-primary">
        See our full list of services
      </UiButtonLink>
    </UiSection>
  </div>
</template>