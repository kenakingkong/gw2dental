<template>
  <header>
    <UiContainer>
      <nav class="w-full flex gap-6 justify-between items-center">
        <Link to="/" class="no-underline">
          <div class="flex gap-2 items-center">
            <p>logo</p>
            <p>GW2 Dental</p>
          </div>
        </Link>

        <!-- Tablet/Desktop Items -->
        <ul class="hidden md:flex gap-6 items-center list-none sticky top-0">
          <li v-for="link in links" class="w-max">
            <Link :to="link.to" class="no-underline" activeClass="text-blue-600">{{ link.label }}</Link>
          </li>
          <li class="w-max">
            <a :href="phoneNumber.href" class="no-underline font-bold">{{ phoneNumber.label }}</a>
          </li>
        </ul>

        <!-- Mobile Button -->
        <div class="block md:hidden">
          <button @click="isOpen = true">menu</button>
        </div>

        <!-- Mobile Items via Slide in Panel -->
        <Teleport to="body">
          <UiPanel :show="isOpen" @close="isOpen = false">
            <template #body>
              <div class="h-full p-6 flex flex-col">
                <Link to="/" class="no-underline">
                  <div class="flex gap-2 items-center">
                    <p>logo</p>
                    <p>GW2 Dental</p>
                  </div>
                </Link>
                <ul class="list-none space-y-4 grow flex flex-col justify-center">
                  <li v-for="link in mobileLinks" class="w-max">
                    <Link :to="link.to" class="no-underline text-xl" activeClass="text-blue-600">{{ link.label }}
                    </Link>
                  </li>
                  <li class="w-max">
                    <a :href="phoneNumber.href" class="no-underline text-xl font-bold">{{ phoneNumber.label }}</a>
                  </li>
                </ul>
              </div>
            </template>
          </UiPanel>
        </Teleport>
      </nav>
    </UiContainer>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Link from "./Link.vue"
import Contact from '~/data/Contact';
import Navigation from '~/data/Navigation';

const isOpen = ref(false)

const links = ref(Navigation.HEADER_LINKS)
const mobileLinks = ref(Navigation.MOBILE_LINKS)
const phoneNumber = ref(Contact.PHONE_NUMBER)
</script>
