<template>
    <div>
        <!-- Page Header -->
        <section class="page-header page-header-modern bg-color-dark py-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 align-self-center p-static order-2 text-center">
                        <h1 class="text-10 font-weight-bold text-color-light">Our Services</h1>
                        <span class="sub-title text-color-light">Professional consulting solutions</span>
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
                <li class="active">Services</li>
            </ul>
        </div>

        <!-- Services Content -->
        <div class="container py-5 my-4">
            <div class="row justify-content-center mb-5">
                <div class="col-lg-8 text-center">
                    <h2
                        class="custom-highlight-text-1 d-inline-block line-height-5 text-4 positive-ls-3 font-weight-medium text-color-primary mb-2">
                        WHAT WE OFFER</h2>
                    <h3 class="text-9 line-height-3 text-transform-none font-weight-semibold mb-4">Comprehensive
                        Business Solutions</h3>
                    <p class="text-3-5 mb-0">We provide a full range of consulting services designed to help your
                        business thrive in today's competitive landscape.</p>
                </div>
            </div>

            <!-- Services Grid -->
            <div class="row">
                <div class="col-lg-4 col-md-6 mb-4" v-for="service in services" :key="service.id">
                    <div class="card box-shadow-4 h-100">
                        <div class="card-img-top position-relative overlay overlay-show">
                            <div class="position-absolute bottom-0 left-0 w-100 py-3 px-4 z-index-3">
                                <h4 class="font-weight-semibold text-color-light text-6 mb-1">{{ service.title }}</h4>
                            </div>
                            <img :src="service.image" class="img-fluid" :alt="service.title" />
                        </div>
                        <div class="card-body p-4">
                            <p class="card-text mb-3">{{ service.description }}</p>
                            <ul class="list-unstyled mb-0">
                                <li v-for="feature in service.features" :key="feature" class="mb-2">
                                    <i class="fas fa-check text-color-primary me-2"></i>{{ feature }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- CTA Section -->
            <div class="row mt-5 py-5 bg-color-dark text-center">
                <div class="col-12">
                    <h3 class="text-color-light font-weight-semibold mb-3">Ready to Transform Your Business?</h3>
                    <p class="text-color-light mb-4">Let's discuss how we can help you achieve your goals.</p>
                    <NuxtLink to="/contact"
                        class="btn btn-primary custom-btn-style-1 font-weight-semibold btn-px-4 btn-py-2 text-3-5">
                        <span>Contact Us Today</span>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
useHead({
    title: 'Services - PURSUIT'
})

const services = [
    {
        id: 1,
        title: 'Sales & Marketing',
        image: '/img/demos/business-consulting-3/services/services-1.jpg',
        description: 'Boost your revenue with our proven sales and marketing strategies.',
        features: ['Market Analysis', 'Brand Strategy', 'Lead Generation', 'Sales Training']
    },
    {
        id: 2,
        title: 'Strategic Planning',
        image: '/img/demos/business-consulting-3/services/services-2.jpg',
        description: 'Develop clear roadmaps for sustainable business growth.',
        features: ['Business Analysis', 'Goal Setting', 'Action Planning', 'Performance Metrics']
    },
    {
        id: 3,
        title: 'Operations',
        image: '/img/demos/business-consulting-3/services/services-3.jpg',
        description: 'Streamline your operations for maximum efficiency.',
        features: ['Process Optimization', 'Supply Chain', 'Quality Control', 'Lean Management']
    },
    {
        id: 4,
        title: 'Cost Transformation',
        image: '/img/demos/business-consulting-3/services/services-4.jpg',
        description: 'Reduce costs while maintaining quality and productivity.',
        features: ['Cost Analysis', 'Budget Planning', 'Resource Optimization', 'ROI Tracking']
    },
    {
        id: 5,
        title: 'Digital Marketing',
        image: '/img/demos/business-consulting-3/services/services-5.jpg',
        description: 'Expand your digital presence and reach new customers.',
        features: ['SEO/SEM', 'Social Media', 'Content Marketing', 'Analytics']
    },
    {
        id: 6,
        title: 'Automation',
        image: '/img/demos/business-consulting-3/services/services-6.jpg',
        description: 'Leverage technology to automate and scale your business.',
        features: ['Process Automation', 'CRM Integration', 'Workflow Design', 'AI Solutions']
    }
]
</script>
