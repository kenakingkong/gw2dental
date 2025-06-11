<template>
  <component :is="AsyncIcon" :height="props.size" :width="props.size" role="img" />
</template>

<script setup>
const props = defineProps({
  name: { type: String, required: true },
  size: { type: [Number, String], default: 24 },
})

const AsyncIcon = defineAsyncComponent(() =>
  import(`~/assets/icons/${props.name}.svg`)
)
</script>
