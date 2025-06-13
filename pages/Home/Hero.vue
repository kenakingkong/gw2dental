<template>
  <div class="min-h-[350px] grid lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-8 p-6 lg:p-4 text-center lg:text-left">
    <div class="lg:col-span-2">
      <div class="h-full flex flex-col justify-center gap-4 lg:gap-8">
        <h1 class="text-4xl lg:text-6xl font-semibold">Let us craft your perfect&nbsp;smile!</h1>
        <UiBody>Get high-quality dental treatment from dentists that will treat
          you like&nbsp;family.</UiBody>
      </div>
    </div>
    <div class="hidden lg:block lg:col-span-1">
      <div class="group relative w-full h-full">
        <div class="h-full w-full border-2 rounded-md border-secondary/40"></div>
        <div class="absolute -top-3 -left-3 w-full h-full">
          <Dentist :id="WONG.id" />
        </div>
      </div>
    </div>
    <div class="lg:col-span-1">
      <div class="hidden lg:block group relative w-full h-full">
        <div class="h-full w-full border-2 rounded-md border-secondary/40"></div>
        <div class="absolute -top-3 -left-3 w-full h-full">
          <Dentist :id="WU.id" />
        </div>
      </div>
    </div>
    <div class="block lg:hidden max-w-sm md:max-w-md mx-auto grid grid-cols-2 gap-2 sm:gap-8 px-4">
      <div class="flex flex-col items-center gap-2">
        <img :src="WONG.imageUrls.small" :srcset="`${WONG.imageUrls.small} 400w, ${WONG.imageUrls.standard} 800w`"
          sizes="(min-width: 768px) 448px, (min-width: 640px) 384px, 120px" :alt="WONG.name"
          class="object-cover object-top w-28 h-36 sm:w-40 sm:h-52 md:w-64 md:h-72 rounded-lg" />
        <p class="text-primary font-medium">{{ WONG.longName }}</p>
      </div>
      <div class="flex flex-col items-center gap-2">
        <img :src="WU.imageUrls.small" :srcset="`${WU.imageUrls.small} 400w, ${WU.imageUrls.standard} 800w`"
          sizes="(min-width: 768px) 448px, (min-width: 640px) 384px, 120px" :alt="WU.name" class="object-cover object-top w-28 h-36 sm:w-40 sm:h-52 md:w-64 md:h-72
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