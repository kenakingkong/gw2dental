<template>
  <UiSection>
    <UiHeader>In-Network Providers</UiHeader>
    <table class="w-full table-auto border-separate border-spacing-y-2">
      <thead class="text-sm md:text-lg text-primary">
        <tr>
          <th class="p-2 md:p-4 text-left">
            <span>Insurance</span>
          </th>
          <th class="p-2 md:p-4">
            <div class="flex items-start justify-center gap-4">
              <DentistAvatar :src="Dentists.WONG.imageUrls.thumbnail" :alt="Dentists.WONG.name" />
              <span>{{ Dentists.WONG.shortName }}</span>
            </div>

          </th>
          <th class="p-2 md:p-4">
            <div class="flex items-start justify-center gap-4">
              <DentistAvatar :src="Dentists.WU.imageUrls.thumbnail" :alt="Dentists.WU.name" />
              <span>{{ Dentists.WU.shortName }}</span>
            </div>

          </th>
        </tr>
      </thead>
      <tbody class="text-lg md:text-2xl font-medium text-primary">
        <tr class="bg-blue-50">
          <td class="p-4 md:py-8 rounded-l">Delta Dental Premier</td>
          <td class="p-4 md:py-8">
            <div class="flex items-center justify-center">
              <span class="sr-only">accepted</span>
              <UiIcon name="check-circle" size="24" />
            </div>
          </td>
          <td class="p-4 md:py-8 rounded-r">
            <div class="flex items-center justify-center">
              <span class="sr-only">accepted</span>
              <UiIcon name="check-circle" size="24" />
            </div>
          </td>
        </tr>
        <tr class="bg-blue-50">
          <td class="p-4 md:py-8 rounded-l">Aetna PPO</td>
          <td class="p-4 md:py-8 text-center">
            <span class="sr-only">not accepted</span>
          </td>
          <td class="p-4 md:py-8 text-center rounded-r">
            <div class="flex items-center justify-center">
              <span class="sr-only">accepted</span>
              <UiIcon name="check-circle" size="24" />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </UiSection>
</template>

<script setup lang="ts">
import Dentists from '~/data/Dentists';
</script>