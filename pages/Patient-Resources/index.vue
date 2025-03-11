<script setup lang="ts">
import FirstAppointment from './FirstAppointment.vue';
import Forms from './Forms.vue';
import Insurances from './Insurances.vue';
import TransferHistory from './TransferHistory.vue';
</script>

<template>
  <UiContainer>
    <LayoutTitle>New Patient Resources</LayoutTitle>
    <LayoutSubtitle class="max-w-xl">We have a list of accepted insurances, new patient forms, transferring dentists,
      and more!
    </LayoutSubtitle>
  </UiContainer>
  <Insurances />
  <div class="bg-primary text-white">
    <Forms />
  </div>
  <UiSection class="lg:space-y-12">
    <FirstAppointment />
    <TransferHistory />
  </UiSection>
</template>