<template>
  <div class="w-full h-full min-h-screen flex flex-col">
    <Header />
    <main class="grow">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<style lang="css">
* {
  box-sizing: border-box;
  margin: 0;
  font-family: 'Afacad';
}
</style>