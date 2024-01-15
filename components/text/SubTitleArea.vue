<script setup lang="ts">
  defineProps({
    text: {
      type: String,
      default: '',
    },
  });
</script>

<template>
  <h2 class="flex w-full items-center justify-center text-xl">
    <p class="mx-1 rounded-full">{{ text }}</p>
  </h2>
</template>
