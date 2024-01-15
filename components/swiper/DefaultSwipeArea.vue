<script setup lang="ts">
  import { Autoplay, Navigation, Pagination } from 'swiper';
  import 'swiper/css';
  import 'swiper/css/pagination';

  import { Swiper, SwiperSlide } from 'swiper/vue';

  defineProps({
    slideId: {
      type: String,
      default: '',
    },
    images: {
      type: Object,
      default: Object,
    },
  });
  const modules = [Autoplay, Pagination, Navigation];
</script>
<template>
  <div class="relative m-2 mt-4 rounded-md p-2">
    <Swiper
      class="aspect-video w-full"
      :slides-per-view="1.2"
      :speed="800"
      :loop="true"
      :autoplay="{
        delay: 3000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      }"
      :modules="modules"
      :centered-slides="true"
      :space-between="10"
      :navigation="{
        nextEl: '.swiper-button-next' + slideId,
        prevEl: '.swiper-button-prev' + slideId,
      }"
      :pagination="true"
    >
      <SwiperSlide
        v-for="image in images"
        :key="image"
        class="flex items-center justify-center"
      >
        <SwiperDefaultSlide :image="image" />
      </SwiperSlide>
    </Swiper>
    <div
      class="absolute inset-y-1/2 left-0 z-10 ms-4 flex cursor-pointer items-center justify-center bg-black"
      :class="'swiper-button-prev' + slideId"
    >
      <img class="h-8 w-8 lg:h-20 lg:w-20" src="/images/left_arrow.svg" />
    </div>
    <div
      class="absolute inset-y-1/2 right-0 z-10 me-4 flex cursor-pointer items-center justify-center"
      :class="'swiper-button-next' + slideId"
    >
      <img class="h-8 w-8 lg:h-20 lg:w-20" src="/images/right_arrow.svg" />
    </div>
  </div>
</template>
