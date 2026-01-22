<template>
  <Swiper
    :modules="[SwiperAutoplay, SwiperPagination]"
    :slides-per-view="2"
    :space-between="30"
    :loop="true"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :breakpoints="{
      476: { slidesPerView: 3 },
      768: { slidesPerView: 4 },
      992: { slidesPerView: 5 },
      1200: { slidesPerView: 6 },
      1600: { slidesPerView: 7 },
    }"
    class="partner-logos-carousel"
  >
    <SwiperSlide v-for="(logo, index) in logos" :key="index" class="text-center d-flex align-items-center justify-content-center" style="height: 80px;">
      <img 
        :src="logo.src" 
        :alt="logo.alt" 
        class="img-fluid partner-logo"
        :style="{ maxWidth: logo.maxWidth }"
      />
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay as SwiperAutoplay, Pagination as SwiperPagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const logos = [
  { src: '/img/logos/logo-8.png', alt: 'Partner', maxWidth: '90px' },
  { src: '/img/logos/logo-9.png', alt: 'Partner', maxWidth: '140px' },
  { src: '/img/logos/logo-10.png', alt: 'Partner', maxWidth: '140px' },
  { src: '/img/logos/logo-11.png', alt: 'Partner', maxWidth: '140px' },
  { src: '/img/logos/logo-12.png', alt: 'Partner', maxWidth: '100px' },
  { src: '/img/logos/logo-13.png', alt: 'Partner', maxWidth: '100px' },
  { src: '/img/logos/logo-14.png', alt: 'Partner', maxWidth: '140px' },
  { src: '/img/logos/logo-15.png', alt: 'Partner', maxWidth: '110px' },
]
</script>

<style scoped>
.partner-logos-carousel {
  padding-bottom: 40px;
}

.partner-logo {
  filter: grayscale(100%);
  opacity: 0.5;
  transition: all 0.3s ease;
}

.partner-logo:hover {
  filter: grayscale(0%);
  opacity: 1;
}

:deep(.swiper-pagination) {
  bottom: 0;
}

:deep(.swiper-pagination-bullet) {
  width: 10px;
  height: 10px;
  background: #ccc;
  opacity: 1;
}

:deep(.swiper-pagination-bullet-active) {
  background: #F04C23;
}
</style>
