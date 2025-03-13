<template>
  <div class="grid md:grid-cols-4 gap-4 md:gap-8">
    <div class="md:col-span-2">
      <div class="p-4 space-y-4 md:space-y-8">
        <h1 class="text-5xl md:text-7xl font-semibold">Let us craft your perfect smile!</h1>
        <p class="text-lg md:text-2xl max-w-md">Get high-quality dental treatment from dentists that will treat
          you like family.
        </p>
        <p class="text-lg md:text-2xl font-bold">Call: (925) 803-8809</p>
      </div>
    </div>
    <div class="md:col-span-1">
      <div class="group relative w-full h-full">
        <div class="h-full w-full border-2 rounded-md border-secondary/40"></div>
        <div
          class="absolute -top-3 -left-3 group-hover:-top-2.5 group-hover:-left-2.5 transition-translate w-full h-full">
          <Dentist>George Wong, DDS</Dentist>
        </div>
      </div>
    </div>
    <div class="md:col-span-1">
      <div class="group relative w-full h-full">
        <div class="h-full w-full border-2 rounded-md border-secondary/40"></div>
        <div
          class="absolute -top-3 -left-3 group-hover:-top-2.5 group-hover:-left-2.5 transition-translate w-full h-full">
          <Dentist>Grace Wu, DDS</Dentist>
        </div>
      </div>
    </div>
  </div>
</template>