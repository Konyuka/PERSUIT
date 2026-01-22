<template>
    <div>
        <!-- Hero Section -->
        <section class="page-header py-5 position-relative"
            style="background: linear-gradient(135deg, #0d6efd 0%, #0a58ca 100%); min-height: 400px;">
            <div class="container">
                <div class="row align-items-center py-5">
                    <div class="col-lg-7">
                        <span class="badge bg-light text-primary mb-3 px-3 py-2">Our Services</span>
                        <h1 class="text-11 font-weight-bold text-white mb-4">Technology Partnerships</h1>
                        <p class="text-4 text-white opacity-8 mb-4">
                            We bridge the gap between international hospitality technology providers and 
                            East African businesses—enabling seamless market entry and successful adoption.
                        </p>
                        <div class="d-flex gap-3">
                            <NuxtLink to="/contact" class="btn btn-light font-weight-semibold px-4 py-3">
                                <i class="fas fa-handshake me-2"></i> Partner With Us
                            </NuxtLink>
                            <a href="#learn-more" class="btn btn-outline-light font-weight-semibold px-4 py-3">
                                Learn More <i class="fas fa-arrow-down ms-2"></i>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-5 text-center d-none d-lg-block">
                        <div class="position-relative">
                            <div class="bg-white rounded-lg p-4 shadow-lg" style="transform: rotate(-3deg);">
                                <i class="fas fa-handshake text-primary" style="font-size: 120px;"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Breadcrumb -->
        <div class="container py-2">
            <ul class="breadcrumb font-weight-semibold text-3-5">
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/services">Services</NuxtLink></li>
                <li class="active">Tech Partnerships</li>
            </ul>
        </div>

        <!-- Overview Section -->
        <section id="learn-more" class="py-5">
            <div class="container">
                <div class="row align-items-center py-4">
                    <div class="col-lg-6 mb-4 mb-lg-0">
                        <img src="/img/demos/business-consulting-3/services/services-1.jpg" 
                            class="img-fluid rounded-lg shadow" alt="Technology Partnerships" />
                    </div>
                    <div class="col-lg-6">
                        <span class="d-block text-color-primary font-weight-bold text-3 positive-ls-2 mb-2">WHAT WE DO</span>
                        <h2 class="text-8 font-weight-bold mb-4">Connecting Global Tech with Local Hospitality</h2>
                        <p class="text-4 mb-4">
                            Entering the East African hospitality market can be challenging for international technology 
                            companies. Local businesses often struggle to find and evaluate the right tech solutions. 
                            We solve both problems.
                        </p>
                        <div class="row">
                            <div class="col-6">
                                <div class="d-flex align-items-center mb-3">
                                    <i class="fas fa-check-circle text-primary text-4 me-2"></i>
                                    <span>Market Entry Strategy</span>
                                </div>
                                <div class="d-flex align-items-center mb-3">
                                    <i class="fas fa-check-circle text-primary text-4 me-2"></i>
                                    <span>Partner Identification</span>
                                </div>
                                <div class="d-flex align-items-center mb-3">
                                    <i class="fas fa-check-circle text-primary text-4 me-2"></i>
                                    <span>Integration Support</span>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="d-flex align-items-center mb-3">
                                    <i class="fas fa-check-circle text-primary text-4 me-2"></i>
                                    <span>Training Programs</span>
                                </div>
                                <div class="d-flex align-items-center mb-3">
                                    <i class="fas fa-check-circle text-primary text-4 me-2"></i>
                                    <span>Ongoing Support</span>
                                </div>
                                <div class="d-flex align-items-center mb-3">
                                    <i class="fas fa-check-circle text-primary text-4 me-2"></i>
                                    <span>Local Representation</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Two Sides Section -->
        <section class="py-5 bg-light">
            <div class="container">
                <div class="row justify-content-center mb-5">
                    <div class="col-lg-8 text-center">
                        <span class="d-block text-color-primary font-weight-bold text-3 positive-ls-2 mb-2">DUAL VALUE</span>
                        <h2 class="text-8 font-weight-bold mb-3">Two-Sided Partnership Model</h2>
                        <p class="text-4 text-muted">We serve both sides of the technology-hospitality equation.</p>
                    </div>
                </div>
                
                <div class="row">
                    <!-- For Tech Companies -->
                    <div class="col-lg-6 mb-4">
                        <div class="card border-0 shadow h-100">
                            <div class="card-header bg-primary text-white py-4">
                                <h4 class="mb-0 font-weight-bold">
                                    <i class="fas fa-laptop-code me-2"></i> For Technology Companies
                                </h4>
                            </div>
                            <div class="card-body p-4">
                                <p class="text-muted mb-4">
                                    Looking to enter the East African hospitality market? We provide the local expertise 
                                    and connections you need to succeed.
                                </p>
                                <ul class="list-unstyled">
                                    <li class="d-flex mb-3">
                                        <i class="fas fa-arrow-right text-primary me-3 mt-1"></i>
                                        <div>
                                            <strong>Market Intelligence</strong>
                                            <p class="text-muted mb-0 text-3">Deep insights into local hospitality needs and buying behavior</p>
                                        </div>
                                    </li>
                                    <li class="d-flex mb-3">
                                        <i class="fas fa-arrow-right text-primary me-3 mt-1"></i>
                                        <div>
                                            <strong>Local Representation</strong>
                                            <p class="text-muted mb-0 text-3">On-ground presence for sales, demos, and relationship building</p>
                                        </div>
                                    </li>
                                    <li class="d-flex mb-3">
                                        <i class="fas fa-arrow-right text-primary me-3 mt-1"></i>
                                        <div>
                                            <strong>Customer Acquisition</strong>
                                            <p class="text-muted mb-0 text-3">Warm introductions to qualified hotels and travel companies</p>
                                        </div>
                                    </li>
                                    <li class="d-flex mb-3">
                                        <i class="fas fa-arrow-right text-primary me-3 mt-1"></i>
                                        <div>
                                            <strong>Implementation Support</strong>
                                            <p class="text-muted mb-0 text-3">On-site deployment and staff training</p>
                                        </div>
                                    </li>
                                    <li class="d-flex">
                                        <i class="fas fa-arrow-right text-primary me-3 mt-1"></i>
                                        <div>
                                            <strong>Ongoing Support</strong>
                                            <p class="text-muted mb-0 text-3">Local customer success and technical support</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <!-- For Hospitality Businesses -->
                    <div class="col-lg-6 mb-4">
                        <div class="card border-0 shadow h-100">
                            <div class="card-header bg-dark text-white py-4">
                                <h4 class="mb-0 font-weight-bold">
                                    <i class="fas fa-hotel me-2"></i> For Hotels & Travel Companies
                                </h4>
                            </div>
                            <div class="card-body p-4">
                                <p class="text-muted mb-4">
                                    Need the right technology but don't know where to start? We help you find, 
                                    implement, and maximize hospitality tech solutions.
                                </p>
                                <ul class="list-unstyled">
                                    <li class="d-flex mb-3">
                                        <i class="fas fa-arrow-right text-dark me-3 mt-1"></i>
                                        <div>
                                            <strong>Needs Assessment</strong>
                                            <p class="text-muted mb-0 text-3">Understand your operational challenges and goals</p>
                                        </div>
                                    </li>
                                    <li class="d-flex mb-3">
                                        <i class="fas fa-arrow-right text-dark me-3 mt-1"></i>
                                        <div>
                                            <strong>Vendor Evaluation</strong>
                                            <p class="text-muted mb-0 text-3">Access to vetted international tech providers</p>
                                        </div>
                                    </li>
                                    <li class="d-flex mb-3">
                                        <i class="fas fa-arrow-right text-dark me-3 mt-1"></i>
                                        <div>
                                            <strong>Negotiation Support</strong>
                                            <p class="text-muted mb-0 text-3">Get the best terms and pricing for your business</p>
                                        </div>
                                    </li>
                                    <li class="d-flex mb-3">
                                        <i class="fas fa-arrow-right text-dark me-3 mt-1"></i>
                                        <div>
                                            <strong>Implementation Management</strong>
                                            <p class="text-muted mb-0 text-3">Project management from contract to go-live</p>
                                        </div>
                                    </li>
                                    <li class="d-flex">
                                        <i class="fas fa-arrow-right text-dark me-3 mt-1"></i>
                                        <div>
                                            <strong>Staff Training</strong>
                                            <p class="text-muted mb-0 text-3">Ensure your team can fully utilize the technology</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Technology Categories -->
        <section class="py-5">
            <div class="container">
                <div class="row justify-content-center mb-5">
                    <div class="col-lg-8 text-center">
                        <span class="d-block text-color-primary font-weight-bold text-3 positive-ls-2 mb-2">OUR EXPERTISE</span>
                        <h2 class="text-8 font-weight-bold mb-3">Technology Categories We Cover</h2>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-lg-3 col-md-6 mb-4" v-for="tech in techCategories" :key="tech.name">
                        <div class="card border-0 shadow-sm h-100 text-center p-4">
                            <div class="rounded-circle bg-primary bg-opacity-10 d-inline-flex align-items-center justify-content-center mx-auto mb-3"
                                style="width: 70px; height: 70px;">
                                <i :class="tech.icon" class="text-primary text-5"></i>
                            </div>
                            <h5 class="font-weight-bold mb-2">{{ tech.name }}</h5>
                            <p class="text-muted text-3 mb-0">{{ tech.desc }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="py-5" style="background: linear-gradient(135deg, #0d6efd 0%, #0a58ca 100%);">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-8 mb-4 mb-lg-0">
                        <h3 class="text-7 font-weight-bold text-white mb-2">Ready to Explore Technology Partnerships?</h3>
                        <p class="text-4 text-white opacity-8 mb-0">
                            Whether you're a tech company or a hospitality business, let's discuss how we can help you succeed.
                        </p>
                    </div>
                    <div class="col-lg-4 text-lg-end">
                        <NuxtLink to="/contact" class="btn btn-light btn-lg font-weight-semibold px-5 py-3">
                            Get Started <i class="fas fa-arrow-right ms-2"></i>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
useHead({
    title: 'Technology Partnerships - PERSUIT Consultants | Hospitality Tech Integration'
})

const techCategories = [
    { name: 'Property Management', icon: 'fas fa-building', desc: 'PMS, POS & hotel operations systems' },
    { name: 'Revenue Management', icon: 'fas fa-chart-line', desc: 'Pricing optimization & forecasting tools' },
    { name: 'Channel Management', icon: 'fas fa-network-wired', desc: 'OTA connectivity & distribution' },
    { name: 'CRM & Marketing', icon: 'fas fa-users', desc: 'Guest relationship & marketing automation' },
    { name: 'Booking Engines', icon: 'fas fa-calendar-check', desc: 'Direct booking & reservation systems' },
    { name: 'Payment Solutions', icon: 'fas fa-credit-card', desc: 'Payment processing & financial tools' },
    { name: 'Guest Experience', icon: 'fas fa-concierge-bell', desc: 'Mobile apps & guest engagement' },
    { name: 'Business Intelligence', icon: 'fas fa-chart-bar', desc: 'Analytics & reporting platforms' }
]
</script>
