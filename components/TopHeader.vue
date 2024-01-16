<script setup lang="ts">
  const { setLocale } = useI18n();
  const langSelect = (e: any) => {
    setLocale(e.target.value);
  };
</script>

<template>
  <div class="sticky top-0 w-full bg-ThemaColor">
    <div class="flex justify-between lg:mx-[20%]">
      <nuxt-link :to="routePathList('top')" class="">
        <div class="flex justify-center">
          <!-- <img class="ml-2 h-14" src="@/assets/images/logo.png" /> -->
          <p
            class="ml-2 flex h-14 items-center justify-center text-2xl font-bold leading-3 text-black lg:text-4xl"
          >
            CoCoHouse
          </p>
        </div>
      </nuxt-link>

      <div class="mx-2 flex items-center justify-center">
        <select
          class="h-8 cursor-pointer appearance-none rounded-md border border-gray-400 bg-black bg-[url('/images/arrow_down.svg')] bg-[length:auto_50%] bg-[left_0.5rem_center] bg-no-repeat pl-8 pr-2 text-white opacity-50 hover:bg-gray-700"
          @change="langSelect"
        >
          <option
            :selected="'日本語' == $t('lang')"
            value="ja"
            class="cursor-pointer text-right"
          >
            日本語
          </option>
          <option
            :selected="'中国語' == $t('lang')"
            value="zh"
            class="cursor-pointer text-right"
          >
            中国語
          </option>
          <option
            :selected="'English' == $t('lang')"
            value="en"
            class="cursor-pointer text-right"
          >
            English
          </option>
        </select>
        <!-- <div class="flex items-center justify-center">
          <HambergerMenu />
        </div> -->
      </div>
      <!-- <div class="flex items-center justify-center">
      <HambergerMenu />
    </div> -->
    </div>
  </div>
</template>
