<script setup lang="ts">
  defineProps({
    image: {
      type: String,
      default: '',
    },
  });
</script>
<template>
  <div target="_blank" class="flex h-full w-full items-center justify-center">
    <img class="max-h-full max-w-full object-cover" :src="image" />
  </div>
</template>
