<template>
  <div class="font-serif text-[15px] lg:text-[17px]">
    <TopHeader class="z-50" />
    <div class="lg:mx-[20%]"><slot /></div>

    <div class="fixed inset-0 -z-10 bg-MainColor"></div>
    <TopFoorter />
  </div>
</template>
