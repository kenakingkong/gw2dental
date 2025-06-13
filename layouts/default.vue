<template>
  <div class="w-full h-full min-h-screen flex flex-col">
    <LayoutHeader />
    <main class="grow">
      <slot />
    </main>
    <LayoutFooter />
  </div>
</template>

<script lang="ts" setup>
import Meta from '~/data/Meta';

useHead({ titleTemplate: `%s - ${Meta.title}` })
</script>