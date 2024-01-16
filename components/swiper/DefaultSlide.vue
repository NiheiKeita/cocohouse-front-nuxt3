<script setup lang="ts">
  const props = defineProps({
    image: {
      type: String,
      default: '',
    },
  });

  const emits = defineEmits<{
    (e: 'click-image', text: string): void;
  }>();
  const clickImage = () => {
    console.log('click'); // eslint-disable-line no-console
    emits('click-image', props.image);
  };
</script>
<template>
  <div
    target="_blank"
    class="flex h-full w-full cursor-pointer items-center justify-center"
    @click="clickImage"
  >
    <img class="max-h-full max-w-full object-cover" :src="image" />
  </div>
</template>
