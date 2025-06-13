<template>
  <UiSection class="lg:space-y-16">
    <UiQuote class="text-center">
      We are a contemporary family dentistry run by a husband-wife duo and a team of amazing
      professionals in San Ramon.
    </UiQuote>
    <p class="text-lg md:text-2xl max-w-lg mx-auto text-center">
      We’ve been proudly serving patients in the East Bay for the past 20 years.</p>
    <div class="space-y-4 md:space-y-8">
      <div class="grid md:grid-cols-3 gap-4 md:gap-8">
        <div class="md:col-span-1 relative w-full max-h-[400px] max-w-[300px]">
          <Dentist :id="WONG.id"/>
        </div>
        <div class="md:col-span-2 space-y-4">
          <UiFloatingBox class="bg-white text-black space-y-2">
            <div>
              <p class="uppercase text-secondary font-medium tracking-wide">Specialty</p>
              <p class="text-xl md:text-3xl text-primary font-medium">{{ WONG.specialty.title }}</p>
            </div>
            <p>{{ WONG.specialty.description }}</p>
            <NuxtLink to="/services" class="block font-medium text-primary text-lg">See services →</NuxtLink>
          </UiFloatingBox>
          <div class="p-4 md:p-8">
            <p class="max-w-sm font-medium md:text-lg">“{{ WONG.quote }}”</p>
          </div>
        </div>
      </div>
      <div class="grid md:grid-cols-3 gap-4 md:gap-8">
        <div class="md:col-span-1 relative w-full max-h-[400px] max-w-[300px]">
          <Dentist :id="WU.id"/>
        </div>
        <div class="md:col-span-2 space-y-4">
          <UiFloatingBox class="bg-white text-black space-y-2">
            <div>
              <p class="uppercase text-secondary font-medium tracking-wide">Specialty</p>
              <p class="text-xl md:text-3xl text-primary font-medium">{{ WU.specialty.title }}</p>
            </div>
            <p>{{ WU.specialty.description }}</p>
            <NuxtLink to="/services" class="block font-medium text-primary text-lg">See services →</NuxtLink>
          </UiFloatingBox>
          <div class="p-4 md:p-8">
            <p class="max-w-sm font-medium md:text-lg">“{{ WU.quote }}”</p>
          </div>
        </div>
      </div>
    </div>
  </UiSection>
</template>

<script setup lang="ts">
import Dentists from '~/data/Dentists';

const { WONG, WU } = Dentists
</script>