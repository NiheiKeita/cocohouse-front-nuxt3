<script setup lang="ts">
  defineProps({
    text: {
      type: String,
      default: '',
    },
    route: {
      type: String,
      default: '',
    },
  });
</script>

<template>
  <h2 class="flex w-full items-center justify-center text-xl lg:text-3xl">
    <nuxt-link
      :to="route"
      target="_blank"
      class="flex items-center justify-center"
    >
      <p class="mx-1 rounded-lg border-b border-ThemaColor">{{ text }}</p>
    </nuxt-link>
  </h2>
</template>
