<script setup lang="ts">
import Contact from '~/data/Contact';
import Navigation from '~/data/Navigation';
import Link from '../Header/Link.vue';
</script>

<template>
  <div class="bg-primary text-white">
    <UiContainer class="md:text-lg">
      <nav class="flex flex-col-reverse md:flex-row md:justify-between md:items-center gap-4">
        <div class="space-y-2">
          <ul class="flex flex-wrap gap-2 md:gap-4 items-center list-none">
            <li v-for="link in Navigation.FOOTER_LINKS" class="w-max">
              <Link :to="link.to" class="no-underline text-white" activeClass="text-white underline">{{ link.label
              }}</Link>
            </li>
          </ul>
          <div class="flex items-center gap-2">
            <span class="font-bold text-lg tracking-wide">Leave us a review</span>
            <a :href="Contact.SOCIALS.GOOGLE.href" class="underline">{{ Contact.SOCIALS.GOOGLE.label }}</a>
            <a :href="Contact.SOCIALS.YELP.href" class="underline">{{ Contact.SOCIALS.YELP.label }}</a>
          </div>
        </div>
        <p class="text-2xl font-medium">logo</p>
      </nav>
    </UiContainer>
  </div>
  <div class="bg-white text-primary">
    <UiContainer>
      <div class="flex flex-col md:flex-row md:justify-between gap-4 font-bold md:text-lg">
        <p><span v-for="s in Contact.ADDRESS.label" class="block w-full">{{ s }}</span></p>
        <p class="md:text-right">
          <span class="block">{{ Contact.PHONE_NUMBER.label }}</span>
          <a :href="Contact.EMAIL.href" class="block hover:text-black">{{ Contact.EMAIL.label }}</a>
        </p>
      </div>
      <p class="text-primary/60">
        Website designed and developed by <a href="https://www.henryzou.com/" class="underline hover:text-primary">Henry
          Zou</a> and <a href="https://www.makenakong.com" class="underline hover:text-primary">Makena Kong</a>
      </p>
    </UiContainer>
  </div>
</template>