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
    ],
  });
</script>

<template>
  <div>
    <TextDefaultArea class="my-4" text="CoCoHouseの宿" />
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
        広さ72㎡のゆったりとしたお部屋で、8人まで泊まる事ができます。<br />
        浅草の中心地なので、雷門、浅草寺、スカイツリーなど主要観光スポットへも徒歩圏内です！<br /><br />
        バルコニーからはスカイツリーや桜が見え、特に夜景が綺麗です。<br />
      </p>
      <ButtonDefaultThema class="mt-5">予約する</ButtonDefaultThema>
      <div>
        <TextSubTitleArea class="mt-6" text="場所" />

        <div class="flex aspect-video items-center justify-center p-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3239.487232334275!2d139.8014105!3d35.714234!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ec3797cf955%3A0x17f69d06f4c8480a!2z44CSMTExLTAwMzMg5p2x5Lqs6YO95Y-w5p2x5Yy66Iqx5bed5oi477yS5LiB55uu77yS4oiS77yW!5e0!3m2!1sja!2sjp!4v1705328049794!5m2!1sja!2sjp"
            class="h-full w-full"
            style="border: 0"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <p class="mx-3 mb-3 text-xs lg:text-sm">
          〒111-0033 東京都台東区花川戸２丁目２−６
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
        東京の中心部に位置するこちらの宿泊先で、楽しい東京滞在をお過ごしください。<br />
        京成曳舟駅徒歩7分、東京メトロ曳舟駅徒歩13分、八広駅徒歩12分、浅草駅やスカイツリー(押上)に近く、買い物にも観光にも便利な環境となっております。<br /><br />
        家族同士が寝室でも一緒に過ごすことができるため、小さなお子様連れでも安心です。閑静な住宅街の中にあり、夜間も静かな環境です。<br /><br />
        洗濯機、冷蔵庫、調理器具などを完備し、ポータブルWiFiも設置しているため、長期滞在にも対応可能です。<br />
      </p>
      <ButtonDefaultThema class="mt-5" :route="routePathList('inn_hikifune')"
        >予約する</ButtonDefaultThema
      >
      <div>
        <TextSubTitleArea class="mt-6" text="場所" />
        <div class="flex aspect-video items-center justify-center p-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.1299852210227!2d139.8233998!3d35.723021599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188f2350a60d4b%3A0x2220b2ddbaa816f1!2z44CSMTMxLTAwNDEg5p2x5Lqs6YO95aKo55Sw5Yy65YWr5bqD77yV5LiB55uu77yS4oiS77yY!5e0!3m2!1sja!2sjp!4v1705327997437!5m2!1sja!2sjp"
            class="h-full w-full"
            style="border: 0"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <p class="mx-3 mb-3 text-xs lg:text-sm">
          〒131-0041 東京都墨田区八広５丁目２−８
        </p>
      </div>
    </div>
  </div>
</template>
