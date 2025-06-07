<template>
  <slot />
</template>

<script lang="ts" setup>
import Meta from '~/data/Meta';

useHead({
  titleTemplate: `%s - ${Meta.title}`,
  meta: [
    { name: 'description', content: Meta.description },
    { name: 'keywords', content: Meta.keywords }
  ]
})
</script>

<style lang="css">
@import 'material-symbols/rounded';

* {
  box-sizing: border-box;
  margin: 0;
  font-family: 'Afacad';
}
</style>