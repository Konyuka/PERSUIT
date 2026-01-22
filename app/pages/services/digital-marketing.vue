<template>
    <div>
        <!-- Hero Section -->
        <section class="page-header py-5 position-relative"
            style="background: linear-gradient(135deg, #6f42c1 0%, #5a2d9e 100%); min-height: 400px;">
            <div class="container">
                <div class="row align-items-center py-5">
                    <div class="col-lg-7">
                        <span class="badge bg-light text-purple mb-3 px-3 py-2" style="color: #6f42c1 !important;">Our Services</span>
                        <h1 class="text-11 font-weight-bold text-white mb-4">Digital Marketing</h1>
                        <p class="text-4 text-white opacity-8 mb-4">
                            Full-stack digital marketing solutions designed specifically for hospitality businesses—
                            from SEO and social media to reputation management and direct booking optimization.
                        </p>
                        <div class="d-flex gap-3">
                            <NuxtLink to="/contact" class="btn btn-light font-weight-semibold px-4 py-3">
                                <i class="fas fa-rocket me-2"></i> Grow Your Brand
                            </NuxtLink>
                            <a href="#learn-more" class="btn btn-outline-light font-weight-semibold px-4 py-3">
                                Learn More <i class="fas fa-arrow-down ms-2"></i>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-5 text-center d-none d-lg-block">
                        <div class="position-relative">
                            <div class="bg-white rounded-lg p-4 shadow-lg" style="transform: rotate(3deg);">
                                <i class="fas fa-bullhorn" style="font-size: 120px; color: #6f42c1;"></i>
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
                <li class="active">Digital Marketing</li>
            </ul>
        </div>

        <!-- Overview Section -->
        <section id="learn-more" class="py-5">
            <div class="container">
                <div class="row align-items-center py-4">
                    <div class="col-lg-6 order-lg-2 mb-4 mb-lg-0">
                        <img src="/img/demos/business-consulting-3/services/services-4.jpg" 
                            class="img-fluid rounded-lg shadow" alt="Digital Marketing" />
                    </div>
                    <div class="col-lg-6 order-lg-1">
                        <span class="d-block font-weight-bold text-3 positive-ls-2 mb-2" style="color: #6f42c1;">THE OPPORTUNITY</span>
                        <h2 class="text-8 font-weight-bold mb-4">Stand Out in a Crowded Market</h2>
                        <p class="text-4 mb-4">
                            Today's travelers research online before booking. Without a strong digital presence, 
                            you're invisible to potential guests. We help hospitality businesses build compelling 
                            brands that attract, engage, and convert.
                        </p>
                        <div class="bg-light rounded p-4">
                            <h5 class="font-weight-bold mb-3">Digital Marketing Challenges We Solve:</h5>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="d-flex align-items-center mb-2">
                                        <i class="fas fa-check-circle me-2" style="color: #6f42c1;"></i>
                                        <span>Low website traffic</span>
                                    </div>
                                    <div class="d-flex align-items-center mb-2">
                                        <i class="fas fa-check-circle me-2" style="color: #6f42c1;"></i>
                                        <span>Poor online reviews</span>
                                    </div>
                                    <div class="d-flex align-items-center mb-2">
                                        <i class="fas fa-check-circle me-2" style="color: #6f42c1;"></i>
                                        <span>OTA dependency</span>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="d-flex align-items-center mb-2">
                                        <i class="fas fa-check-circle me-2" style="color: #6f42c1;"></i>
                                        <span>Weak social presence</span>
                                    </div>
                                    <div class="d-flex align-items-center mb-2">
                                        <i class="fas fa-check-circle me-2" style="color: #6f42c1;"></i>
                                        <span>Low brand awareness</span>
                                    </div>
                                    <div class="d-flex align-items-center mb-2">
                                        <i class="fas fa-check-circle me-2" style="color: #6f42c1;"></i>
                                        <span>Poor conversion rates</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Services Grid -->
        <section class="py-5 bg-light">
            <div class="container">
                <div class="row justify-content-center mb-5">
                    <div class="col-lg-8 text-center">
                        <span class="d-block font-weight-bold text-3 positive-ls-2 mb-2" style="color: #6f42c1;">FULL-STACK SERVICES</span>
                        <h2 class="text-8 font-weight-bold mb-3">Digital Marketing Solutions</h2>
                        <p class="text-4 text-muted">Comprehensive digital marketing tailored for hospitality businesses.</p>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-lg-4 col-md-6 mb-4" v-for="service in services" :key="service.title">
                        <div class="card border-0 shadow h-100">
                            <div class="card-body p-4">
                                <div class="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                                    style="width: 60px; height: 60px; background-color: rgba(111, 66, 193, 0.1);">
                                    <i :class="service.icon" class="text-4" style="color: #6f42c1;"></i>
                                </div>
                                <h5 class="font-weight-bold mb-3">{{ service.title }}</h5>
                                <p class="text-muted text-3 mb-3">{{ service.desc }}</p>
                                <ul class="list-unstyled text-3">
                                    <li v-for="item in service.items" :key="item" class="mb-1">
                                        <i class="fas fa-angle-right me-2" style="color: #6f42c1;"></i>{{ item }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- OTA Optimization Section -->
        <section class="py-5">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 mb-4 mb-lg-0">
                        <span class="d-block font-weight-bold text-3 positive-ls-2 mb-2" style="color: #6f42c1;">OTA OPTIMIZATION</span>
                        <h2 class="text-8 font-weight-bold mb-4">Maximize Your OTA Performance</h2>
                        <p class="text-4 mb-4">
                            While we help you drive direct bookings, we also ensure you're getting the most 
                            from OTA partnerships. Our optimization strategies improve your visibility and 
                            conversion rates on major booking platforms.
                        </p>
                        
                        <div class="row">
                            <div class="col-md-6 mb-3" v-for="ota in otas" :key="ota.name">
                                <div class="d-flex align-items-center p-3 bg-light rounded">
                                    <i :class="ota.icon" class="text-4 me-3" style="color: #6f42c1;"></i>
                                    <span class="font-weight-semibold">{{ ota.name }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="card border-0 shadow">
                            <div class="card-body p-4">
                                <h5 class="font-weight-bold mb-4">OTA Optimization Includes:</h5>
                                <ul class="list-unstyled">
                                    <li class="d-flex mb-3">
                                        <i class="fas fa-check-circle me-3 mt-1" style="color: #6f42c1;"></i>
                                        <div>
                                            <strong>Profile Optimization</strong>
                                            <p class="text-muted mb-0 text-3">Compelling descriptions, quality photos, amenity listings</p>
                                        </div>
                                    </li>
                                    <li class="d-flex mb-3">
                                        <i class="fas fa-check-circle me-3 mt-1" style="color: #6f42c1;"></i>
                                        <div>
                                            <strong>Review Management</strong>
                                            <p class="text-muted mb-0 text-3">Response strategies, rating improvement tactics</p>
                                        </div>
                                    </li>
                                    <li class="d-flex mb-3">
                                        <i class="fas fa-check-circle me-3 mt-1" style="color: #6f42c1;"></i>
                                        <div>
                                            <strong>Pricing Strategies</strong>
                                            <p class="text-muted mb-0 text-3">Competitive positioning, promotional campaigns</p>
                                        </div>
                                    </li>
                                    <li class="d-flex">
                                        <i class="fas fa-check-circle me-3 mt-1" style="color: #6f42c1;"></i>
                                        <div>
                                            <strong>Performance Analytics</strong>
                                            <p class="text-muted mb-0 text-3">Conversion tracking, competitor benchmarking</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Results Section -->
        <section class="py-5" style="background: linear-gradient(135deg, #6f42c1 0%, #5a2d9e 100%);">
            <div class="container">
                <div class="row justify-content-center mb-5">
                    <div class="col-lg-8 text-center">
                        <span class="d-block text-white font-weight-bold text-3 positive-ls-2 mb-2 opacity-75">PROVEN RESULTS</span>
                        <h2 class="text-8 font-weight-bold text-white mb-3">What Our Clients Achieve</h2>
                    </div>
                </div>
                
                <div class="row text-center">
                    <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
                        <h3 class="text-white font-weight-bold text-11 mb-2">+150%</h3>
                        <p class="text-white opacity-75 mb-0">Website Traffic Increase</p>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
                        <h3 class="text-white font-weight-bold text-11 mb-2">+80%</h3>
                        <p class="text-white opacity-75 mb-0">Direct Booking Growth</p>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h3 class="text-white font-weight-bold text-11 mb-2">4.5→4.8</h3>
                        <p class="text-white opacity-75 mb-0">Average Rating Improvement</p>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <h3 class="text-white font-weight-bold text-11 mb-2">+200%</h3>
                        <p class="text-white opacity-75 mb-0">Social Media Engagement</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Process Section -->
        <section class="py-5">
            <div class="container">
                <div class="row justify-content-center mb-5">
                    <div class="col-lg-8 text-center">
                        <span class="d-block font-weight-bold text-3 positive-ls-2 mb-2" style="color: #6f42c1;">OUR APPROACH</span>
                        <h2 class="text-8 font-weight-bold mb-3">How We Work</h2>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-lg-3 col-md-6 mb-4" v-for="(step, index) in process" :key="step.title">
                        <div class="text-center">
                            <div class="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                                style="width: 60px; height: 60px; background-color: #6f42c1;">
                                <span class="font-weight-bold text-5 text-white">{{ index + 1 }}</span>
                            </div>
                            <h5 class="font-weight-bold mb-2">{{ step.title }}</h5>
                            <p class="text-muted text-3">{{ step.desc }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="py-5" style="background: linear-gradient(135deg, #6f42c1 0%, #5a2d9e 100%);">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-8 mb-4 mb-lg-0">
                        <h3 class="text-7 font-weight-bold text-white mb-2">Ready to Elevate Your Digital Presence?</h3>
                        <p class="text-4 text-white opacity-8 mb-0">
                            Get a free digital marketing audit and discover opportunities to grow your hospitality business online.
                        </p>
                    </div>
                    <div class="col-lg-4 text-lg-end">
                        <NuxtLink to="/contact" class="btn btn-light btn-lg font-weight-semibold px-5 py-3">
                            Free Audit <i class="fas fa-arrow-right ms-2"></i>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
useHead({
    title: 'Digital Marketing - PERSUIT Consultants | Hospitality Marketing Agency'
})

const services = [
    {
        title: 'Search Engine Optimization',
        desc: 'Get found by travelers searching for accommodations in your area.',
        icon: 'fas fa-search',
        items: ['Keyword research', 'On-page optimization', 'Local SEO', 'Content strategy']
    },
    {
        title: 'Paid Advertising',
        desc: 'Targeted campaigns that drive qualified traffic and bookings.',
        icon: 'fas fa-bullseye',
        items: ['Google Ads', 'Meta/Facebook Ads', 'Display advertising', 'Retargeting']
    },
    {
        title: 'Social Media Marketing',
        desc: 'Build an engaged community and showcase your property.',
        icon: 'fas fa-share-alt',
        items: ['Content creation', 'Community management', 'Influencer partnerships', 'Paid social']
    },
    {
        title: 'Content Marketing',
        desc: 'Compelling content that inspires travelers and drives action.',
        icon: 'fas fa-pen-fancy',
        items: ['Blog content', 'Video production', 'Photography', 'Email campaigns']
    },
    {
        title: 'Reputation Management',
        desc: 'Protect and enhance your online reputation across platforms.',
        icon: 'fas fa-star',
        items: ['Review monitoring', 'Response management', 'Rating improvement', 'Crisis management']
    },
    {
        title: 'Website Optimization',
        desc: 'Convert more visitors into guests with a high-performing website.',
        icon: 'fas fa-laptop',
        items: ['Conversion optimization', 'Booking engine integration', 'Mobile optimization', 'Speed optimization']
    }
]

const otas = [
    { name: 'Booking.com', icon: 'fas fa-globe' },
    { name: 'Expedia', icon: 'fas fa-plane-departure' },
    { name: 'TripAdvisor', icon: 'fas fa-star' },
    { name: 'Airbnb', icon: 'fas fa-home' },
    { name: 'Hotels.com', icon: 'fas fa-hotel' },
    { name: 'Google Hotels', icon: 'fab fa-google' }
]

const process = [
    { title: 'Audit', desc: 'Comprehensive analysis of your current digital presence and competitors' },
    { title: 'Strategy', desc: 'Custom digital marketing plan aligned with your business goals' },
    { title: 'Execute', desc: 'Implementation of campaigns across channels with ongoing optimization' },
    { title: 'Report', desc: 'Regular performance reporting with actionable insights and recommendations' }
]
</script>
