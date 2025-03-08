<template>
  <footer>
    <div class="bg-blue-800 text-white">
      <UiContainer class="space-y-4">
        <UiHeader>We are here to help!</UiHeader>
        <UiSubheader>Come in for an appointment and our dentists will help you figure out the best course of
          action - that fits your needs physically and financially.
        </UiSubheader>
        <UiSubheader>Call to book your appointment {{ contact.PHONE_NUMBER.label }}</UiSubheader>
      </UiContainer>
    </div>
    <div>
      <UiContainer>
        <div class="grid md:grid-cols-5 gap-4">
          <div class="border md:col-span-3">map preview</div>
          <div class="md:col-span-2 bg-secondary/80 text-primary text-lg rounded-lg">
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
      <UiContainer>
        <nav>
          <ul class="flex flex-wrap gap-x-4 gap-y-2 md:gap-6 items-center list-none">
            <li v-for="link in links" class="w-max">
              <Link :to="link.to" class="no-underline text-white" activeClass="text-white underline">{{ link.label
              }}</Link>
            </li>
            <li class="grow text-right">logo</li>
          </ul>
        </nav>
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