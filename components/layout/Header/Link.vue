<script setup lang="ts">
import type { NuxtLinkProps } from '#app';
const props = defineProps<NuxtLinkProps>()
</script>

<template>
  <NuxtLink v-bind="props" class="no-underline hover:text-secondary text-lg" activeClass="underline text-primary font-medium">
    <slot />
  </NuxtLink>
</template>
