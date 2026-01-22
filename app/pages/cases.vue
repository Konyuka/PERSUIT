<template>
    <div>
        <!-- Page Header -->
        <section class="page-header page-header-modern py-5 position-relative"
            style="background: linear-gradient(135deg, #1a2a3a 0%, #0d1b2a 100%);">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 align-self-center p-static order-2 text-center">
                        <h1 class="text-10 font-weight-bold text-color-light mb-2">Success Stories</h1>
                        <p class="text-color-light opacity-7 text-4 mb-0">Real Results for Hospitality & Technology Partners</p>
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
                <li class="active">Case Studies</li>
            </ul>
        </div>

        <!-- Cases Content -->
        <div class="container py-5 my-4">
            <div class="row justify-content-center mb-5">
                <div class="col-lg-8 text-center">
                    <span class="d-block text-color-primary font-weight-bold text-3 positive-ls-2 mb-2">CLIENT SUCCESS</span>
                    <h2 class="text-9 line-height-3 text-transform-none font-weight-bold mb-4">
                        Transforming Hospitality Businesses Across East Africa
                    </h2>
                    <p class="text-3-5 text-muted mb-0">
                        From boutique lodges to international hotel chains, from local tour operators to global tech companies—
                        see how we've helped businesses like yours achieve remarkable growth.
                    </p>
                </div>
            </div>

            <!-- Filter Buttons -->
            <div class="row mb-4">
                <div class="col-12 text-center">
                    <button v-for="filter in filters" :key="filter" @click="activeFilter = filter"
                        :class="['btn me-2 mb-2 px-4', activeFilter === filter ? 'btn-primary' : 'btn-outline-primary']">
                        {{ filter }}
                    </button>
                </div>
            </div>

            <!-- Cases Grid -->
            <div class="row">
                <div class="col-lg-4 col-md-6 mb-4" v-for="caseStudy in filteredCases" :key="caseStudy.id">
                    <div class="card border-0 shadow h-100 overflow-hidden">
                        <div class="card-img-top position-relative overflow-hidden">
                            <img :src="caseStudy.image" class="img-fluid w-100" :alt="caseStudy.title"
                                style="height: 220px; object-fit: cover; transition: transform 0.3s;" />
                            <div
                                class="position-absolute top-0 end-0 text-color-light px-3 py-2 m-3 font-weight-semibold text-2 rounded"
                                :style="{ backgroundColor: caseStudy.color }">
                                {{ caseStudy.industry }}
                            </div>
                            <div class="position-absolute bottom-0 start-0 end-0 p-3"
                                style="background: linear-gradient(transparent, rgba(0,0,0,0.7));">
                                <span class="badge bg-success me-2">{{ caseStudy.service }}</span>
                            </div>
                        </div>
                        <div class="card-body p-4">
                            <h4 class="font-weight-bold text-4 mb-2">{{ caseStudy.title }}</h4>
                            <p class="text-muted text-3 mb-3">{{ caseStudy.description }}</p>
                            
                            <!-- Key Metrics -->
                            <div class="border-top pt-3 mb-3">
                                <div class="row text-center">
                                    <div class="col-6">
                                        <span class="d-block font-weight-bold text-color-primary text-5">{{ caseStudy.metric1.value }}</span>
                                        <small class="text-muted">{{ caseStudy.metric1.label }}</small>
                                    </div>
                                    <div class="col-6">
                                        <span class="d-block font-weight-bold text-color-primary text-5">{{ caseStudy.metric2.value }}</span>
                                        <small class="text-muted">{{ caseStudy.metric2.label }}</small>
                                    </div>
                                </div>
                            </div>
                            
                            <a href="#"
                                class="btn btn-outline-primary btn-sm w-100 font-weight-semibold">
                                Read Full Story <i class="fas fa-arrow-right ms-2"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Testimonials -->
            <div class="row mt-5 py-5">
                <div class="col-12 text-center mb-5">
                    <span class="d-block text-color-primary font-weight-bold text-3 positive-ls-2 mb-2">TESTIMONIALS</span>
                    <h3 class="text-7 font-weight-bold">What Our Partners Say</h3>
                </div>
                <div class="col-lg-4 mb-4" v-for="testimonial in testimonials" :key="testimonial.name">
                    <div class="card border-0 shadow h-100">
                        <div class="card-body p-4">
                            <div class="text-warning mb-3">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <p class="text-3 mb-4 fst-italic">"{{ testimonial.quote }}"</p>
                            <div class="d-flex align-items-center">
                                <div class="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center me-3"
                                    style="width: 50px; height: 50px;">
                                    <span class="font-weight-bold">{{ testimonial.initials }}</span>
                                </div>
                                <div>
                                    <h6 class="font-weight-bold mb-0">{{ testimonial.name }}</h6>
                                    <small class="text-muted">{{ testimonial.role }}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Stats Section -->
            <div class="row mt-5 py-5 rounded-lg" style="background: linear-gradient(135deg, #1a2a3a 0%, #0d1b2a 100%);">
                <div class="col-lg-3 col-md-6 mb-4 mb-lg-0 text-center">
                    <h2 class="text-color-primary font-weight-bold text-12 mb-2">100+</h2>
                    <p class="font-weight-semibold text-4 text-color-light mb-0">Hotels & Lodges</p>
                    <small class="text-color-light opacity-7">Served across East Africa</small>
                </div>
                <div class="col-lg-3 col-md-6 mb-4 mb-lg-0 text-center">
                    <h2 class="text-color-primary font-weight-bold text-12 mb-2">50+</h2>
                    <p class="font-weight-semibold text-4 text-color-light mb-0">Tech Partners</p>
                    <small class="text-color-light opacity-7">International companies</small>
                </div>
                <div class="col-lg-3 col-md-6 mb-4 mb-md-0 text-center">
                    <h2 class="text-color-primary font-weight-bold text-12 mb-2">+40%</h2>
                    <p class="font-weight-semibold text-4 text-color-light mb-0">Avg. Revenue Growth</p>
                    <small class="text-color-light opacity-7">For our clients</small>
                </div>
                <div class="col-lg-3 col-md-6 text-center">
                    <h2 class="text-color-primary font-weight-bold text-12 mb-2">95%</h2>
                    <p class="font-weight-semibold text-4 text-color-light mb-0">Client Retention</p>
                    <small class="text-color-light opacity-7">Long-term partnerships</small>
                </div>
            </div>

            <!-- CTA Section -->
            <div class="row mt-5 pt-5">
                <div class="col-lg-10 mx-auto text-center">
                    <h3 class="text-7 font-weight-bold mb-3">Ready to Write Your Success Story?</h3>
                    <p class="text-4 text-muted mb-4">
                        Let's discuss how we can help your hospitality business or technology company achieve similar results.
                    </p>
                    <NuxtLink to="/contact" class="btn btn-primary btn-lg font-weight-semibold px-5 py-3">
                        Start a Conversation <i class="fas fa-arrow-right ms-2"></i>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
useHead({
    title: 'Case Studies - PERSUIT Consultants | Hospitality Tech Success Stories'
})

const activeFilter = ref('All')

const filters = ['All', 'Hotels', 'Tour Operators', 'Tech Partners', 'Travel Agencies']

const cases = [
    {
        id: 1,
        title: 'Serena Hotels Tech Integration',
        description: 'Implemented a comprehensive PMS and revenue management system across 8 properties in Kenya and Tanzania.',
        image: '/img/demos/business-consulting-3/services/services-1.jpg',
        industry: 'Hotels',
        service: 'Tech Partnerships',
        color: '#0d6efd',
        metric1: { value: '+35%', label: 'RevPAR Increase' },
        metric2: { value: '8', label: 'Properties' }
    },
    {
        id: 2,
        title: 'Safari Operator Digital Transformation',
        description: 'Helped a leading Kenyan safari operator modernize their booking system and online presence.',
        image: '/img/demos/business-consulting-3/services/services-2.jpg',
        industry: 'Tour Operators',
        service: 'Digital Marketing',
        color: '#198754',
        metric1: { value: '+120%', label: 'Online Bookings' },
        metric2: { value: '6mo', label: 'Implementation' }
    },
    {
        id: 3,
        title: 'International PMS Provider Launch',
        description: 'Facilitated market entry for a European hotel management software company into East African markets.',
        image: '/img/demos/business-consulting-3/services/services-3.jpg',
        industry: 'Tech Partners',
        service: 'Tech Partnerships',
        color: '#6f42c1',
        metric1: { value: '25+', label: 'Hotel Clients' },
        metric2: { value: '3', label: 'Countries' }
    },
    {
        id: 4,
        title: 'Boutique Lodge Revenue Optimization',
        description: 'Developed dynamic pricing strategy for a collection of luxury eco-lodges in the Maasai Mara.',
        image: '/img/demos/business-consulting-3/services/services-4.jpg',
        industry: 'Hotels',
        service: 'Revenue Management',
        color: '#0d6efd',
        metric1: { value: '+45%', label: 'Revenue Growth' },
        metric2: { value: '92%', label: 'Occupancy' }
    },
    {
        id: 5,
        title: 'Travel Agency CRM Implementation',
        description: 'Deployed a complete customer relationship management system for a Nairobi-based corporate travel agency.',
        image: '/img/demos/business-consulting-3/services/services-5.jpg',
        industry: 'Travel Agencies',
        service: 'Tech Partnerships',
        color: '#dc3545',
        metric1: { value: '+60%', label: 'Repeat Clients' },
        metric2: { value: '500+', label: 'Corporate Accounts' }
    },
    {
        id: 6,
        title: 'Channel Manager Integration',
        description: 'Connected a global OTA management platform with 15 independent hotels across Kenya and Uganda.',
        image: '/img/demos/business-consulting-3/services/services-6.jpg',
        industry: 'Tech Partners',
        service: 'Tech Partnerships',
        color: '#6f42c1',
        metric1: { value: '15', label: 'Hotels Connected' },
        metric2: { value: '+80%', label: 'Distribution' }
    },
    {
        id: 7,
        title: 'OTA Optimization Campaign',
        description: 'Comprehensive Booking.com and Expedia optimization for a chain of city hotels in Nairobi.',
        image: '/img/demos/business-consulting-3/services/services-1.jpg',
        industry: 'Hotels',
        service: 'Digital Marketing',
        color: '#0d6efd',
        metric1: { value: '+200%', label: 'OTA Revenue' },
        metric2: { value: '4.8★', label: 'Guest Rating' }
    },
    {
        id: 8,
        title: 'Safari Tours Booking Platform',
        description: 'Built custom booking solution for a tour operator offering wildlife and cultural experiences.',
        image: '/img/demos/business-consulting-3/services/services-2.jpg',
        industry: 'Tour Operators',
        service: 'Tours & Travel',
        color: '#198754',
        metric1: { value: '2000+', label: 'Bookings/Year' },
        metric2: { value: '30%', label: 'Cost Savings' }
    },
    {
        id: 9,
        title: 'Corporate Travel Management',
        description: 'Established complete corporate travel solutions for a multinational company with East African operations.',
        image: '/img/demos/business-consulting-3/services/services-3.jpg',
        industry: 'Travel Agencies',
        service: 'Tours & Travel',
        color: '#dc3545',
        metric1: { value: '$2M+', label: 'Travel Managed' },
        metric2: { value: '18%', label: 'Cost Reduction' }
    }
]

const testimonials = [
    {
        name: 'Peter Githongo',
        role: 'GM, Nairobi Serena Hotel',
        initials: 'PG',
        quote: 'PERSUIT helped us integrate a new revenue management system seamlessly. Their understanding of both the technology and hospitality operations made all the difference.'
    },
    {
        name: 'Emma Richardson',
        role: 'VP Africa, HotelTech Inc.',
        initials: 'ER',
        quote: 'As a tech company entering the East African market, PERSUIT was invaluable. They understand local business culture and have excellent relationships with key hospitality players.'
    },
    {
        name: 'James Mutua',
        role: 'CEO, Savannah Safari Tours',
        initials: 'JM',
        quote: 'Our online bookings increased by over 120% after working with PERSUIT. They truly understand what tour operators need to succeed in today\'s digital world.'
    }
]

const filteredCases = computed(() => {
    if (activeFilter.value === 'All') return cases
    return cases.filter(c => c.industry === activeFilter.value)
})
</script>
