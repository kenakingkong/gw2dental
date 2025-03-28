<template>
  <div class="grid md:grid-cols-4 gap-4 md:gap-8 p-6 md:p-4 text-center md:text-left">
    <div class="md:col-span-2">
      <div class="space-y-4 md:space-y-8">
        <h1 class="text-4xl md:text-6xl font-semibold">Let us craft your perfect smile!</h1>
        <UiBody>Get high-quality dental treatment from dentists that will treat
          you like family.</UiBody>
        <UiBody class="font-bold">Call: (925) 803-8809</UiBody>
      </div>
    </div>
    <div class="hidden md:block md:col-span-1">
      <div class="group relative w-full h-full">
        <div class="h-full w-full border-2 rounded-md border-secondary/40"></div>
        <div class="absolute -top-3 -left-3 w-full h-full">
          <Dentist src="/george_wong.webp" alt="George Wong Headshot">George Wong, DDS</Dentist>
        </div>
      </div>
    </div>
    <div class="md:col-span-1">
      <div class="hidden md:block group relative w-full h-full">
        <div class="h-full w-full border-2 rounded-md border-secondary/40"></div>
        <div class="absolute -top-3 -left-3 w-full h-full">
          <Dentist src="/grace_wu.webp" alt="Grace Wu Headshot">Grace Wu, DDS</Dentist>
        </div>
      </div>
    </div>
    <div class="block md:hidden grid grid-cols-2 px-8">
      <div class="flex flex-col items-center gap-1">
        <img src="/george_wong.webp" alt="George Wong Headshot"
          class="object-cover object-top w-24 h-24 rounded-full" />
        <p>George Wong, DDS</p>
      </div>
      <div class="flex flex-col items-center gap-1">
        <img src="/grace_wu.webp" alt="Grace Wu Headshot" class="object-cover object-top w-24 h-24 rounded-full" />
        <p>Grace Wu, DDS</p>
      </div>
    </div>
  </div>

</template>