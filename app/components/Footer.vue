<template>
  <footer id="footer" class="border-0 mt-0">
    <div class="container py-5 my-4">
      <div class="row text-center text-md-start py-4">
        <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
          <h4 class="font-weight-bold ls-0">About Us</h4>
          <p class="text-3-5">Cras a elit sit amet leo accumsan volutpat. Suspendisse hendreriast ehicula leo, vel efficitur felis.</p>
          <ul class="social-icons social-icons-clean social-icons-icon-dark social-icons-big">
            <li class="social-icons-instagram">
              <a href="http://www.instagram.com/" target="_blank" title="Instagram"><i class="fab fa-instagram"></i></a>
            </li>
            <li class="social-icons-x">
              <a href="http://www.twitter.com/" target="_blank" title="Twitter"><i class="fab fa-x-twitter"></i></a>
            </li>
            <li class="social-icons-facebook">
              <a href="http://www.facebook.com/" target="_blank" title="Facebook"><i class="fab fa-facebook-f"></i></a>
            </li>
          </ul>
        </div>
        <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
          <h4 class="font-weight-bold ls-0">Quick Links</h4>
          <ul class="list list-unstyled columns-lg-2">
            <li class="mb-2"><NuxtLink to="/">Home</NuxtLink></li>
            <li class="mb-2"><NuxtLink to="/about">About</NuxtLink></li>
            <li class="mb-2"><NuxtLink to="/services">Services</NuxtLink></li>
            <li class="mb-2"><NuxtLink to="/team">Team</NuxtLink></li>
            <li class="mb-2"><NuxtLink to="/blog">Blog</NuxtLink></li>
            <li class="mb-2"><NuxtLink to="/contact">Contact</NuxtLink></li>
          </ul>
        </div>
        <div class="col-md-6 col-lg-3 mb-5 mb-md-0">
          <h4 class="font-weight-bold ls-0">Contact Info</h4>
          <ul class="list list-unstyled">
            <li class="mb-2">
              <i class="fas fa-map-marker-alt text-color-primary me-2"></i>
              123 Street Name, City, Country
            </li>
            <li class="mb-2">
              <i class="fas fa-phone text-color-primary me-2"></i>
              <a href="tel:1234567890">(800) 123-4567</a>
            </li>
            <li class="mb-2">
              <i class="fas fa-envelope text-color-primary me-2"></i>
              <a href="mailto:info@pursuit.com">info@pursuit.com</a>
            </li>
          </ul>
        </div>
        <div class="col-md-6 col-lg-3">
          <h4 class="font-weight-bold ls-0">Newsletter</h4>
          <p class="text-3-5">Subscribe to our newsletter for the latest updates.</p>
          <form class="mt-3">
            <div class="input-group">
              <input type="email" class="form-control" placeholder="Your email" required>
              <button class="btn btn-primary" type="submit">
                <i class="fas fa-paper-plane"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="footer-copyright bg-dark py-4">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <p class="text-color-light mb-0">&copy; {{ currentYear }} PURSUIT. All Rights Reserved.</p>
          </div>
          <div class="col-md-6 text-center text-md-end">
            <NuxtLink to="/privacy" class="text-color-light text-decoration-none me-3">Privacy Policy</NuxtLink>
            <NuxtLink to="/terms" class="text-color-light text-decoration-none">Terms of Service</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>
