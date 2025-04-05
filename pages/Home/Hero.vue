<template>
  <div class="min-h-[350px] grid md:grid-cols-4 gap-4 md:gap-8 p-6 md:p-4 text-center md:text-left">
    <div class="md:col-span-2">
      <div class="h-full flex flex-col justify-center gap-4 md:gap-8">
        <h1 class="text-4xl md:text-6xl font-semibold">Let us craft your perfect smile!</h1>
        <UiBody>Get high-quality dental treatment from dentists that will treat
          you like family.</UiBody>
        <!-- <div class="space-y-1 text-xl font-medium">
          <p class="text-primary flex items-center gap-4"><span
              class="material-symbols-rounded">phone_enabled</span>(925) 803-8809</p>
          <p class="text-primary flex items-center gap-4"><span
              class="material-symbols-rounded">mail</span>smile@gw2dental.com</p>
        </div> -->
      </div>
    </div>
    <div class="hidden md:block md:col-span-1">
      <div class="group relative w-full h-full">
        <div class="h-full w-full border-2 rounded-md border-secondary/40"></div>
        <div class="absolute -top-3 -left-3 w-full h-full">
          <Dentist :src="WONG.imageUrls.standard" :alt="WONG.name">{{ WONG.longName }}
          </Dentist>
        </div>
      </div>
    </div>
    <div class="md:col-span-1">
      <div class="hidden md:block group relative w-full h-full">
        <div class="h-full w-full border-2 rounded-md border-secondary/40"></div>
        <div class="absolute -top-3 -left-3 w-full h-full">
          <Dentist :src="WU.imageUrls.standard" :alt="WU.name">{{ WU.longName }}</Dentist>
        </div>
      </div>
    </div>
    <div class="block md:hidden grid grid-cols-2 px-8">
      <div class="flex flex-col items-center gap-2">
        <img :src="WONG.imageUrls.standard" :alt="WONG.name" class="object-cover object-top w-24 h-24 rounded-lg" />
        <p class="text-primary font-medium">{{ WONG.longName }}</p>
      </div>
      <div class="flex flex-col items-center gap-2">
        <img :src="WU.imageUrls.standard" :alt="WU.name" class=" object-cover object-top w-24 h-24
          rounded-lg" />
        <p class="text-primary font-medium">{{ WU.longName }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Dentists from '~/data/Dentists';

const { WONG, WU } = Dentists
</script>