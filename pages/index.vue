<template>
  <div class="w-full h-full min-h-screen flex flex-col">
    <div class="bg-blue-50">
      <Header />

      <div class="w-full max-w-6xl mx-auto md:mt-16 md:mb-8">
        <div class="grid md:grid-cols-4 gap-4 md:gap-8">
          <div class="md:col-span-2">
            <div class="rounded-lg bg-white/50">
              <div class="p-4 md:p-16 space-y-4 md:space-y-8">
                <h1 class="text-3xl md:text-5xl font-semibold">Let us craft your perfect smile!</h1>
                <p class="md:text-xl">Get high-quality dental treatment from dentists that will treat you like family.
                </p>
                <p class="md:text-xl">Call: (925) 803-8999</p>
              </div>
            </div>
          </div>
          <div class="md:col-span-1">
            <div class="w-full h-full rounded-lg bg-blue-100">
              <p>img</p>
              <p>George Wong, DDS</p>
            </div>
          </div>
          <div class="md:col-span-1">
            <div class="w-full h-full rounded-lg bg-blue-100">
              <p>img</p>
              <p>Grace Wu, DDS</p>
            </div>
          </div>
        </div>
      </div>


      <div class="w-full max-w-6xl mx-auto rounded-lg bg-white p-4 md:p-16 text-center space-y-4 md:space-y-8 shadow">
        <div class="w-full space-y-2">
          <h2 class="text-xl md:text-3xl font-semibold">Find your Treatment</h2>
          <p class="w-full max-w-md mx-auto md:text-lg font-light">We have a wide range of treatments and services -
            from routine cleanings to tooth replacements.
          </p>
        </div>
        <ul class="w-full max-w-2xl mx-auto flex flex-wrap justify-center gap-4">
          <li>General Dentistry</li>
          <li>Maxillofacial Prosthodontics</li>
          <li>Implant Dentistry</li>
          <li>Root Canals</li>
          <li>Orthodontics</li>
          <li>Cosmetic Rehabilitation</li>
          <li>Teeth Whitening</li>
        </ul>
        <NuxtLink to="/services" class="block w-max mx-auto py-2 px-4 bg-blue-100 rounded">Learn More About our Services
        </NuxtLink>
        <div class="space-y-2">
          <p class="text-sm">Come in for a consultation and we will help you figure out what you need.</p>
          <p class="text-sm">Call us to book your first appointment (925) 803-89999</p>
        </div>
      </div>
    </div>
    <div>
      <Container class="space-y-4">
        <h2 class="text-xl md:text-3xl font-semibold">Read the reviews</h2>
        <ul>
          <li>review #1</li>
          <li>review #2</li>
          <li>review #3</li>
        </ul>
      </Container>
    </div>
    <div>
      <Container class="space-y-4">
        <h2 class="text-xl md:text-3xl font-semibold">FAQs</h2>
        <ul>
          <li>faq #1</li>
          <li>faq #2</li>
          <li>faq #3</li>
        </ul>
      </Container>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "custom"
})
</script>
