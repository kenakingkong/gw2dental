<template>
  <div class="w-full h-full min-h-screen flex flex-col">
    <LayoutHeader />
    <main class="grow">
      <slot />
    </main>
    <LayoutFooter />
  </div>
</template>

<style lang="css">
@import 'material-symbols/rounded';

* {
  box-sizing: border-box;
  margin: 0;
  font-family: 'Afacad';
}
</style>