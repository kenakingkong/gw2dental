<template>
  <div class="relative text-white">
    <UiBlockBackground />
    <UiSection>
      <UiHeader>The Dentists</UiHeader>
      <div class="md:w-2/3 flex flex-col md:flex-row gap-4 md:gap-8">
        <div class="relative w-full md:w-1/2 max-h-[400px] max-w-[300px]">
          <Dentist src="/george_wong.webp" alt="George Wong Headshot">George Wong, DDS</Dentist>
        </div>
        <div class="relative w-full md:w-1/2 max-h-[400px] max-w-[300px]">
          <Dentist src="/grace_wu.webp" alt="Grace Wu Headshot">Grace Wu, DDS</Dentist>
        </div>
      </div>
    </UiSection>
  </div>
</template>