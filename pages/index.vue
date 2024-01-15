<script setup lang="ts">
  useHead({
    title: 'cocohouse-TOP',
    meta: [
      { property: 'og:title', content: 'cocohouse-TOP' },
      {
        property: 'og:description',
        content: 'cocohouseのTOPページです。',
      },
      {
        property: 'description',
        content: 'cocohouseのTOPページです。',
      },
    ],
  });
</script>

<template>
  <div>
    <TextDefaultArea class="my-4" text="cocohouseの宿" />
    <div class="bg-SubThemaColor py-1">
      <TextSubTitleArea class="mt-4" text="cocohouse-asakusa" />
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
      <div>
        <TextSubTitleArea class="mt-4" text="場所" />
        <div class="flex aspect-video items-center justify-center p-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.9808836957636!2d139.74244827623178!3d35.702088028827184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c44c6a3a975%3A0x798abf057b073325!2z6aOv55Sw5qmL6aeF!5e0!3m2!1sja!2sjp!4v1705325054714!5m2!1sja!2sjp"
            style="border: 0"
            :allowfullscreen="false"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="h-full w-full"
          ></iframe>
        </div>
      </div>
    </div>
    <div class="mt-3 bg-SubThemaColor py-1">
      <TextSubTitleArea class="mt-4" text="cocohouse-hikifune" />
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
      <div>
        <TextSubTitleArea class="mt-4" text="場所" />
        <div class="flex aspect-video items-center justify-center p-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.9808836957636!2d139.74244827623178!3d35.702088028827184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c44c6a3a975%3A0x798abf057b073325!2z6aOv55Sw5qmL6aeF!5e0!3m2!1sja!2sjp!4v1705325054714!5m2!1sja!2sjp"
            style="border: 0"
            :allowfullscreen="false"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="h-full w-full"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>
