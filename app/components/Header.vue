<template>
  <header id="header" class="header-effect-shrink" data-plugin-options="{'stickyEnabled': true, 'stickyEffect': 'shrink', 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': false, 'stickyChangeLogo': true, 'stickyStartAt': 120, 'stickyHeaderContainerHeight': 85}">
    <div class="header-body border-top-0">
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
                        <a class="text-color-light text-decoration-none font-weight-semibold text-3-5 ms-2" href="tel:1234567890">(800) 123-4567</a>
                      </span>
                      <span class="font-weight-normal align-items-center px-0 d-none d-xl-flex ms-3">
                        <span>
                          <i class="fas fa-envelope text-color-light me-2"></i>
                        </span>
                        <a class="text-color-light text-decoration-none font-weight-semibold text-3-5 ms-2" href="mailto:info@pursuit.com">info@pursuit.com</a>
                      </span>
                    </li>
                  </ul>
                </nav>
                <div class="d-flex align-items-center w-100">
                  <ul class="ps-0 ms-auto mb-0">
                    <li class="nav-item font-weight-semibold text-1 text-lg-2 text-color-dark d-none d-md-flex justify-content-end me-3">
                      Mon - Sat 9:00am - 6:00pm / Sunday - CLOSED
                    </li>
                  </ul>
                  <ul class="social-icons social-icons-clean social-icons-icon-dark social-icons-big m-0 ms-lg-2">
                    <li class="social-icons-instagram">
                      <a href="http://www.instagram.com/" target="_blank" class="text-4" title="Instagram"><i class="fab fa-instagram"></i></a>
                    </li>
                    <li class="social-icons-x">
                      <a href="http://www.twitter.com/" target="_blank" class="text-4" title="Twitter"><i class="fab fa-x-twitter"></i></a>
                    </li>
                    <li class="social-icons-facebook">
                      <a href="http://www.facebook.com/" target="_blank" class="text-4" title="Facebook"><i class="fab fa-facebook-f"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Header Container -->
      <div class="header-container container" style="height: 117px;">
        <div class="header-row">
          <div class="header-column">
            <div class="header-row">
              <div class="header-logo">
                <NuxtLink to="/">
                  <img alt="PURSUIT" width="162" height="33" src="/img/demos/business-consulting-3/logo.png">
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="header-column justify-content-end w-100">
            <div class="header-row">
              <div class="header-nav header-nav-links order-2 order-lg-1">
                <div class="header-nav-main header-nav-main-square header-nav-main-text-capitalize header-nav-main-effect-1 header-nav-main-sub-effect-1">
                  <nav class="collapse show">
                    <ul class="nav nav-pills" id="mainNav">
                      <li>
                        <NuxtLink class="nav-link" to="/" :class="{ active: $route.path === '/' }">Home</NuxtLink>
                      </li>
                      <li>
                        <NuxtLink class="nav-link" to="/about" :class="{ active: $route.path === '/about' }">About Us</NuxtLink>
                      </li>
                      <li class="dropdown">
                        <NuxtLink class="nav-link dropdown-toggle" to="/services">Services</NuxtLink>
                        <ul class="dropdown-menu">
                          <li><NuxtLink to="/services/sales-marketing" class="dropdown-item">Sales & Marketing</NuxtLink></li>
                          <li><NuxtLink to="/services/strategic-planning" class="dropdown-item">Strategic Planning</NuxtLink></li>
                          <li><NuxtLink to="/services/operations" class="dropdown-item">Operations</NuxtLink></li>
                          <li><NuxtLink to="/services/cost-transformation" class="dropdown-item">Cost Transformation</NuxtLink></li>
                          <li><NuxtLink to="/services/digital-marketing" class="dropdown-item">Digital Marketing</NuxtLink></li>
                          <li><NuxtLink to="/services/automation" class="dropdown-item">Automation</NuxtLink></li>
                        </ul>
                      </li>
                      <li>
                        <NuxtLink class="nav-link" to="/cases" :class="{ active: $route.path === '/cases' }">Cases</NuxtLink>
                      </li>
                      <li>
                        <NuxtLink class="nav-link" to="/team" :class="{ active: $route.path === '/team' }">Team</NuxtLink>
                      </li>
                      <li>
                        <NuxtLink class="nav-link" to="/blog" :class="{ active: $route.path === '/blog' }">Blog</NuxtLink>
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
            <NuxtLink to="/contact" class="btn btn-dark custom-btn-style-1 font-weight-semibold text-3-5 btn-px-3 py-2 ws-nowrap ms-4 d-none d-lg-block">
              <span>Contact Us</span>
            </NuxtLink>
            <button class="btn header-btn-collapse-nav ms-3 d-lg-none" type="button" @click="toggleMobileNav">
              <i class="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const toggleMobileNav = () => {
  const nav = document.querySelector('.header-nav-main nav')
  if (nav) {
    nav.classList.toggle('show')
  }
}
</script>
