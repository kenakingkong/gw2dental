<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask fixed z-[9998] top-0 left-0 w-full h-full bg-black/50 flex">
      <div class="modal-container w-full max-w-xl p-4 md:p-8 bg-white shadow">
        <div class="modal-header">
          <button class="modal-default-button absolute top-4 right-4" @click="$emit('close')">x</button>
          <slot name="header" />
        </div>
        <div class="modal-body">
          <slot name="body" />
        </div>
        <div class="modal-footer">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </Transition>
</template>

<style>
.modal-mask {
  transition: opacity 0.3s ease;
}

.modal-container {
  transition: all 0.3s ease;
}

.modal-body {
  margin: 20px 0;
}

/* animations */

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>

<script setup>
const props = defineProps({
  show: Boolean
})
</script>
