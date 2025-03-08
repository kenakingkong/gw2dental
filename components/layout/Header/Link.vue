<script setup lang="ts">
import type { NuxtLinkProps } from '#app';
const props = defineProps<NuxtLinkProps>()
</script>

<template>
  <NuxtLink v-bind="props" class="no-underline hover:text-blue-500" activeClass="underline text-blue-600">
    <slot />
  </NuxtLink>
</template>
