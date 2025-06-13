<script setup lang="ts">
import Contact from '~/data/Contact';
import Navigation from '~/data/Navigation';
import Link from '../Header/Link.vue';
</script>

<template>
  <div class="bg-primary text-white  border-t border-white/10">
    <UiContainer class="md:text-lg">
      <nav class="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
        <ul class="flex flex-wrap gap-2 lg:gap-4 items-center list-none">
          <li v-for="link in Navigation.FOOTER_LINKS" class="w-max">
            <Link :to="link.to" class="no-underline text-white hover:opacity-80" activeClass="text-white underline">{{ link.label
            }}</Link>
          </li>
        </ul>
        <div class="flex items-center gap-2">
          <span class="font-medium text-lg tracking-wide">Leave us a review!</span>
          <a :href="Contact.SOCIALS.GOOGLE.href" class="underline hover:opacity-80">{{ Contact.SOCIALS.GOOGLE.label }}</a>
          <a :href="Contact.SOCIALS.YELP.href" class="underline hover:opacity-80">{{ Contact.SOCIALS.YELP.label }}</a>
        </div>
      </nav>
    </UiContainer>
  </div>
  <div class="bg-primary text-white">
    <UiContainer>
      <div class="flex flex-row justify-between flex-wrap gap-2">
        <p class="text-white w-max">
          Copyright © George Wong, DDS & Grace Wu, DDS 2025
        </p>
        <p class="text-white/90 w-max">
          Website designed and developed by <a href="https://www.henryzou.com/"
            class="underline hover:opacity-80">Henry
            Zou</a> and <a href="https://www.makenakong.com" class="underline hover:opacity-80">Makena Kong</a>
        </p>
      </div>
    </UiContainer>
  </div>
</template>