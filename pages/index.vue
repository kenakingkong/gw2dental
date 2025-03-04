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
                <p class="md:text-xl font-light">Get high-quality dental treatment from dentists that will treat you
                  like family.
                </p>
                <p class="md:text-xl">Call: (925) 803-8809</p>
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
        <div class="w-full space-y-2 text-center">
          <h2 class="text-2xl md:text-4xl font-semibold">Find your Treatment</h2>
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
          <p class="text-sm">Call us to book your first appointment (925) 803-8809</p>
        </div>
      </div>
    </div>

    <div>
      <Container class="space-y-4">
        <div class="w-full space-y-2 text-center">
          <h2 class="text-2xl md:text-4xl font-semibold">Read the reviews</h2>
          <p class="w-full max-w-md mx-auto md:text-lg font-light">Most of our patients are referred by friends, family,
            neighbors, etc - here is what some of them have to say.
          </p>
        </div>
        <ul>
          <li>
            <p>Dr. Wong has exceeded my expectations in every way. ... It is so hard to find a doctor who genuinely
              cares
              about their patients and Dr. Wong is the most thoughtful and empathetic person that I have worked with. I
              always look forward to coming in for appointments because everyone is so kind and understanding! I
              recommend
              him to everyone I know.</p>
            <p>Jeff M.</p>
          </li>
          <li>
            <p>I've entrusted my and my sons' dental care to Dr. Grace Wu for more than 15 years now. My sons are now
              out of college, and I have moved out of Danville to the Bay side of the hills, yet I still come back to
              San Ramon for my cleanings and to catch up with my favorite dentists and their wonderful and efficient
              staff!</p>
            <p>V.T.</p>
          </li>
          <li>
            <p>Dr. Wong is the best human being I have met and he really really puts his heart and soul in his work.
              People usually run from a Dentist but he makes you care about yourself and your teeth. thank god I found
              him. Especially the ladies who work for him are very nice and pleasant.
            </p>
            <p>Kris B.</p>
          </li>
          <li>
            <p>Dr. Wong has exceeded my expectations in every way. I have been dealing with an unknown chronic illness
              for the past 4 years and he has been the only doctor who has been by my side through it all. I have gone
              through many doctors who have been stumped by my case and given up, but he is constantly checking up on me
              and answering my questions. It is so hard to find a doctor who genuinely cares about their patients and
              Dr. Wong is the most thoughtful and empathetic person that I have worked with. I always look forward to
              coming in for appointments because everyone is so kind and understanding! I recommend him to everyone I
              know.</p>
            <p>Maddie C.</p>
          </li>
        </ul>
      </Container>
    </div>
    <div>
      <Container class="space-y-4">
        <div class="w-full space-y-2 text-center">
          <h2 class="text-2xl md:text-4xl font-semibold">FAQs</h2>
          <p class="w-full max-w-md mx-auto md:text-lg font-light">Answers to our most frequently asked questions
          </p>
        </div>
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
