<script setup lang="ts">
  useHead({
    title: 'CoCoHouse-TOP',
    meta: [
      { property: 'og:title', content: 'CoCoHouse-TOP' },
      {
        property: 'og:description',
        content: 'CoCoHouseのTOPページです。',
      },
      {
        property: 'description',
        content: 'CoCoHouseのTOPページです。',
      },
      {
        property: 'robots',
        content: 'noindex',
      },
    ],
  });
  const redirectPath = (url: string) => {
    window.open(url, '_blank');
  };
</script>

<template>
  <div>
    <TextDefaultArea class="my-4" :text="$t('CoCoHouseAccommodation')" />
    <div class="bg-SubThemaColor py-1">
      <TextInnTitleArea
        class="mt-4"
        text="CoCoHouse Asakusa"
        :route="routePathList('inn_asakusa')"
      />
      <SwiperDefaultSwipeArea
        slide-id="asakusa"
        :images="
          new Array(
            '/images/inns/asakusa/room_1.jpeg',
            '/images/inns/asakusa/room_2.jpeg',
            '/images/inns/asakusa/room_3.jpeg',
            '/images/inns/asakusa/my_home_cloud_3f.png'
          )
        "
      />
      <p class="mx-3">
        {{ $t('asakusa.test1') }}<br />
        {{ $t('asakusa.test2') }}<br /><br />
        {{ $t('asakusa.test3') }}<br />
      </p>
      <ButtonDefaultThema
        class="mt-5"
        @click="redirectPath(routePathList('inn_asakusa'))"
      >
        {{ $t('reservation') }}
      </ButtonDefaultThema>
      <div>
        <TextSubTitleArea class="mt-6" :text="$t('place')" />

        <div class="flex aspect-video items-center justify-center p-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3239.487232334275!2d139.8014105!3d35.714234!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ec3797cf955%3A0x17f69d06f4c8480a!2z44CSMTExLTAwMzMg5p2x5Lqs6YO95Y-w5p2x5Yy66Iqx5bed5oi477yS5LiB55uu77yS4oiS77yW!5e0!3m2!1sja!2sjp!4v1705328049794!5m2!1sja!2sjp"
            class="h-full w-full"
            style="border: 0"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <p class="mx-3 mb-3 text-end text-sm lg:text-lg">
          {{ $t('asakusa.adress') }}
        </p>
      </div>
    </div>
    <div class="mt-3 bg-SubThemaColor py-1">
      <TextInnTitleArea
        class="mt-4"
        text="CoCoHouse Hikifune"
        :route="routePathList('inn_hikifune')"
      />
      <SwiperDefaultSwipeArea
        slide-id="hikifune"
        :images="
          new Array(
            '/images/inns/hikifune/room_1.jpg',
            '/images/inns/hikifune/room_2.jpg',
            '/images/inns/hikifune/room_3d.jpg'
          )
        "
      />

      <p class="mx-3">
        {{ $t('hikifune.test1') }}<br />
        {{ $t('hikifune.test2') }}<br /><br />
        {{ $t('hikifune.test3') }}<br /><br />
        {{ $t('hikifune.test4') }}<br />
      </p>
      <ButtonDefaultThema
        class="mt-5"
        @click="redirectPath(routePathList('inn_hikifune'))"
      >
        {{ $t('reservation') }}
      </ButtonDefaultThema>
      <div>
        <TextSubTitleArea class="mt-6" :text="$t('place')" />
        <div class="flex aspect-video items-center justify-center p-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.1299852210227!2d139.8233998!3d35.723021599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188f2350a60d4b%3A0x2220b2ddbaa816f1!2z44CSMTMxLTAwNDEg5p2x5Lqs6YO95aKo55Sw5Yy65YWr5bqD77yV5LiB55uu77yS4oiS77yY!5e0!3m2!1sja!2sjp!4v1705327997437!5m2!1sja!2sjp"
            class="h-full w-full"
            style="border: 0"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <p class="mx-3 mb-3 text-end text-sm lg:text-lg">
          {{ $t('hikifune.adress') }}
        </p>
      </div>
    </div>
  </div>
</template>
