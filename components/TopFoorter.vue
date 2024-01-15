<script setup>
  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
</script>

<template>
  <div class="mt-10 bg-white py-5">
    <!-- <div class="flex w-full items-center justify-center">お問い合わせ</div> -->
    <!-- <div class="flex w-full items-center justify-center">
      <div class="flex justify-between space-x-5">
        <a :href="routePathList('sns_x')" target="_blank"
          ><div class="border-b border-black">
            <img class="m-1 h-3" src="@/assets/images/logo-black-x.png" /></div
        ></a>
        <a :href="routePathList('sns_suzuri')" target="_blank"
          ><div class="flex border-b border-black">
            <img class="h-5" src="@/assets/images/icon_suzuri.png" />
            <div class="ml-2 text-lg leading-none">SUZURI</div>
          </div></a
        >
      </div>
    </div> -->

    <div class="flex items-center justify-center pt-2">
      <div class="w-full lg:w-2/3">
        <div class="flex w-full justify-between">
          <div class="lg:flex lg:justify-center">
            <div class="flex items-center justify-start px-10 lg:px-0">
              <div>
                <div class="text-2xl font-bold lg:text-3xl">CoCoHouse</div>
                <div class="mt-1 text-sm lg:text-xl">民宿ホテル</div>
                <div class="text-sm lg:text-xl">浅草・曳舟</div>
                <div class="mt-1 text-xs lg:text-sm">
                  電話番号: 090-0000-0000
                </div>
                <div class="text-xs lg:text-sm">メール: *****@gmail.com</div>
              </div>
            </div>
          </div>
          <div class="hidden space-x-4 text-xl font-bold lg:flex">
            <p class="flex items-center justify-center">メニュー１</p>
            <p class="flex items-center justify-center">メニュー２</p>
            <p class="flex items-center justify-center">メニュー３</p>
          </div>
        </div>
      </div>
    </div>
    <ButtonDefaultThema
      class="mb-3 mt-5 flex w-full items-center justify-center"
      @click="goTop"
      >PAGE TOP</ButtonDefaultThema
    >
  </div>
</template>
