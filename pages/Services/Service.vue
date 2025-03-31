<template>
  <div :id="id" class="space-y-2">
    <div class="w-full flex items-center gap-4 md:gap-8">
      <div class="w-12 md:w-16 h-12 md:h-16 text-center border">img</div>
      <h2 class="text-2xl md:text-4xl font-bold text-primary">{{ title }}</h2>
    </div>
    <div class="md:pl-24 space-y-2 grid md:grid-cols-3 gap-2 md:gap-8 lg:gap-16">
      <div class="md:col-span-2 space-y-4">
        <p class="text-base md:text-xl">{{ description }}</p>
        <slot />
        <div v-if="callout && bottomCallout">
          <UiFloatingBox class="bg-secondary/10 flex items-center gap-4 md:gap-6">
            <span class="material-symbols-rounded">info</span>
            <p class="">{{ callout.body }}</p>
          </UiFloatingBox>
        </div>
      </div>
      <div v-if="callout && sideCallout" class="w-full h-full flex items-start">
        <UiFloatingBox class="space-y-4">
          <div class="h-8 w-8 rounded-full bg-gray-100"></div>
          <!-- <DentistAvatar :src="" :alt="" /> -->
          <p class="">{{ callout.body }}</p>
        </UiFloatingBox>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  id: string,
  title: string,
  description: string
  image: string
  callout: {
    body: string
    image: string
    align: string
  } | null
}

const props = defineProps<IProps>()

const sideCallout = props.callout?.align == "right"
const bottomCallout = props.callout?.align == "bottom"
</script>