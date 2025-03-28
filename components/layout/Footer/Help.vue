<script setup lang="ts">
import Contact from '~/data/Contact';
</script>

<template>
  <div class="relative text-white">
    <div class="absolute -z-10 top-0 left-0 h-full w-full grid grid-cols-6 grid-rows-3 bg-[#1E5E76]">
      <div class="col-span-4"></div>
      <div class="col-span-1 bg-white/10"></div>
      <div class="col-span-1 bg-[#2C7A96]"></div>
      <div class="col-span-4 row-span-2 bg-white/10"></div>
      <div class="col-span-1 row-span-2 bg-white/20">
        <div class="h-12 bg-white/10"></div>
      </div>
      <div class="col-span-1 row-span-2 bg-white/10"></div>
    </div>
    <UiSection>
      <UiHeader>We are here to help!</UiHeader>
      <UiBody>Come in for an appointment and our dentists will help you figure out the best course of
        action - that fits your needs physically and financially.
      </UiBody>
      <UiBody>Call to book your appointment {{ Contact.PHONE_NUMBER.label }}</UiBody>
    </UiSection>
  </div>
</template>