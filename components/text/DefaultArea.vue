<script setup lang="ts">
  defineProps({
    text: {
      type: String,
      default: '',
    },
  });
</script>

<template>
  <h2
    class="flex w-full items-center justify-center text-xl font-bold lg:text-3xl"
  >
    <p class="mx-1">{{ text }}</p>
  </h2>
</template>
