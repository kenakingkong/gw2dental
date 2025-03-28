<script setup lang="ts">
import FirstAppointment from './FirstAppointment.vue';
import Forms from './Forms.vue';
import Insurances from './Insurances.vue';
import TransferHistory from './TransferHistory.vue';
</script>

<template>
  <div class="relative">
    <UiBlockBackground />
    <div class="py-6 md:py-12">
      <UiContainer class="text-white">
        <LayoutTitle>New Patient Resources</LayoutTitle>
        <LayoutSubtitle class="max-w-xl">Learn more about our accepted insurances and what to expect from your first
          consultation.
        </LayoutSubtitle>
      </UiContainer>
    </div>
  </div>
  <Insurances />
  <div class="bg-primary text-white">
    <Forms />
  </div>
  <div class="bg-primary/10">
    <UiSection>
      <FirstAppointment />
    </UiSection>
  </div>
  <UiSection>
    <TransferHistory />
  </UiSection>
</template>