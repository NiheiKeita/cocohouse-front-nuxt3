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
  const showMenu = ref(false);
  const modalImage = ref('');
  const toggleStatus = () => {
    showMenu.value = !showMenu.value;
  };
  const clickImage = (image: string) => {
    modalImage.value = image;
    toggleStatus();
  };

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
        <SwiperDefaultSlide :image="image" @click-image="clickImage" />
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
    <transition name="slide-fade" mode="out-in">
      <div
        v-show="showMenu"
        class="fixed inset-0 z-50 h-screen w-screen cursor-pointer bg-black bg-opacity-80"
        @click="toggleStatus"
      >
        <img class="h-full w-full object-contain py-3" :src="modalImage" />
      </div>
    </transition>
  </div>
</template>

<style>
  .slide-fade-enter-active {
    transition: all 0.3s ease-out;
  }

  .slide-fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .slide-fade-enter-from,
  .slide-fade-leave-to {
    opacity: 0;
  }
</style>
