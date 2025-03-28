<template>
  <UiSection>
    <UiSectionHeader class="text-center">
      <template v-slot:header>Read the reviews</template>
      <template v-slot:subheader>Most of our patients are referred by friends, family,
        neighbors, etc - here is what some of them have to say.</template>
    </UiSectionHeader>
    <ul class="grid md:grid-cols-3 gap-4 md:gap-6">
      <li v-for="testimonial in testimonials"
        class="rounded-lg bg-primary/10 text-primary p-4 md:p-6 flex flex-col justify-between gap-2">
        <p>{{ testimonial.quote }}</p>
        <p>{{ testimonial.quoted }}</p>
      </li>
    </ul>
  </UiSection>
</template>

<script setup lang="ts">
import { ref } from "vue"

const testimonials = ref([
  {
    quote: "Dr. Wong has exceeded my expectations in every way. It is so hard to find a doctor who genuinely cares about their patients and Dr. Wong is the most thoughtful and empathetic person that I have worked with. I recommend him to everyone I know.",
    quoted: "Jeff M."
  },
  {
    quote: "I've entrusted my and my sons' dental care to Dr. Grace Wu for more than 15 years now. My sons are now out of college, and I have moved out of Danville to the Bay side of the hills, yet I still come back to San Ramon for my cleanings and to catch up with my favorite dentists and their wonderful and efficient staff!",
    quoted: "V.T."
  },
  {
    quote: "Dr. Wong is the best human being I have met and he really really puts his heart and soul in his work. People usually run from a Dentist but he makes you care about yourself and your teeth. thank god I found him. Especially the ladies who work for him are very nice and pleasant.",
    quoted: "Kris B."
  },
])

</script>