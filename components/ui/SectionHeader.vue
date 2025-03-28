<template>
  <div class="w-full max-w-xl mx-auto space-y-2">
    <UiHeader>
      <slot name="header" />
    </UiHeader>
    <UiBody>
      <slot name="subheader" />
    </UiBody>
  </div>
</template>