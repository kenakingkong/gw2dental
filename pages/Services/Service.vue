<template>
  <div :id="id">
    <UiSection class="">
      <div class="w-full flex items-center gap-4 md:gap-8">
        <span v-if="!!icon">
          <UiIcon :name="icon" size="48" class="w-12 md:w-16 h-12 md:h-16 text-primary stroke-current" />
        </span>
        <h2 class="text-2xl md:text-4xl font-bold text-primary">{{ title }}</h2>
      </div>
      <div class="md:pl-24 grid md:grid-cols-3 gap-2 md:gap-8 lg:gap-16">
        <div class="md:col-span-2 space-y-4 md:space-y-8">
          <p class="text-base md:text-xl">{{ description }}</p>
          <slot />
          <div v-if="callout && bottomCallout">
            <UiFloatingBox class="bg-white flex items-center gap-4 md:gap-6">
              <span class="srink-0">
                <UiIcon name="info-circle" size="20" />
              </span>
              <p class="">{{ callout.body }}</p>
            </UiFloatingBox>
          </div>
        </div>
        <div v-if="callout && sideCallout" class="w-full h-full flex items-start">
          <UiFloatingBox class="space-y-4">
            <DentistAvatar :src="callout.image" />
            <p class="">{{ callout.body }}</p>
          </UiFloatingBox>
        </div>
      </div>
    </UiSection>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  id: string | undefined,
  title: string | undefined,
  description: string | undefined
  icon: string | undefined
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