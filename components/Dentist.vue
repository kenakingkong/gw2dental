<script setup lang="ts">
import Dentists from '~/data/Dentists';

const props = defineProps({ id: String })

const dentist = ref(props.id == Dentists.WONG.id ? Dentists.WONG : Dentists.WU)
</script>

<template>
  <div class="w-full h-full min-h-[300px] rounded-md bg-blue-100">
    <img :src="dentist.imageUrls.standard"
      :srcset="`${dentist.imageUrls.standard} 800w, ${dentist.imageUrls.large} 2520w`"
      sizes="(min-width: 1536px) 2520px, 100px" :alt="dentist.name" class="h-full w-full object-cover rounded animate-fadein" />
    <div class="absolute top-[73%] right-0 w-2/3 bg-secondary/90 h-12"></div>
    <div class="absolute top-[60%] w-4/5 bg-secondary/90 text-white h-16 p-4">
      <p class="font-bold text-lg">
        {{ dentist.longName }}
      </p>
    </div>
  </div>
</template>