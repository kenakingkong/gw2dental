<template>
  <Transition name="panel">
    <div v-if="show" class="panel-mask fixed top-0 left-0 w-full h-full bg-black/50 flex z-[9998]">
      <div class="panel-container w-full bg-white">
        <button class="absolute top-2 right-4" title="close" @click="$emit('close')">x</button>
        <slot name="body" />
      </div>
    </div>
  </Transition>
</template>

<style>
.panel-mask {
  transition: opacity 0.3s ease;
}

.panel-container {
  transition: all 0.3s ease;
}

/* animations */

.panel-enter-from,
.panel-leave-to {
  opacity: 0;
}

.panel-enter-from .panel-container,
.panel-leave-to .panel-container {
  -webkit-transform: translateX(100%);
  transform: translateX(100%);
}
</style>

<script setup>
const props = defineProps({
  show: Boolean
})
</script>