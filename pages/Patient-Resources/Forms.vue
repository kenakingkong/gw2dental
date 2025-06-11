<script setup lang="ts">
import Forms from '~/data/Forms';
</script>

<template>
  <UiSection>
    <div class="space-y-2">
      <UiHeader>New Patient Forms</UiHeader>
      <UiBody>Please fill out these forms prior to your first consultation to streamline your visit.</UiBody>
    </div>
    <ul class="space-y-4">
      <li v-for="form in Forms.ALL">
        <a :href="form.href"
          class="block bg-white/10 hover:bg-white/20 transition-all p-4 md:p-6 rounded flex justify-between">
          <span class="text-lg md:text-2xl font-medium">{{ form.label }}</span>
          <UiIcon :name="form.icon" class="pt-1" size="30" />
        </a>
      </li>
    </ul>
  </UiSection>
</template>