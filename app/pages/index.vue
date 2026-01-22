<template>
    <div>
        <!-- Hero Section with Parallax Background -->
        <section class="section section-height-3 section-with-shape-divider position-relative border-0 m-0"
            data-plugin-parallax data-plugin-options="{'speed': 1.5, 'parallaxHeight': '120%'}"
            data-image-src="/img/demos/business-consulting-3/backgrounds/background-1.jpg">
            <!-- Woman Image on Right -->
            <img src="/img/demos/business-consulting-3/backgrounds/background-woman.png" 
                class="img-fluid position-absolute top-0 end-0 d-none d-md-block appear-animation" 
                data-appear-animation="fadeInUpShorter" 
                data-appear-animation-delay="1100" 
                alt="PERSUIT Consultant" 
                style="max-height: 100%; z-index: 2;" />
            
            <div class="container pb-5 pb-xl-0 mt-md-3 mb-5">
                <div class="row">
                    <div class="col-md-7 col-lg-12">
                        <div class="appear-animation" data-appear-animation="fadeInUpShorter"
                            data-appear-animation-delay="0">
                            <!-- Big Text with Image Background Fill -->
                            <h1 class="custom-text-background custom-big-font-size-1 text-14 font-weight-bold float-xl-end clearfix line-height-1 custom-ws-mobile-wrap ws-nowrap pb-2 mb-3 mb-xl-5"
                                style="background-image: url(/img/demos/business-consulting-3/backgrounds/text-background.jpg);">
                                PERSUIT CONSULTANTS</h1>
                        </div>
                    </div>
                </div>
                <div class="row pb-5 mb-5">
                    <div class="col-md-7 col-xl-5 pb-5 pb-xl-0 mb-5">
                        <strong class="d-block font-weight-semibold text-color-dark text-5-5 line-height-4 mb-3 pb-1 appear-animation" 
                            data-appear-animation="fadeInUpShorter" 
                            data-appear-animation-delay="500">
                            Bridging International Technology & 
                            <span class="custom-highlight-text-1 font-weight-bold">East African Hospitality!</span>
                        </strong>
                        <p class="text-3-5 mb-4 appear-animation" 
                            data-appear-animation="fadeInUpShorter" 
                            data-appear-animation-delay="750">
                            We connect global tech solutions with hotels, tour operators, and travel companies across East Africa—enabling digital transformation, 
                            boosting revenue, and building lasting partnerships. Our team of industry experts bridges the gap between cutting-edge international 
                            technology and the unique needs of the African hospitality market, ensuring seamless integration and sustainable growth.
                        </p>
                        <!-- Scroll Down Link -->
                        <a href="#aboutus" data-hash data-hash-offset="0" data-hash-offset-lg="100" 
                            class="d-inline-flex align-items-center text-decoration-none appear-animation" 
                            data-appear-animation="fadeInUpShorter" 
                            data-appear-animation-delay="1000">
                            <img width="30" height="30" src="/img/demos/business-consulting-3/icons/mouse.svg" 
                                alt="Scroll" class="svg-fill-color-primary me-2" />
                            <span class="text-color-primary font-weight-semibold">Scroll Down</span>
                        </a>
                    </div>
                </div>
            </div>
            <div class="shape-divider shape-divider-bottom" style="height: 212px;">
                <div class="shape-divider-horizontal-animation shape-divider-horizontal-animation-to-left">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1920 212"
                        preserveAspectRatio="xMinYMin">
                        <polygon fill="#F3F3F3" points="0,75 479,161 1357,28 1701,56 1920,26 1920,213 0,212 " />
                        <polygon fill="#FFFFFF" points="0,91 481,177 1358,44 1702,72 1920,42 1920,212 0,212 " />
                    </svg>
                </div>
            </div>
        </section>

        <!-- Services Cards Section - Swiper Carousel -->
        <div class="container" style="margin-top: -310px; position: relative; z-index: 10;">
            <div class="row justify-content-end">
                <div class="col-12 col-md-8 col-lg-7">
                    <ClientOnly>
                        <ServicesCarousel />
                        <template #fallback>
                            <div class="row">
                                <div class="col-6">
                                    <div class="card border-0 shadow" style="min-height: 320px;"></div>
                                </div>
                                <div class="col-6">
                                    <div class="card border-0 shadow" style="min-height: 320px;"></div>
                                </div>
                            </div>
                        </template>
                    </ClientOnly>
                </div>
            </div>

            <!-- About Us Section -->
            <div id="aboutus" class="row align-items-xl-center pt-4 mt-5">
                <div class="col-md-10 col-lg-6 mb-5 mb-lg-0">
                    <div class="row row-gutter-sm">
                        <div class="col-6">
                            <img src="/img/demos/business-consulting-3/generic/generic-1.jpg"
                                class="img-fluid box-shadow-5 rounded" alt="Hospitality consulting" />
                        </div>
                        <div class="col-6">
                            <img src="/img/demos/business-consulting-3/generic/generic-2.jpg"
                                class="img-fluid box-shadow-5 rounded mb-4" alt="Technology partnerships" />
                            <img src="/img/demos/business-consulting-3/generic/generic-3.jpg"
                                class="img-fluid box-shadow-5 rounded" alt="East Africa travel" />
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 ps-lg-4 ps-xl-5">
                    <h2
                        class="custom-highlight-text-1 d-inline-block line-height-5 text-4 positive-ls-3 font-weight-medium text-color-primary mb-2">
                        ABOUT PERSUIT CONSULTANTS</h2>
                    <h3
                        class="text-9 text-lg-5 text-xl-9 line-height-3 text-transform-none font-weight-bold mb-4 mb-lg-3 mb-xl-4">
                        Your Bridge to Hospitality Technology Excellence in East Africa</h3>
                    <p class="text-3-5 pb-1 mb-4 mb-lg-2 mb-xl-4">
                        We specialize in connecting international technology providers with East African hospitality businesses. From hotels and lodges to tour operators and travel agencies—we facilitate partnerships, drive technology adoption, and deliver measurable results.
                    </p>
                    <div class="row align-items-center pb-2 mb-4 mb-lg-1 mb-xl-4">
                        <div class="col-6">
                            <div class="d-flex align-items-center">
                                <div class="bg-primary rounded-circle p-3 me-3">
                                    <i class="fas fa-globe-africa text-white"></i>
                                </div>
                                <div>
                                    <strong class="d-block font-weight-bold text-7 text-color-primary">50+</strong>
                                    <span class="text-3 text-muted">Partner Companies</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="d-flex align-items-center">
                                <div class="bg-primary rounded-circle p-3 me-3">
                                    <i class="fas fa-hotel text-white"></i>
                                </div>
                                <div>
                                    <strong class="d-block font-weight-bold text-7 text-color-primary">100+</strong>
                                    <span class="text-3 text-muted">Hotels & Agencies</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <NuxtLink to="/about"
                            class="btn btn-primary custom-btn-style-1 font-weight-semibold btn-px-4 btn-py-2 text-3-5">
                            <span>Learn More About Us</span>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>

        <!-- What We Do Section - All 4 Services -->
        <section class="section section-height-4 section-with-shape-divider bg-color-grey border-0 pb-5 m-0 mt-5">
            <div class="shape-divider" style="height: 123px;">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1920 123"
                    preserveAspectRatio="xMinYMin">
                    <polygon fill="#F4F4F4" points="0,90 221,60 563,88 931,35 1408,93 1920,41 1920,-1 0,-1 " />
                    <polygon fill="#FFFFFF" points="0,75 219,44 563,72 930,19 1408,77 1920,25 1920,-1 0,-1 " />
                </svg>
            </div>
            <div class="container mt-4">
                <div class="row justify-content-center">
                    <div class="col-lg-11 col-xl-10 text-center">
                        <h2
                            class="custom-highlight-text-1 d-inline-block line-height-5 text-4 positive-ls-3 font-weight-medium text-color-primary mb-2">
                            OUR SERVICES</h2>
                        <h3 class="text-9 line-height-3 text-transform-none font-weight-bold mb-3 pb-1">
                            Comprehensive Solutions for Hospitality Excellence</h3>
                        <p class="text-3-5 pb-3 mb-4">
                            From technology integration to revenue optimization, we provide end-to-end consulting services tailored for the East African hospitality industry.
                        </p>
                    </div>
                </div>
                <div class="row row-gutter-sm justify-content-center mb-5">
                    <div class="col-sm-6 col-lg-3 mb-4" v-for="service in services" :key="service.title">
                        <NuxtLink :to="service.link" class="custom-link-hover-effects text-decoration-none">
                            <div class="card box-shadow-4 h-100 border-0">
                                <div class="card-body text-center p-4">
                                    <div class="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style="width: 70px; height: 70px;">
                                        <i :class="service.icon" class="text-white" style="font-size: 1.5rem;"></i>
                                    </div>
                                    <h4 class="font-weight-bold text-5 mb-3">{{ service.title }}</h4>
                                    <p class="text-3 text-muted mb-3">{{ service.description }}</p>
                                    <div class="mt-auto">
                                        <span class="text-color-primary font-weight-semibold">
                                            Learn More <i class="fas fa-arrow-right ms-1"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </NuxtLink>
                    </div>
                </div>
                <div class="row">
                    <div class="col text-center">
                        <NuxtLink to="/services"
                            class="btn btn-primary custom-btn-style-1 font-weight-semibold btn-px-4 btn-py-2 text-3-5">
                            <span>View All Services</span>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </section>

        <!-- Target Industries Section -->
        <section class="section bg-white border-0 m-0 py-5">
            <div class="container py-4">
                <div class="row justify-content-center mb-5">
                    <div class="col-lg-8 text-center">
                        <h2 class="custom-highlight-text-1 d-inline-block line-height-5 text-4 positive-ls-3 font-weight-medium text-color-primary mb-2">
                            WHO WE SERVE</h2>
                        <h3 class="text-9 line-height-3 text-transform-none font-weight-bold mb-3">
                            Industries We Specialize In</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 col-lg-3 mb-4" v-for="industry in industries" :key="industry.name">
                        <div class="card border-0 shadow-sm h-100 text-center p-4">
                            <div class="mx-auto mb-3" style="width: 60px; height: 60px;">
                                <i :class="industry.icon" class="text-color-primary" style="font-size: 2.5rem;"></i>
                            </div>
                            <h5 class="font-weight-bold mb-2">{{ industry.name }}</h5>
                            <p class="text-3 text-muted mb-0">{{ industry.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Why Us Section -->
        <section class="section section-height-4 section-with-shape-divider position-relative bg-dark border-0 m-0">
            <div class="shape-divider shape-divider-reverse-x z-index-3" style="height: 102px;">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1920 102"
                    preserveAspectRatio="xMinYMin">
                    <polygon fill="#FFFFFF" points="0,65 220,35 562,63 931,10 1410,68 1920,16 1920,103 0,103 " />
                    <polygon fill="#F8F9FA" points="0,82 219,51 562,78 931,26 1409,83 1920,32 1920,103 0,103 " />
                </svg>
            </div>
            <div class="container position-relative z-index-3 pt-5 mt-5">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <h2
                            class="custom-text-background custom-big-font-size-1 text-15 font-weight-bold clearfix line-height-1 pe-xl-5 me-3 mb-0 d-none d-lg-block text-white-50" style="opacity: 0.1;">
                            WHY US</h2>
                    </div>
                    <div class="col-lg-6">
                        <h2
                            class="custom-highlight-text-1 d-inline-block line-height-5 text-4 positive-ls-3 font-weight-medium text-color-primary mb-2">
                            WHY CHOOSE PERSUIT</h2>
                        <h3
                            class="text-9 line-height-3 text-transform-none font-weight-bold text-color-light ls-0 mb-3 pb-1">
                            The East Africa Hospitality Tech Experts</h3>
                        <p class="text-3-5 text-color-light opacity-8 pb-2 mb-4">
                            We understand both sides of the equation—international tech companies seeking market entry and local hospitality businesses needing digital transformation.
                        </p>
                        <ul class="list ps-0 pe-lg-5 mb-0">
                            <li class="d-flex align-items-start pb-1 mb-3" v-for="benefit in benefits" :key="benefit">
                                <i class="fas fa-check text-color-primary text-4 bg-light rounded-circle p-2"></i>
                                <span class="text-3-5 text-color-light ps-3">{{ benefit }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- Problems We Solve Section -->
        <section class="section bg-light border-0 m-0 py-5">
            <div class="container py-4">
                <div class="row justify-content-center mb-5">
                    <div class="col-lg-8 text-center">
                        <h2 class="custom-highlight-text-1 d-inline-block line-height-5 text-4 positive-ls-3 font-weight-medium text-color-primary mb-2">
                            PROBLEMS WE SOLVE</h2>
                        <h3 class="text-9 line-height-3 text-transform-none font-weight-bold mb-3">
                            Delivering Measurable Results</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 col-lg-4 mb-4" v-for="problem in problemsSolved" :key="problem.title">
                        <div class="card border-0 shadow-sm h-100">
                            <div class="card-body p-4">
                                <div class="d-flex align-items-center mb-3">
                                    <i :class="problem.icon" class="text-color-primary me-3" style="font-size: 1.5rem;"></i>
                                    <h5 class="font-weight-bold mb-0">{{ problem.title }}</h5>
                                </div>
                                <p class="text-3 text-muted mb-0">{{ problem.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Contact CTA Section -->
        <section class="section section-with-shape-divider position-relative border-0 m-0"
            style="background: linear-gradient(135deg, #1a2a3a 0%, #0d1b2a 100%);">
            <div class="shape-divider shape-divider-reverse-x z-index-3" style="height: 102px;">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1920 102"
                    preserveAspectRatio="xMinYMin">
                    <polygon fill="#F8F9FA" points="0,65 220,35 562,63 931,10 1410,68 1920,16 1920,103 0,103 " />
                    <polygon fill="#F3F4F6" points="0,82 219,51 562,78 931,26 1409,83 1920,32 1920,103 0,103 " />
                </svg>
            </div>
            <div class="container py-5">
                <div class="row align-items-center pt-5">
                    <div class="col-lg-7 py-4 my-2">
                        <h2
                            class="custom-highlight-text-1 d-inline-block line-height-5 text-4 positive-ls-3 font-weight-medium text-color-primary mb-2">
                            LET'S WORK TOGETHER</h2>
                        <h3
                            class="text-9 line-height-3 text-transform-none font-weight-bold text-color-light ls-0 mb-3 pb-1">
                            Ready to Transform Your Hospitality Business?</h3>
                        <p class="text-3-5 text-color-light opacity-8 pb-3 mb-4">
                            Whether you're a tech company looking to enter the East African market or a hospitality business seeking digital transformation, we're here to help you succeed.
                        </p>
                        <div class="d-flex flex-wrap gap-3">
                            <NuxtLink to="/contact"
                                class="btn btn-primary custom-btn-style-1 font-weight-semibold btn-px-4 btn-py-2 text-3-5">
                                <span>Start a Conversation</span>
                            </NuxtLink>
                            <a href="tel:+254700000000"
                                class="btn btn-outline-light font-weight-semibold btn-px-4 btn-py-2 text-3-5">
                                <i class="fas fa-phone me-2"></i>
                                <span>Call Us Now</span>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-5 text-center text-lg-end">
                        <div class="bg-white rounded-lg p-4 shadow-lg d-inline-block">
                            <h5 class="font-weight-bold mb-3">Quick Contact</h5>
                            <p class="mb-2"><i class="fas fa-envelope text-primary me-2"></i> info@persuitconsultants.com</p>
                            <p class="mb-2"><i class="fas fa-phone text-primary me-2"></i> +254 700 000 000</p>
                            <p class="mb-0"><i class="fas fa-map-marker-alt text-primary me-2"></i> Nairobi, Kenya</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
useHead({
    title: 'PERSUIT Consultants | Hospitality Technology & Revenue Management | East Africa'
})

const services = [
    {
        title: 'Tech Partnerships',
        description: 'Bridge between global tech solutions and East African hospitality businesses',
        icon: 'fas fa-handshake',
        link: '/services/tech-partnerships'
    },
    {
        title: 'Tours & Travel',
        description: 'Curated travel experiences for corporates, families, and groups',
        icon: 'fas fa-plane-departure',
        link: '/services/tours-travel'
    },
    {
        title: 'Revenue Management',
        description: 'Dynamic pricing, forecasting, and profitability optimization',
        icon: 'fas fa-chart-line',
        link: '/services/revenue-management'
    },
    {
        title: 'Digital Marketing',
        description: 'SEO, PPC, social media, and online reputation management',
        icon: 'fas fa-bullhorn',
        link: '/services/digital-marketing'
    }
]

const industries = [
    {
        name: 'Hotels & Lodges',
        description: 'From boutique hotels to safari lodges',
        icon: 'fas fa-hotel'
    },
    {
        name: 'Tour Operators',
        description: 'Safari and adventure tour companies',
        icon: 'fas fa-route'
    },
    {
        name: 'Travel Agencies',
        description: 'B2B and B2C travel agents',
        icon: 'fas fa-globe-africa'
    },
    {
        name: 'Airbnb & Apartments',
        description: 'Short-term rental operators',
        icon: 'fas fa-home'
    }
]

const benefits = [
    'Deep understanding of the East African hospitality market landscape',
    'Established relationships with international tech providers and local businesses',
    'End-to-end support from partnership facilitation to ongoing management',
    'Proven track record in technology adoption and revenue optimization',
    'Local presence with global perspective and best practices'
]

const problemsSolved = [
    {
        title: 'Partnership Friction',
        description: 'We speed up cross-border partnerships and ensure quality connections between tech companies and hospitality businesses.',
        icon: 'fas fa-link'
    },
    {
        title: 'Technology Adoption',
        description: 'Hotels and travel agents successfully adopt international tech tools without operational disruption.',
        icon: 'fas fa-laptop-code'
    },
    {
        title: 'Revenue Leakage',
        description: 'Higher occupancy, better pricing, and reduced distribution costs through smart revenue management.',
        icon: 'fas fa-money-bill-trend-up'
    },
    {
        title: 'Digital Visibility',
        description: 'Improved online presence, more direct bookings, and stronger brand awareness.',
        icon: 'fas fa-search'
    },
    {
        title: 'Market Entry Barriers',
        description: 'Tech companies gain vetted access to the East African hospitality market.',
        icon: 'fas fa-door-open'
    },
    {
        title: 'Training Gaps',
        description: 'Building capacity through workshops, onboarding, and continuous support.',
        icon: 'fas fa-graduation-cap'
    }
]
</script>
