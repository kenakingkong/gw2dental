<template>
  <div class="w-full max-w-5xl mx-auto my-2 md:my-12 lg:mt-16">
    <Hero />
  </div>
  <div class="bg-secondary/10">
    <UiContainer>
      <div class="grid md:grid-cols-3 gap-4">
        <div class="space-y-4">
          <LayoutFooterDetail v-bind="Contact.PHONE_NUMBER" />
          <LayoutFooterDetail v-bind="Contact.EMAIL" />
        </div>
        <LayoutFooterDetail v-bind="Contact.ADDRESS" />
        <LayoutFooterDetail v-bind="Contact.HOURS" />
      </div>
    </UiContainer>
  </div>
  <div class="bg-primary text-white">
    <UiSection class="text-center">
      <div class="w-max mx-auto">
        <ToothSvg class="fill-white h-6 w-6" />
      </div>
      <UiQuote>Our mission is to provide you with high-quality dental treatment.</UiQuote>
    </UiSection>
  </div>
  <Treatments />
  <Reviews />
</template>

<script setup lang="ts">
import Contact from '~/data/Contact';
import Hero from './Hero.vue';
import Reviews from './Reviews.vue';
import Treatments from './Treatments.vue';

useHead({ title: "GW2 Dental" })
definePageMeta({ layout: "default" })
</script>
