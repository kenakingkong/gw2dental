<template>
  <footer>
    <div>
      <Container>
        <div class="grid md:grid-cols-5 gap-4">
          <div class="border md:col-span-3">map preview</div>
          <div class="md:col-span-2 bg-secondary/80 text-primary text-lg rounded-lg">
            <Container>
              <ul class="md:p-4 space-y-2 md:space-y-6">
                <li v-for="detail in details">
                  <FooterDetail v-bind="detail" />
                </li>
              </ul>
            </Container>
          </div>
        </div>
      </Container>
    </div>
    <div class="bg-primary text-white">
      <Container>
        <nav>
          <ul class="flex flex-wrap gap-x-4 gap-y-2 md:gap-6 items-center list-none">
            <li v-for="link in links" class="w-max">
              <HeaderLink :to="link.to" class="no-underline text-white" activeClass="text-white underline">{{ link.label
                }}</HeaderLink>
            </li>
            <li class="grow text-right">logo</li>
          </ul>
        </nav>
      </Container>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from "vue"
import Contact from "~/data/Contact";
import Navigation from '~/data/Navigation';

const links = ref(Navigation.FOOTER_LINKS)
const details = ref(Contact.DETAILS)
</script>