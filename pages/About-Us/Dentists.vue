<template>
  <div class="space-y-4 md:space-y-8">
    <div class="grid md:grid-cols-3 gap-4 md:gap-8">
      <div class="md:col-span-1 relative w-full max-h-[400px] max-w-[300px]">
        <Dentist :src="WONG.imageUrls.standard" :alt="WONG.name">{{ WONG.longName }}
        </Dentist>
      </div>
      <div class="md:col-span-2 space-y-4">
        <UiFloatingBox class="bg-white text-black space-y-2">
          <div>
            <p class="uppercase text-secondary font-medium tracking-wide">Specialty</p>
            <p class="text-xl md:text-3xl text-primary font-medium">Prosthodontics & Reconstruction</p>
          </div>
          <p>Dr. George Wong specializes in teeth restoration and replacement. He provides advice on proper dental
            prosthetics, such as crowns and bridges. </p>
          <NuxtLink to="/services" class="block font-medium text-primary text-lg">See services</NuxtLink>
        </UiFloatingBox>
        <div class="p-4 md:p-8">
          <p class="max-w-sm font-medium md:text-lg">“We run a small, personalized dentistry where we can build long
            lasting
            relationships with our patients.”</p>
        </div>
      </div>
    </div>
    <div class="grid md:grid-cols-3 gap-4 md:gap-8">
      <div class="md:col-span-1 relative w-full max-h-[400px] max-w-[300px]">
        <Dentist :src="WU.imageUrls.standard" :alt="WU.name">{{ WU.longName }}</Dentist>
      </div>
      <div class="md:col-span-2">
        <UiFloatingBox class="bg-white text-black space-y-2">
          <div>
            <p class="uppercase text-secondary font-medium tracking-wide">Specialty</p>
            <p class="text-xl md:text-3xl text-primary font-medium">General Dentistry & Invisalign</p>
          </div>
          <p>Dr. Grace Wu specializes in Invisalign with lorem ipsum dolor sit amet consectetur. Scelerisque aliquam
            pulvinar quis ridiculus tempor.</p>
          <NuxtLink to="/services" class="block font-medium text-primary text-lg">See services</NuxtLink>
        </UiFloatingBox>
        <div class="p-4 md:p-8">
          <p class="max-w-sm font-medium md:text-lg">“Sometimes I get a patient and sometimes my husband will -
            which only means we both get to know you!”</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Dentists from '~/data/Dentists';

const { WONG, WU } = Dentists
</script>