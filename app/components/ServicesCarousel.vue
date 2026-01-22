<template>
  <div class="services-carousel-wrapper" style="overflow: hidden;">
    <Swiper
      :modules="[Autoplay, Pagination]"
      :slides-per-view="1"
      :slides-per-group="1"
      :space-between="20"
      :loop="true"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
      }"
      :breakpoints="{
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 20
        }
      }"
      class="services-swiper"
      style="overflow: hidden;"
    >
      <SwiperSlide v-for="service in services" :key="service.title">
        <NuxtLink :to="service.link" class="custom-link-hover-effects text-decoration-none d-block h-100">
          <div class="card border-0 shadow h-100">
            <div class="card-body text-center py-5 px-4">
              <img 
                :src="service.icon" 
                :alt="service.title" 
                class="mb-2 svg-icon-primary" 
                style="width: 75px; height: 75px;"
              />
              <div class="custom-crooked-line my-2">
                <img 
                  src="/img/demos/business-consulting-3/icons/infinite-crooked-line.svg" 
                  alt="" 
                  class="svg-icon-primary"
                  style="width: 154px; height: 26px;"
                />
              </div>
              <h3 class="text-5 font-weight-semibold mb-2 text-uppercase">{{ service.title }}</h3>
              <p class="pb-1 mb-3 text-3-5">{{ service.description }}</p>
              <span class="custom-view-more d-inline-flex align-items-center font-weight-medium text-color-primary">
                View More
                <i class="fas fa-arrow-right ms-2"></i>
              </span>
            </div>
          </div>
        </NuxtLink>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const services = [
  {
    title: 'Tech Partnerships',
    description: 'Connect international tech companies with East African hotels & travel agents.',
    icon: '/img/demos/business-consulting-3/icons/blackboard.svg',
    link: '/services/tech-partnerships'
  },
  {
    title: 'Revenue Management',
    description: 'Dynamic pricing, forecasting & profitability optimization for hotels.',
    icon: '/img/demos/business-consulting-3/icons/weight-balance.svg',
    link: '/services/revenue-management'
  },
  {
    title: 'Tours & Travel',
    description: 'Curated experiences for corporates, families, and groups across East Africa.',
    icon: '/img/demos/business-consulting-3/icons/blackboard.svg',
    link: '/services/tours-travel'
  },
  {
    title: 'Digital Marketing',
    description: 'SEO, PPC, social media & online reputation management for hospitality.',
    icon: '/img/demos/business-consulting-3/icons/weight-balance.svg',
    link: '/services/digital-marketing'
  }
]
</script>

<style scoped>
.services-carousel-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden !important;
}

.services-swiper {
  padding-bottom: 50px;
  overflow: hidden !important;
  width: 100%;
}

.services-swiper :deep(.swiper-wrapper) {
  display: flex;
}

.services-swiper :deep(.swiper-slide) {
  flex-shrink: 0;
  width: auto;
}

.services-swiper .card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  min-height: 320px;
  background: #fff;
}

.services-swiper .card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15) !important;
}

/* SVG icon colors - apply primary color filter */
.svg-icon-primary {
  filter: invert(33%) sepia(98%) saturate(1646%) hue-rotate(346deg) brightness(93%) contrast(97%);
}

/* Pagination dots styling */
:deep(.swiper-pagination) {
  bottom: 10px !important;
  text-align: center;
}

:deep(.swiper-pagination-bullet) {
  width: 10px;
  height: 10px;
  background: #ccc;
  opacity: 1;
  margin: 0 5px !important;
}

:deep(.swiper-pagination-bullet-active) {
  background: #F04C23;
}

/* Custom view more link */
.custom-view-more {
  transition: all 0.3s ease;
}

.custom-link-hover-effects:hover .custom-view-more {
  transform: translateX(5px);
}
</style>
