<template>
  <footer id="footer" class="border-0 m-0 p-0" style="background: linear-gradient(135deg, rgb(26, 42, 58) 0%, rgb(13, 27, 42) 100%);">
    <div class="container py-5">
      <div class="row text-center text-md-start py-4">
        <!-- About Column -->
        <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
          <h4 class="font-weight-bold ls-0 text-white">About PERSUIT</h4>
          <p class="text-3-5 text-color-light opacity-7">Your trusted partner for hospitality technology partnerships, revenue management, and
            digital transformation across East Africa.</p>
          <ul class="social-icons social-icons-clean social-icons-icon-light social-icons-big">
            <li class="social-icons-linkedin">
              <a href="https://www.linkedin.com/company/persuitconsultants" target="_blank" title="LinkedIn"><i
                  class="fab fa-linkedin-in"></i></a>
            </li>
            <li class="social-icons-instagram">
              <a href="https://www.instagram.com/persuitconsultants" target="_blank" title="Instagram"><i
                  class="fab fa-instagram"></i></a>
            </li>
            <li class="social-icons-x">
              <a href="https://www.twitter.com/persuitconsult" target="_blank" title="Twitter"><i
                  class="fab fa-x-twitter"></i></a>
            </li>
            <li class="social-icons-facebook">
              <a href="https://www.facebook.com/persuitconsultants" target="_blank" title="Facebook"><i
                  class="fab fa-facebook-f"></i></a>
            </li>
          </ul>
        </div>

        <!-- Services Column -->
        <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
          <h4 class="font-weight-bold ls-0 text-white">Our Services</h4>
          <ul class="list list-unstyled">
            <li class="mb-2"><NuxtLink to="/services/tech-partnerships" class="text-color-light opacity-7 text-decoration-none">Tech Partnerships</NuxtLink></li>
            <li class="mb-2"><NuxtLink to="/services/tours-travel" class="text-color-light opacity-7 text-decoration-none">Tours & Travel</NuxtLink></li>
            <li class="mb-2"><NuxtLink to="/services/revenue-management" class="text-color-light opacity-7 text-decoration-none">Revenue Management</NuxtLink></li>
            <li class="mb-2"><NuxtLink to="/services/digital-marketing" class="text-color-light opacity-7 text-decoration-none">Digital Marketing</NuxtLink></li>
            <li class="mb-2"><NuxtLink to="/cases" class="text-color-light opacity-7 text-decoration-none">Case Studies</NuxtLink></li>
            <li class="mb-2"><NuxtLink to="/blog" class="text-color-light opacity-7 text-decoration-none">Insights & Blog</NuxtLink></li>
          </ul>
        </div>

        <!-- Contact Column -->
        <div class="col-md-6 col-lg-3 mb-5 mb-md-0">
          <h4 class="font-weight-bold ls-0 text-white">Contact Info</h4>
          <ul class="list list-unstyled">
            <li class="mb-3 text-color-light opacity-7">
              <i class="fas fa-map-marker-alt text-color-primary me-2"></i>
              Westlands, Nairobi<br>
              <span class="ms-4 text-color-light">Kenya, East Africa</span>
            </li>
            <li class="mb-3">
              <i class="fas fa-phone text-color-primary me-2"></i>
              <a href="tel:+254700000000" class="text-color-light opacity-7 text-decoration-none">+254 700 000 000</a>
            </li>
            <li class="mb-3">
              <i class="fas fa-envelope text-color-primary me-2"></i>
              <a href="mailto:info@persuitconsultants.com" class="text-color-light opacity-7 text-decoration-none">info@persuitconsultants.com</a>
            </li>
            <li class="mb-2 text-color-light opacity-7">
              <i class="fas fa-clock text-color-primary me-2"></i>
              Mon - Fri: 8:00 AM - 6:00 PM
            </li>
          </ul>
        </div>

        <!-- Newsletter Column -->
        <div class="col-md-6 col-lg-3">
          <h4 class="font-weight-bold ls-0 text-white">Stay Updated</h4>
          <p class="text-3-5 text-color-light opacity-7">Subscribe to receive insights on hospitality tech trends and industry news.</p>
          <form class="mt-3" @submit.prevent="handleNewsletterSubmit">
            <div class="input-group mb-3">
              <input type="email" v-model="newsletterEmail" class="form-control" placeholder="Your email" required>
              <button class="btn btn-primary" type="submit">
                <i class="fas fa-paper-plane"></i>
              </button>
            </div>
          </form>
          <div class="mt-3">
            <h6 class="font-weight-bold mb-2 text-white">Industries We Serve</h6>
            <span class="badge bg-color-primary me-1 mb-1 text-white">Hotels</span>
            <span class="badge bg-color-primary me-1 mb-1 text-white">Tour Operators</span>
            <span class="badge bg-color-primary me-1 mb-1 text-white">Travel Agencies</span>
            <span class="badge bg-color-primary me-1 mb-1 text-white">Lodges</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer Bottom -->
    <div class="py-4" style="background-color: #091a2e;">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-4 text-center text-lg-start mb-3 mb-lg-0">
            <p class="text-color-light mb-0">&copy; {{ currentYear }} PERSUIT Consultants. All Rights Reserved.</p>
          </div>
          <div class="col-lg-4 text-center mb-3 mb-lg-0">
            <p class="text-color-grey text-3 mb-0">
              Designed by <a href="https://www.linkedin.com/in/michaelsaiba/" class="text-color-light text-decoration-none">Michael Saiba</a>
            </p>
          </div>
          <div class="col-lg-4 text-center text-lg-end">
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
const newsletterEmail = ref('')

const handleNewsletterSubmit = () => {
  alert(`Thank you for subscribing with ${newsletterEmail.value}! You'll receive our latest insights soon.`)
  newsletterEmail.value = ''
}
</script>
