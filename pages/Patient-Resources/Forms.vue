<script setup lang="ts">
const forms = ref([
  { label: "Request for Record Release", href: "", icon: "" },
  { label: "Financial Policy", href: "", icon: "" },
  { label: "Office Policy", href: "", icon: "" },
  { label: "HIPAA and Fillings Policy", href: "", icon: "" },
  { label: "Doctor Referral Form", href: "", icon: "" }
])
</script>

<template>
  <UiSection>
    <UiHeader>New Patient Forms</UiHeader>
    <ul class="space-y-4">
      <li v-for="form in forms">
        <a :href="form.href"
          class="block bg-white/10 hover:bg-white/20 transition-all p-4 md:p-6 rounded flex justify-between">
          <span class="text-2xl font-medium">{{ form.label }}</span>
          <span>i</span>
        </a>
      </li>
    </ul>
  </UiSection>
</template>