<template>
  <div class="flex items-start gap-4 text-lg">
    <UiIcon :name="icon" class="pt-1" />
    <a v-if="!!href" class="block w-full hover:opacity-80" :href="href">
      <span v-if="Array.isArray(label)" class="block w-full">
        <span v-for="str in label" class="block">{{ str }}</span>
      </span>
      <span v-else class="block w-full">
        {{ label }}
      </span>
    </a>
    <span v-else class="block w-full">
      <span v-if="Array.isArray(label)" class="block w-full">
        <span v-for="str in label" class="block w-full">
          <span v-if="Array.isArray(str)" class="block w-full grid grid-cols-2 gap-2">
            <span v-for="s in str" class="block w-full">{{ s }}</span>
          </span>
          <span v-else class="block w-full">
            {{ str }}
          </span>
        </span>
      </span>
      <span v-else class="block w-full">
        {{ label }}
      </span>
    </span>
  </div>
</template>

<script setup lang="ts">

interface IProps {
  id: string,
  label: string | Array<string> | Array<Array<string>>,
  icon: string,
  href?: string
}

const props = defineProps<IProps>()
</script>