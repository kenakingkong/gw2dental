<template>
  <UiSection>
    <UiSectionHeader class="text-center">
      <template v-slot:header>Find your Treatment</template>
      <template v-slot:subheader>We have a wide range of treatments and services -
        from routine cleanings to tooth replacements.</template>
    </UiSectionHeader>
    <ul class="w-full max-w-2xl mx-auto flex flex-wrap justify-center gap-4">
      <li>General Dentistry</li>
      <li>Maxillofacial Prosthodontics</li>
      <li>Implant Dentistry</li>
      <li>Root Canals</li>
      <li>Orthodontics</li>
      <li>Cosmetic Rehabilitation</li>
      <li>Teeth Whitening</li>
    </ul>
    <NuxtLink to="/services" class="block w-max mx-auto py-2 px-4 bg-blue-100 rounded">Learn More About our Services
    </NuxtLink>
    <div class="space-y-2 text-center">
      <p class="">Come in for a consultation and we will help you figure out what you need.</p>
      <p class="">Call us to book your first appointment (925) 803-8809</p>
    </div>
  </UiSection>
</template>