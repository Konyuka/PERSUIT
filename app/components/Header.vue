<template>
  <header id="header" :class="{ 'sticky-active': isSticky }">
    <div class="header-body border-top-0" style="border-top: none !important;">
      <!-- Header Top -->
      <div class="header-top header-top-default header-top-borders border-bottom-0 bg-color-light">
        <div class="container">
          <div class="header-row">
            <div class="header-column justify-content-between">
              <div class="header-row">
                <nav class="header-nav-top w-100 w-md-50pct w-xl-100pct">
                  <ul class="nav nav-pills d-inline-flex custom-header-top-nav-background pe-5">
                    <li class="nav-item py-2 d-inline-flex z-index-1">
                      <span class="d-flex align-items-center p-0">
                        <span>
                          <i class="fas fa-phone text-color-light me-2"></i>
                        </span>
                        <a class="text-color-light text-decoration-none font-weight-semibold text-3-5 ms-2"
                          href="tel:+254700000000">+254 700 000 000</a>
                      </span>
                      <span class="font-weight-normal align-items-center px-0 d-none d-xl-flex ms-3">
                        <span>
                          <i class="fas fa-envelope text-color-light me-2"></i>
                        </span>
                        <a class="text-color-light text-decoration-none font-weight-semibold text-3-5 ms-2"
                          href="mailto:info@persuitconsultants.com">info@persuitconsultants.com</a>
                      </span>
                    </li>
                  </ul>
                </nav>
                <div class="d-flex align-items-center w-100">
                  <ul class="ps-0 ms-auto mb-0">
                    <li
                      class="nav-item font-weight-semibold text-1 text-lg-2 text-color-dark d-none d-md-flex justify-content-end me-3">
                      Mon - Sat 9:00am - 6:00pm / Sunday - CLOSED
                    </li>
                  </ul>
                  <ul class="social-icons social-icons-clean social-icons-icon-dark social-icons-big m-0 ms-lg-2">
                    <li class="social-icons-linkedin">
                      <a href="https://www.linkedin.com/company/persuitconsultants" target="_blank" class="text-4"
                        title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                    </li>
                    <li class="social-icons-instagram">
                      <a href="https://www.instagram.com/persuitconsultants" target="_blank" class="text-4"
                        title="Instagram"><i class="fab fa-instagram"></i></a>
                    </li>
                    <li class="social-icons-x">
                      <a href="https://www.twitter.com/persuitconsult" target="_blank" class="text-4" title="Twitter"><i
                          class="fab fa-x-twitter"></i></a>
                    </li>
                    <li class="social-icons-facebook">
                      <a href="https://www.facebook.com/persuitconsultants" target="_blank" class="text-4"
                        title="Facebook"><i class="fab fa-facebook-f"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Header Container -->
      <div class="header-container container">
        <div class="header-row">
          <div class="header-column">
            <div class="header-row">
              <div class="header-logo">
                <NuxtLink to="/">
                  <img alt="PERSUIT Consultants" width="162" height="33"
                    src="/img/demos/business-consulting-3/logo.png">
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="header-column justify-content-end w-100">
            <div class="header-row">
              <div class="header-nav header-nav-links order-2 order-lg-1">
                <div
                  class="header-nav-main header-nav-main-square header-nav-main-text-capitalize header-nav-main-effect-1 header-nav-main-sub-effect-1">
                  <nav class="collapse" :class="{ 'show': !isMobileNavOpen }">
                    <ul class="nav nav-pills" id="mainNav">
                      <li>
                        <NuxtLink class="nav-link" to="/" :class="{ active: $route.path === '/' }">Home</NuxtLink>
                      </li>
                      <li>
                        <NuxtLink class="nav-link" to="/about" :class="{ active: $route.path === '/about' }">About Us
                        </NuxtLink>
                      </li>
                      <li class="dropdown">
                        <NuxtLink class="nav-link dropdown-toggle" to="/services"
                          :class="{ active: $route.path.startsWith('/services') }">Services</NuxtLink>
                        <ul class="dropdown-menu">
                          <li><NuxtLink to="/services/tech-partnerships" class="dropdown-item">Tech Partnerships
                            </NuxtLink></li>
                          <li><NuxtLink to="/services/tours-travel" class="dropdown-item">Tours & Travel</NuxtLink></li>
                          <li><NuxtLink to="/services/revenue-management" class="dropdown-item">Revenue Management
                            </NuxtLink></li>
                          <li><NuxtLink to="/services/digital-marketing" class="dropdown-item">Digital Marketing
                            </NuxtLink></li>
                        </ul>
                      </li>
                      <li>
                        <NuxtLink class="nav-link" to="/cases" :class="{ active: $route.path === '/cases' }">Case
                          Studies</NuxtLink>
                      </li>
                      <li>
                        <NuxtLink class="nav-link" to="/team" :class="{ active: $route.path === '/team' }">Team
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink class="nav-link" to="/blog" :class="{ active: $route.path === '/blog' }">Insights
                        </NuxtLink>
                      </li>
                      <li class="d-lg-none">
                        <NuxtLink class="nav-link" to="/contact">Contact Us</NuxtLink>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div class="header-column header-column-search justify-content-end align-items-center d-flex w-auto flex-row">
            <NuxtLink to="/contact"
              class="btn btn-primary custom-btn-style-1 font-weight-semibold text-3-5 btn-px-3 py-2 ws-nowrap ms-4 d-none d-lg-block">
              <span>Get Started</span>
            </NuxtLink>
            <button class="btn header-btn-collapse-nav ms-3 d-lg-none" type="button" @click="toggleMobileNav">
              <i class="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation Overlay -->
    <div v-if="isMobileNavOpen" class="mobile-nav-overlay" @click="closeMobileNav">
      <div class="mobile-nav-content" @click.stop>
        <button class="mobile-nav-close" @click="closeMobileNav">
          <i class="fas fa-times"></i>
        </button>
        <nav class="mobile-nav-menu">
          <ul class="list-unstyled">
            <li><NuxtLink to="/" @click="closeMobileNav">Home</NuxtLink></li>
            <li><NuxtLink to="/about" @click="closeMobileNav">About Us</NuxtLink></li>
            <li class="has-submenu">
              <a href="#" @click.prevent="toggleServicesDropdown">Services <i class="fas fa-chevron-down ms-2"></i></a>
              <ul v-show="servicesDropdownOpen" class="submenu list-unstyled">
                <li><NuxtLink to="/services/tech-partnerships" @click="closeMobileNav">Tech Partnerships</NuxtLink></li>
                <li><NuxtLink to="/services/tours-travel" @click="closeMobileNav">Tours & Travel</NuxtLink></li>
                <li><NuxtLink to="/services/revenue-management" @click="closeMobileNav">Revenue Management</NuxtLink>
                </li>
                <li><NuxtLink to="/services/digital-marketing" @click="closeMobileNav">Digital Marketing</NuxtLink></li>
              </ul>
            </li>
            <li><NuxtLink to="/cases" @click="closeMobileNav">Case Studies</NuxtLink></li>
            <li><NuxtLink to="/team" @click="closeMobileNav">Team</NuxtLink></li>
            <li><NuxtLink to="/blog" @click="closeMobileNav">Insights</NuxtLink></li>
            <li><NuxtLink to="/contact" @click="closeMobileNav">Contact Us</NuxtLink></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
const isMobileNavOpen = ref(false)
const servicesDropdownOpen = ref(false)
const isSticky = ref(false)

// Sticky header on scroll
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const handleScroll = () => {
  isSticky.value = window.scrollY > 100
}

const toggleMobileNav = () => {
  isMobileNavOpen.value = !isMobileNavOpen.value
  if (isMobileNavOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMobileNav = () => {
  isMobileNavOpen.value = false
  servicesDropdownOpen.value = false
  document.body.style.overflow = ''
}

const toggleServicesDropdown = () => {
  servicesDropdownOpen.value = !servicesDropdownOpen.value
}
</script>

<style scoped>
/* Force remove any top spacing on header */
#header {
  margin-top: 0 !important;
  padding-top: 0 !important;
  top: 0;
  width: 100%;
  z-index: 1030;
  position: relative;
  background: #fff;
}

#header.sticky-active {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
}

#header :deep(.header-body) {
  margin-top: 0 !important;
  padding-top: 0 !important;
  border-top: 0 !important;
  transition: min-height 0.3s ease, background 0.3s ease;
}

#header :deep(.header-top) {
  margin-top: 0 !important;
  max-height: 60px;
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s ease, opacity 0.3s ease;
  opacity: 1;
}

#header.sticky-active :deep(.header-top) {
  max-height: 0;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  opacity: 0;
}

#header :deep(.header-container) {
  transition: height 0.3s ease, padding 0.3s ease;
  height: 100px;
}

#header.sticky-active :deep(.header-container) {
  height: 70px;
}

#header :deep(.header-logo img) {
  transition: all 0.3s ease;
}

#header.sticky-active :deep(.header-logo img) {
  max-height: 28px;
  width: auto;
}

.mobile-nav-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 9999;
  display: flex;
  justify-content: flex-end;
}

.mobile-nav-content {
  width: 300px;
  max-width: 85%;
  height: 100%;
  background: #fff;
  padding: 20px;
  overflow-y: auto;
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0);
  }
}

.mobile-nav-close {
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #333;
}

.mobile-nav-menu {
  margin-top: 50px;
}

.mobile-nav-menu ul li {
  padding: 12px 0;
  border-bottom: 1px solid #eee;
}

.mobile-nav-menu ul li a {
  color: #333;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  display: block;
}

.mobile-nav-menu .submenu {
  padding-left: 20px;
  margin-top: 10px;
}

.mobile-nav-menu .submenu li {
  padding: 8px 0;
  border-bottom: none;
}

.mobile-nav-menu .submenu li a {
  font-weight: 500;
  font-size: 1rem;
  color: #666;
}
</style>
