<script setup lang="ts">
import Contact from '~/data/Contact';
</script>

<template>
  <UiContainer>
    <div class="grid md:grid-cols-5 gap-4">
      <div class="border md:col-span-3">map preview</div>
      <div class="md:col-span-2 bg-secondary/20 text-primary text-lg rounded-lg">
        <UiContainer>
          <ul class="md:p-4 space-y-2 md:space-y-6">
            <li v-for="detail in Contact.DETAILS">
              <LayoutFooterDetail v-bind="detail" />
            </li>
          </ul>
        </UiContainer>
      </div>
    </div>
    <div class="hidden">
      <span class="material-symbols-rounded">phone_enabled</span>
      <span class="material-symbols-rounded">mail</span>
      <span class="material-symbols-rounded">location_on</span>
      <span class="material-symbols-rounded">nest_clock_farsight_analog</span>
    </div>
  </UiContainer>
</template>