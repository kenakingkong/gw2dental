<template>
  <slot />
</template>

<script lang="ts" setup>
import Meta from '~/data/Meta';

useHead({ titleTemplate: `%s - ${Meta.title}` })
</script>