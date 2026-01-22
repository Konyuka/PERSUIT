<template>
    <div>
        <!-- Page Header -->
        <section class="page-header page-header-modern py-5 position-relative"
            style="background: linear-gradient(135deg, #1a2a3a 0%, #0d1b2a 100%);">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 align-self-center p-static order-2 text-center">
                        <h1 class="text-10 font-weight-bold text-color-light mb-2">Contact Us</h1>
                        <p class="text-color-light opacity-7 text-4 mb-0">Let's Start a Conversation</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Breadcrumb -->
        <div class="container py-2">
            <ul class="breadcrumb font-weight-semibold text-3-5">
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li class="active">Contact</li>
            </ul>
        </div>

        <!-- Contact Content -->
        <div class="container py-5 my-4">
            <div class="row">
                <!-- Contact Info -->
                <div class="col-lg-4 mb-5 mb-lg-0">
                    <h2 class="custom-highlight-text-1 d-inline-block line-height-5 text-4 positive-ls-3 font-weight-medium text-color-primary mb-2">
                        GET IN TOUCH</h2>
                    <h3 class="text-7 line-height-3 text-transform-none font-weight-bold mb-4">
                        We'd Love to Hear From You</h3>
                    <p class="text-3-5 mb-4">
                        Whether you're a tech company seeking to enter the East African market or a hospitality business looking for digital transformation solutions, we're here to help.
                    </p>

                    <div class="d-flex align-items-start mb-4">
                        <div class="bg-color-primary rounded-circle p-3 me-3 d-flex align-items-center justify-content-center" style="width: 50px; height: 50px;">
                            <i class="fas fa-map-marker-alt text-color-light"></i>
                        </div>
                        <div>
                            <h5 class="font-weight-bold mb-1">Our Office</h5>
                            <p class="mb-0">Westlands Business Centre<br>Nairobi, Kenya<br>East Africa</p>
                        </div>
                    </div>

                    <div class="d-flex align-items-start mb-4">
                        <div class="bg-color-primary rounded-circle p-3 me-3 d-flex align-items-center justify-content-center" style="width: 50px; height: 50px;">
                            <i class="fas fa-phone text-color-light"></i>
                        </div>
                        <div>
                            <h5 class="font-weight-bold mb-1">Phone</h5>
                            <p class="mb-0">
                                <a href="tel:+254700000000" class="text-dark">+254 700 000 000</a><br>
                                <a href="tel:+254711000000" class="text-dark">+254 711 000 000</a>
                            </p>
                        </div>
                    </div>

                    <div class="d-flex align-items-start mb-4">
                        <div class="bg-color-primary rounded-circle p-3 me-3 d-flex align-items-center justify-content-center" style="width: 50px; height: 50px;">
                            <i class="fas fa-envelope text-color-light"></i>
                        </div>
                        <div>
                            <h5 class="font-weight-bold mb-1">Email</h5>
                            <p class="mb-0">
                                <a href="mailto:info@persuitconsultants.com">info@persuitconsultants.com</a><br>
                                <a href="mailto:partnerships@persuitconsultants.com">partnerships@persuitconsultants.com</a>
                            </p>
                        </div>
                    </div>

                    <div class="d-flex align-items-start mb-4">
                        <div class="bg-color-primary rounded-circle p-3 me-3 d-flex align-items-center justify-content-center" style="width: 50px; height: 50px;">
                            <i class="fas fa-clock text-color-light"></i>
                        </div>
                        <div>
                            <h5 class="font-weight-bold mb-1">Business Hours</h5>
                            <p class="mb-0">Mon - Fri: 8:00 AM - 6:00 PM (EAT)<br>Sat: 9:00 AM - 1:00 PM</p>
                        </div>
                    </div>

                    <!-- Social Links -->
                    <div class="mt-4 pt-3">
                        <h5 class="font-weight-bold mb-3">Follow Us</h5>
                        <div class="social-icons social-icons-clean social-icons-icon-dark social-icons-big">
                            <a href="https://www.linkedin.com/company/persuitconsultants" target="_blank" title="LinkedIn" class="me-2">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                            <a href="https://www.instagram.com/persuitconsultants" target="_blank" title="Instagram" class="me-2">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a href="https://www.twitter.com/persuitconsult" target="_blank" title="Twitter" class="me-2">
                                <i class="fab fa-x-twitter"></i>
                            </a>
                            <a href="https://www.facebook.com/persuitconsultants" target="_blank" title="Facebook">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Contact Form -->
                <div class="col-lg-8">
                    <div class="card border-0 shadow p-4 p-lg-5">
                        <h4 class="font-weight-bold mb-2">Send Us a Message</h4>
                        <p class="text-muted mb-4">Fill out the form below and we'll get back to you within 24 hours.</p>
                        
                        <form @submit.prevent="submitForm">
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label class="form-label font-weight-semibold">First Name *</label>
                                    <input type="text" v-model="form.firstName" class="form-control form-control-lg" placeholder="Your first name" required>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label class="form-label font-weight-semibold">Last Name *</label>
                                    <input type="text" v-model="form.lastName" class="form-control form-control-lg" placeholder="Your last name" required>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label class="form-label font-weight-semibold">Email *</label>
                                    <input type="email" v-model="form.email" class="form-control form-control-lg" placeholder="your@email.com" required>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label class="form-label font-weight-semibold">Phone</label>
                                    <input type="tel" v-model="form.phone" class="form-control form-control-lg" placeholder="+254 700 000 000">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label class="form-label font-weight-semibold">Company/Organization</label>
                                    <input type="text" v-model="form.company" class="form-control form-control-lg" placeholder="Your company name">
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label class="form-label font-weight-semibold">I am a... *</label>
                                    <select v-model="form.userType" class="form-select form-select-lg" required>
                                        <option value="">Select your category</option>
                                        <option value="hotel">Hotel / Lodge</option>
                                        <option value="tour-operator">Tour Operator</option>
                                        <option value="travel-agency">Travel Agency</option>
                                        <option value="tech-company">Technology Company</option>
                                        <option value="airbnb">Airbnb / Short-term Rental</option>
                                        <option value="corporate">Corporate Client</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label font-weight-semibold">Service Interest *</label>
                                <select v-model="form.service" class="form-select form-select-lg" required>
                                    <option value="">Select a service</option>
                                    <option value="tech-partnerships">Tech Partnerships</option>
                                    <option value="revenue-management">Revenue Management</option>
                                    <option value="digital-marketing">Digital Marketing</option>
                                    <option value="tours-travel">Tours & Travel</option>
                                    <option value="multiple">Multiple Services</option>
                                    <option value="general">General Inquiry</option>
                                </select>
                            </div>
                            <div class="mb-4">
                                <label class="form-label font-weight-semibold">Message *</label>
                                <textarea v-model="form.message" class="form-control" rows="5" placeholder="Tell us about your needs, challenges, or questions..." required></textarea>
                            </div>
                            <button type="submit"
                                class="btn btn-primary custom-btn-style-1 font-weight-semibold btn-px-5 btn-py-2 text-3-5">
                                <span>Send Message</span>
                                <i class="fas fa-paper-plane ms-2"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <!-- Quick Contact Options -->
            <div class="row mt-5 py-5 bg-color-grey rounded-lg">
                <div class="col-12 text-center mb-4">
                    <h3 class="font-weight-bold">Prefer to Reach Out Directly?</h3>
                </div>
                <div class="col-md-4 text-center mb-4 mb-md-0">
                    <div class="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style="width: 70px; height: 70px;">
                        <i class="fab fa-whatsapp text-white" style="font-size: 2rem;"></i>
                    </div>
                    <h5 class="font-weight-bold mb-2">WhatsApp</h5>
                    <a href="https://wa.me/254700000000" target="_blank" class="text-primary font-weight-semibold">Chat with Us</a>
                </div>
                <div class="col-md-4 text-center mb-4 mb-md-0">
                    <div class="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style="width: 70px; height: 70px;">
                        <i class="fas fa-calendar-alt text-white" style="font-size: 1.5rem;"></i>
                    </div>
                    <h5 class="font-weight-bold mb-2">Schedule a Call</h5>
                    <a href="#" class="text-primary font-weight-semibold">Book a Meeting</a>
                </div>
                <div class="col-md-4 text-center">
                    <div class="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style="width: 70px; height: 70px;">
                        <i class="fas fa-headset text-white" style="font-size: 1.5rem;"></i>
                    </div>
                    <h5 class="font-weight-bold mb-2">Support</h5>
                    <a href="mailto:support@persuitconsultants.com" class="text-primary font-weight-semibold">Get Help</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
useHead({
    title: 'Contact Us - PERSUIT Consultants | Get in Touch'
})

const form = ref({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    userType: '',
    service: '',
    message: ''
})

const submitForm = () => {
    alert(`Thank you, ${form.value.firstName}! Your message has been received. We'll get back to you within 24 hours.`)
    // Reset form
    form.value = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        userType: '',
        service: '',
        message: ''
    }
}
</script>
