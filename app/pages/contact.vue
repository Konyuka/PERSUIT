<template>
    <div>
        <!-- Page Header -->
        <section class="page-header page-header-modern bg-color-dark py-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 align-self-center p-static order-2 text-center">
                        <h1 class="text-10 font-weight-bold text-color-light">Contact Us</h1>
                        <span class="sub-title text-color-light">Get in touch with our team</span>
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
                    <h2
                        class="custom-highlight-text-1 d-inline-block line-height-5 text-4 positive-ls-3 font-weight-medium text-color-primary mb-2">
                        GET IN TOUCH</h2>
                    <h3 class="text-7 line-height-3 text-transform-none font-weight-semibold mb-4">We'd Love to Hear
                        From You</h3>

                    <div class="d-flex align-items-start mb-4">
                        <div class="bg-color-primary rounded-circle p-3 me-3">
                            <i class="fas fa-map-marker-alt text-color-light"></i>
                        </div>
                        <div>
                            <h5 class="font-weight-semibold mb-1">Our Office</h5>
                            <p class="mb-0">123 Business Street<br>New York, NY 10001</p>
                        </div>
                    </div>

                    <div class="d-flex align-items-start mb-4">
                        <div class="bg-color-primary rounded-circle p-3 me-3">
                            <i class="fas fa-phone text-color-light"></i>
                        </div>
                        <div>
                            <h5 class="font-weight-semibold mb-1">Phone</h5>
                            <p class="mb-0"><a href="tel:8001234567">(800) 123-4567</a></p>
                        </div>
                    </div>

                    <div class="d-flex align-items-start mb-4">
                        <div class="bg-color-primary rounded-circle p-3 me-3">
                            <i class="fas fa-envelope text-color-light"></i>
                        </div>
                        <div>
                            <h5 class="font-weight-semibold mb-1">Email</h5>
                            <p class="mb-0"><a href="mailto:info@pursuit.com">info@pursuit.com</a></p>
                        </div>
                    </div>

                    <div class="d-flex align-items-start">
                        <div class="bg-color-primary rounded-circle p-3 me-3">
                            <i class="fas fa-clock text-color-light"></i>
                        </div>
                        <div>
                            <h5 class="font-weight-semibold mb-1">Business Hours</h5>
                            <p class="mb-0">Mon - Fri: 9:00 AM - 6:00 PM<br>Sat: 10:00 AM - 4:00 PM</p>
                        </div>
                    </div>
                </div>

                <!-- Contact Form -->
                <div class="col-lg-8">
                    <div class="card border-0 shadow p-4">
                        <h4 class="font-weight-semibold mb-4">Send Us a Message</h4>
                        <form @submit.prevent="submitForm">
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label class="form-label font-weight-semibold">First Name *</label>
                                    <input type="text" v-model="form.firstName" class="form-control" required>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label class="form-label font-weight-semibold">Last Name *</label>
                                    <input type="text" v-model="form.lastName" class="form-control" required>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label class="form-label font-weight-semibold">Email *</label>
                                    <input type="email" v-model="form.email" class="form-control" required>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label class="form-label font-weight-semibold">Phone</label>
                                    <input type="tel" v-model="form.phone" class="form-control">
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label font-weight-semibold">Subject *</label>
                                <select v-model="form.subject" class="form-select" required>
                                    <option value="">Select a subject</option>
                                    <option value="general">General Inquiry</option>
                                    <option value="services">Services</option>
                                    <option value="partnership">Partnership</option>
                                    <option value="support">Support</option>
                                </select>
                            </div>
                            <div class="mb-4">
                                <label class="form-label font-weight-semibold">Message *</label>
                                <textarea v-model="form.message" class="form-control" rows="5" required></textarea>
                            </div>
                            <button type="submit"
                                class="btn btn-primary custom-btn-style-1 font-weight-semibold btn-px-4 btn-py-2 text-3-5">
                                <span>Send Message</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
useHead({
    title: 'Contact Us - PURSUIT'
})

const form = ref({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
})

const submitForm = () => {
    alert('Thank you for your message! We will get back to you soon.')
    // Reset form
    form.value = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    }
}
</script>
