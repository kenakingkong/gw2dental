<template>
  <footer>
    <div class="bg-primary text-white">
      <UiSection>
        <UiHeader>We are here to help!</UiHeader>
        <UiSubheader>Come in for an appointment and our dentists will help you figure out the best course of
          action - that fits your needs physically and financially.
        </UiSubheader>
        <UiSubheader>Call to book your appointment {{ contact.PHONE_NUMBER.label }}</UiSubheader>
      </UiSection>
    </div>
    <div>
      <UiContainer>
        <div class="grid md:grid-cols-5 gap-4">
          <div class="border md:col-span-3">map preview</div>
          <div class="md:col-span-2 bg-secondary/20 text-primary text-lg rounded-lg">
            <UiContainer>
              <ul class="md:p-4 space-y-2 md:space-y-6">
                <li v-for="detail in contact.DETAILS">
                  <Detail v-bind="detail" />
                </li>
              </ul>
            </UiContainer>
          </div>
        </div>
      </UiContainer>
    </div>
    <div class="bg-primary text-white">
      <UiContainer class="md:text-lg">
        <nav class="flex flex-col-reverse md:flex-row md:justify-between md:items-center gap-4">
          <div class="space-y-2">
            <ul class="flex flex-wrap gap-2 md:gap-4 items-center list-none">
              <li v-for="link in links" class="w-max">
                <Link :to="link.to" class="no-underline text-white" activeClass="text-white underline">{{ link.label
                }}</Link>
              </li>
            </ul>
            <div>
              <span class="font-bold">Leave us a review</span><span>google</span> <span>yelp</span>
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
            <span class="block">{{ Contact.EMAIL.label }}</span>
          </p>
        </div>
        <p class="text-primary/60">
          Website designed and developed by <a href="https://www.henryzou.com/"
            class="underline hover:text-primary">Henry
            Zou</a> and <a href="https://www.makenakong.com" class="underline hover:text-primary">Makena Kong</a>
        </p>
      </UiContainer>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { UiSubheader } from "#components";
import Link from "../Header/Link.vue";
import Detail from "../Footer/Detail.vue";
import { ref } from "vue"
import Contact from "~/data/Contact";
import Navigation from '~/data/Navigation';

const links = ref(Navigation.FOOTER_LINKS)
const contact = ref(Contact)
</script>