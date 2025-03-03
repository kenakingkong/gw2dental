<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<template>
  <header class="w-full p-4 md:p-6">
    <nav class="w-full flex gap-6 justify-between items-center">
      <HeaderLink to="/" class="no-underline">
        <div class="flex gap-2 items-center">
          <p>logo</p>
          <p>GW2 Dental</p>
        </div>
      </HeaderLink>

      <!-- Tablet/Desktop Items -->
      <ul class="hidden md:flex flex gap-6 items-center list-none">
        <li class="w-max">
          <HeaderLink to="/about" class="no-underline" activeClass="text-blue-600">About Us</HeaderLink>
        </li>
        <li class="w-max">
          <HeaderLink to="/patient-info" class="no-underline" activeClass="text-blue-600">New Patient Info</HeaderLink>
        </li>
        <li class="w-max">
          <HeaderLink to="/services" class="no-underline" activeClass="text-blue-600">Our Services</HeaderLink>
        </li>
        <li class="w-max">
          <HeaderLink to="/" class="no-underline" activeClass="text-blue-600">Pay your bill</HeaderLink>
        </li>
        <li class="w-max">
          <a href="tel:9258038999" class="no-underline" activeClass="text-blue-600">(925) 803-8999</a>
        </li>
      </ul>

      <!-- Mobile Button -->
      <div class="block md:hidden">
        <button @click="isOpen = true">menu</button>
      </div>

      <!-- Mobile Items via Slide in Panel -->
      <Teleport to="body">
        <Panel :show="isOpen" @close="isOpen = false">
          <template #body>
            <div class="h-full p-6 flex flex-col">
              <HeaderLink to="/" class="no-underline">
                <div class="flex gap-2 items-center">
                  <p>logo</p>
                  <p>GW2 Dental</p>
                </div>
              </HeaderLink>
              <ul class="list-none space-y-4 grow flex flex-col justify-center text-lg">
                <li class="w-max">
                  <HeaderLink to="/" class="no-underline" activeClass="text-blue-600">Home</HeaderLink>
                </li>
                <li class="w-max">
                  <HeaderLink to="/about" class="no-underline" activeClass="text-blue-600">About Us</HeaderLink>
                </li>
                <li class="w-max">
                  <HeaderLink to="/patient-info" class="no-underline" activeClass="text-blue-600">New Patient Info
                  </HeaderLink>
                </li>
                <li class="w-max">
                  <HeaderLink to="/services" class="no-underline" activeClass="text-blue-600">Our Services</HeaderLink>
                </li>
                <li class="w-max">
                  <HeaderLink to="/" class="no-underline" activeClass="text-blue-600">Pay your bill</HeaderLink>
                </li>
                <li class="w-max">
                  <a href="tel:9258038999" class="no-underline">(925) 803-8999</a>
                </li>
              </ul>
            </div>
          </template>
        </Panel>
      </Teleport>
    </nav>
  </header>
</template>