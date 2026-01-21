<template>
    <div>
        <!-- Page Header -->
        <section class="page-header page-header-modern bg-color-dark py-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 align-self-center p-static order-2 text-center">
                        <h1 class="text-10 font-weight-bold text-color-light">Case Studies</h1>
                        <span class="sub-title text-color-light">Our success stories</span>
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
                <li class="active">Cases</li>
            </ul>
        </div>

        <!-- Cases Content -->
        <div class="container py-5 my-4">
            <div class="row justify-content-center mb-5">
                <div class="col-lg-8 text-center">
                    <h2
                        class="custom-highlight-text-1 d-inline-block line-height-5 text-4 positive-ls-3 font-weight-medium text-color-primary mb-2">
                        SUCCESS STORIES</h2>
                    <h3 class="text-9 line-height-3 text-transform-none font-weight-semibold mb-4">Our Client Case
                        Studies</h3>
                    <p class="text-3-5 mb-0">Explore how we've helped businesses across various industries achieve
                        remarkable results through our consulting services.</p>
                </div>
            </div>

            <!-- Filter Buttons -->
            <div class="row mb-4">
                <div class="col-12 text-center">
                    <button v-for="filter in filters" :key="filter" @click="activeFilter = filter"
                        :class="['btn btn-outline-primary me-2 mb-2', { 'btn-primary text-white': activeFilter === filter }]">
                        {{ filter }}
                    </button>
                </div>
            </div>

            <!-- Cases Grid -->
            <div class="row">
                <div class="col-lg-4 col-md-6 mb-4" v-for="caseStudy in filteredCases" :key="caseStudy.id">
                    <div class="card border-0 shadow h-100">
                        <div class="card-img-top position-relative overflow-hidden">
                            <img :src="caseStudy.image" class="img-fluid w-100" :alt="caseStudy.title"
                                style="height: 220px; object-fit: cover;" />
                            <div
                                class="position-absolute top-0 end-0 bg-color-primary text-color-light px-3 py-2 m-3 font-weight-semibold text-2">
                                {{ caseStudy.industry }}
                            </div>
                        </div>
                        <div class="card-body p-4">
                            <h4 class="font-weight-semibold text-5 mb-2">{{ caseStudy.title }}</h4>
                            <p class="text-3 mb-3">{{ caseStudy.description }}</p>
                            <div class="mb-3">
                                <div class="d-flex justify-content-between mb-2">
                                    <span class="text-color-grey text-2">Results:</span>
                                    <span class="font-weight-bold text-color-primary">{{ caseStudy.result }}</span>
                                </div>
                            </div>
                            <a href="#"
                                class="d-inline-flex align-items-center text-color-primary font-weight-semibold text-decoration-none">
                                View Case Study <i class="fas fa-arrow-right ms-2"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Stats Section -->
            <div class="row mt-5 py-5 bg-color-dark text-center">
                <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
                    <h2 class="text-color-primary font-weight-bold text-12 mb-2">95%</h2>
                    <p class="font-weight-semibold text-4 text-color-light mb-0">Client Satisfaction</p>
                </div>
                <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
                    <h2 class="text-color-primary font-weight-bold text-12 mb-2">$50M+</h2>
                    <p class="font-weight-semibold text-4 text-color-light mb-0">Revenue Generated</p>
                </div>
                <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h2 class="text-color-primary font-weight-bold text-12 mb-2">200+</h2>
                    <p class="font-weight-semibold text-4 text-color-light mb-0">Projects Delivered</p>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h2 class="text-color-primary font-weight-bold text-12 mb-2">40+</h2>
                    <p class="font-weight-semibold text-4 text-color-light mb-0">Industries Served</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
useHead({
    title: 'Case Studies - PURSUIT'
})

const activeFilter = ref('All')

const filters = ['All', 'Technology', 'Finance', 'Healthcare', 'Retail', 'Manufacturing']

const cases = [
    {
        id: 1,
        title: 'Tech Startup Growth Strategy',
        description: 'Helped a SaaS startup scale from $1M to $10M ARR in 18 months.',
        image: '/img/demos/business-consulting-3/services/services-1.jpg',
        industry: 'Technology',
        result: '+900% Revenue'
    },
    {
        id: 2,
        title: 'Bank Digital Transformation',
        description: 'Led complete digital transformation for a regional bank with 50 branches.',
        image: '/img/demos/business-consulting-3/services/services-2.jpg',
        industry: 'Finance',
        result: '60% Cost Reduction'
    },
    {
        id: 3,
        title: 'Hospital Operations Optimization',
        description: 'Streamlined operations for a healthcare network serving 500K patients.',
        image: '/img/demos/business-consulting-3/services/services-3.jpg',
        industry: 'Healthcare',
        result: '40% Efficiency Gain'
    },
    {
        id: 4,
        title: 'E-commerce Sales Acceleration',
        description: 'Revamped marketing strategy for an online retailer, boosting conversions.',
        image: '/img/demos/business-consulting-3/services/services-4.jpg',
        industry: 'Retail',
        result: '+250% Sales'
    },
    {
        id: 5,
        title: 'Manufacturing Automation',
        description: 'Implemented Industry 4.0 solutions for a manufacturing plant.',
        image: '/img/demos/business-consulting-3/services/services-5.jpg',
        industry: 'Manufacturing',
        result: '35% Productivity Boost'
    },
    {
        id: 6,
        title: 'Fintech Platform Launch',
        description: 'Guided a fintech startup from concept to successful market launch.',
        image: '/img/demos/business-consulting-3/services/services-6.jpg',
        industry: 'Finance',
        result: '100K Users in 6 Months'
    }
]

const filteredCases = computed(() => {
    if (activeFilter.value === 'All') return cases
    return cases.filter(c => c.industry === activeFilter.value)
})
</script>
