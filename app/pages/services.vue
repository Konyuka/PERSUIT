<template>
    <div>
        <!-- Page Header -->
        <section class="page-header page-header-modern py-5 position-relative"
            style="background: linear-gradient(135deg, #1a2a3a 0%, #0d1b2a 100%);">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 align-self-center p-static order-2 text-center">
                        <h1 class="text-10 font-weight-bold text-color-light mb-2">Our Services</h1>
                        <p class="text-color-light opacity-7 text-4 mb-0">Comprehensive Solutions for Hospitality Excellence</p>
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

        <!-- Services Intro -->
        <div class="container py-5 my-4">
            <div class="row justify-content-center mb-5">
                <div class="col-lg-10 text-center">
                    <h2 class="custom-highlight-text-1 d-inline-block line-height-5 text-4 positive-ls-3 font-weight-medium text-color-primary mb-2">
                        WHAT WE OFFER</h2>
                    <h3 class="text-9 line-height-3 text-transform-none font-weight-bold mb-4">
                        End-to-End Hospitality Solutions</h3>
                    <p class="text-3-5 mb-0">
                        From facilitating technology partnerships to managing your revenue and digital presence, PERSUIT Consultants provides comprehensive services tailored for the East African hospitality industry.
                    </p>
                </div>
            </div>

            <!-- Main Services Grid -->
            <div class="row">
                <!-- Tech Partnerships -->
                <div class="col-lg-6 mb-5" id="tech-partnerships">
                    <div class="card border-0 shadow-lg h-100 overflow-hidden">
                        <div class="bg-primary text-white p-4">
                            <div class="d-flex align-items-center">
                                <div class="bg-white rounded-circle d-flex align-items-center justify-content-center me-3" style="width: 60px; height: 60px;">
                                    <i class="fas fa-handshake text-primary" style="font-size: 1.5rem;"></i>
                                </div>
                                <div>
                                    <h3 class="font-weight-bold mb-1 text-white">Tech Partnerships</h3>
                                    <p class="mb-0 opacity-8">For Hotels & Travel Agents</p>
                                </div>
                            </div>
                        </div>
                        <div class="card-body p-4">
                            <p class="text-3-5 mb-4">
                                We bridge international technology companies with East African hospitality businesses, facilitating partnerships that drive digital transformation.
                            </p>
                            
                            <h6 class="font-weight-bold text-color-primary mb-3">For International Tech Companies:</h6>
                            <ul class="list-unstyled mb-4">
                                <li class="mb-2"><i class="fas fa-check text-success me-2"></i> Market entry & business development support</li>
                                <li class="mb-2"><i class="fas fa-check text-success me-2"></i> Local market research & competitor analysis</li>
                                <li class="mb-2"><i class="fas fa-check text-success me-2"></i> Introductions to vetted partners</li>
                                <li class="mb-2"><i class="fas fa-check text-success me-2"></i> Go-to-market support & demos</li>
                            </ul>

                            <h6 class="font-weight-bold text-color-primary mb-3">For Hotels & Travel Agents:</h6>
                            <ul class="list-unstyled mb-4">
                                <li class="mb-2"><i class="fas fa-check text-success me-2"></i> Access to international tech solutions</li>
                                <li class="mb-2"><i class="fas fa-check text-success me-2"></i> Technology adoption & integration support</li>
                                <li class="mb-2"><i class="fas fa-check text-success me-2"></i> Training & onboarding</li>
                                <li class="mb-2"><i class="fas fa-check text-success me-2"></i> Ongoing account management</li>
                            </ul>

                            <NuxtLink to="/services/tech-partnerships" class="btn btn-primary font-weight-semibold">
                                Learn More <i class="fas fa-arrow-right ms-2"></i>
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <!-- Revenue Management -->
                <div class="col-lg-6 mb-5" id="revenue-management">
                    <div class="card border-0 shadow-lg h-100 overflow-hidden">
                        <div class="bg-dark text-white p-4">
                            <div class="d-flex align-items-center">
                                <div class="bg-primary rounded-circle d-flex align-items-center justify-content-center me-3" style="width: 60px; height: 60px;">
                                    <i class="fas fa-chart-line text-white" style="font-size: 1.5rem;"></i>
                                </div>
                                <div>
                                    <h3 class="font-weight-bold mb-1 text-white">Revenue Management</h3>
                                    <p class="mb-0 opacity-8">For Hotels, Lodges & Tour Companies</p>
                                </div>
                            </div>
                        </div>
                        <div class="card-body p-4">
                            <p class="text-3-5 mb-4">
                                Maximize your revenue with data-driven pricing strategies, demand forecasting, and distribution optimization tailored for the East African market.
                            </p>
                            
                            <h6 class="font-weight-bold text-color-primary mb-3">Core Services:</h6>
                            <ul class="list-unstyled mb-4">
                                <li class="mb-2"><i class="fas fa-check text-success me-2"></i> Dynamic pricing & rate optimization</li>
                                <li class="mb-2"><i class="fas fa-check text-success me-2"></i> Demand forecasting & market analysis</li>
                                <li class="mb-2"><i class="fas fa-check text-success me-2"></i> Inventory & distribution management</li>
                                <li class="mb-2"><i class="fas fa-check text-success me-2"></i> Revenue performance reporting (ADR, RevPAR, KPIs)</li>
                                <li class="mb-2"><i class="fas fa-check text-success me-2"></i> OTA & channel optimization</li>
                                <li class="mb-2"><i class="fas fa-check text-success me-2"></i> Competitor & market intelligence</li>
                                <li class="mb-2"><i class="fas fa-check text-success me-2"></i> Package & product optimization</li>
                            </ul>

                            <NuxtLink to="/services/revenue-management" class="btn btn-dark font-weight-semibold">
                                Learn More <i class="fas fa-arrow-right ms-2"></i>
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <!-- Tours & Travel -->
                <div class="col-lg-6 mb-5" id="tours-travel">
                    <div class="card border-0 shadow-lg h-100 overflow-hidden">
                        <div class="bg-success text-white p-4">
                            <div class="d-flex align-items-center">
                                <div class="bg-white rounded-circle d-flex align-items-center justify-content-center me-3" style="width: 60px; height: 60px;">
                                    <i class="fas fa-plane-departure text-success" style="font-size: 1.5rem;"></i>
                                </div>
                                <div>
                                    <h3 class="font-weight-bold mb-1 text-white">Tours & Travel</h3>
                                    <p class="mb-0 opacity-8">For Corporates, Families & Groups</p>
                                </div>
                            </div>
                        </div>
                        <div class="card-body p-4">
                            <p class="text-3-5 mb-4">
                                Curated travel experiences designed for diverse groups—from corporate retreats to family adventures—with comfort, accessibility, and personalization at the core.
                            </p>
                            
                            <h6 class="font-weight-bold text-color-primary mb-3">What We Offer:</h6>
                            <ul class="list-unstyled mb-4">
                                <li class="mb-2"><i class="fas fa-check text-success me-2"></i> Comfortable & flexible itineraries</li>
                                <li class="mb-2"><i class="fas fa-check text-success me-2"></i> Accessible travel options</li>
                                <li class="mb-2"><i class="fas fa-check text-success me-2"></i> Family-friendly activities</li>
                                <li class="mb-2"><i class="fas fa-check text-success me-2"></i> Safety & health support</li>
                                <li class="mb-2"><i class="fas fa-check text-success me-2"></i> Comfortable accommodation</li>
                                <li class="mb-2"><i class="fas fa-check text-success me-2"></i> Cultural & educational experiences</li>
                                <li class="mb-2"><i class="fas fa-check text-success me-2"></i> Dedicated group support</li>
                            </ul>

                            <NuxtLink to="/services/tours-travel" class="btn btn-success font-weight-semibold">
                                Learn More <i class="fas fa-arrow-right ms-2"></i>
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <!-- Digital Marketing -->
                <div class="col-lg-6 mb-5" id="digital-marketing">
                    <div class="card border-0 shadow-lg h-100 overflow-hidden">
                        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);" class="text-white p-4">
                            <div class="d-flex align-items-center">
                                <div class="bg-white rounded-circle d-flex align-items-center justify-content-center me-3" style="width: 60px; height: 60px;">
                                    <i class="fas fa-bullhorn text-primary" style="font-size: 1.5rem;"></i>
                                </div>
                                <div>
                                    <h3 class="font-weight-bold mb-1 text-white">Digital Marketing</h3>
                                    <p class="mb-0 opacity-8">For Hotels & Tour/Travel Companies</p>
                                </div>
                            </div>
                        </div>
                        <div class="card-body p-4">
                            <p class="text-3-5 mb-4">
                                Comprehensive digital marketing solutions to boost your online visibility, drive direct bookings, and build your brand in the competitive hospitality market.
                            </p>
                            
                            <h6 class="font-weight-bold text-color-primary mb-3">Full-Stack Digital Services:</h6>
                            <ul class="list-unstyled mb-4">
                                <li class="mb-2"><i class="fas fa-check text-success me-2"></i> Website design & optimization</li>
                                <li class="mb-2"><i class="fas fa-check text-success me-2"></i> Search Engine Optimization (SEO)</li>
                                <li class="mb-2"><i class="fas fa-check text-success me-2"></i> Pay-Per-Click advertising (PPC)</li>
                                <li class="mb-2"><i class="fas fa-check text-success me-2"></i> Social media marketing</li>
                                <li class="mb-2"><i class="fas fa-check text-success me-2"></i> Email marketing & automation</li>
                                <li class="mb-2"><i class="fas fa-check text-success me-2"></i> Online reputation management</li>
                                <li class="mb-2"><i class="fas fa-check text-success me-2"></i> Analytics & reporting</li>
                            </ul>

                            <NuxtLink to="/services/digital-marketing" class="btn btn-primary font-weight-semibold">
                                Learn More <i class="fas fa-arrow-right ms-2"></i>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Problems We Solve -->
            <div class="row py-5 mt-4 bg-color-grey rounded-lg">
                <div class="col-12 text-center mb-5">
                    <h2 class="custom-highlight-text-1 d-inline-block line-height-5 text-4 positive-ls-3 font-weight-medium text-color-primary mb-2">
                        RESULTS THAT MATTER</h2>
                    <h3 class="text-8 line-height-3 text-transform-none font-weight-bold mb-3">Problems We Solve</h3>
                </div>
                <div class="col-md-6 col-lg-4 mb-4" v-for="problem in problemsSolved" :key="problem.title">
                    <div class="card border-0 shadow-sm h-100">
                        <div class="card-body p-4 text-center">
                            <div class="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style="width: 60px; height: 60px;">
                                <i :class="problem.icon" class="text-white" style="font-size: 1.3rem;"></i>
                            </div>
                            <h5 class="font-weight-bold mb-2">{{ problem.title }}</h5>
                            <p class="text-3 text-muted mb-0">{{ problem.description }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- CTA Section -->
            <div class="row mt-5 py-5 text-center" style="background: linear-gradient(135deg, #1a2a3a 0%, #0d1b2a 100%); border-radius: 10px;">
                <div class="col-12">
                    <h3 class="text-color-light font-weight-bold mb-3">Ready to Transform Your Hospitality Business?</h3>
                    <p class="text-color-light opacity-8 mb-4 px-lg-5">
                        Let's discuss how our services can help you achieve your goals.
                    </p>
                    <NuxtLink to="/contact"
                        class="btn btn-primary custom-btn-style-1 font-weight-semibold btn-px-5 btn-py-2 text-3-5">
                        <span>Get Started Today</span>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
useHead({
    title: 'Our Services - PERSUIT Consultants | Tech Partnerships, Revenue Management, Digital Marketing'
})

const problemsSolved = [
    {
        title: 'Faster Partnerships',
        description: 'Speed up cross-border partnerships with quality connections and vetted introductions.',
        icon: 'fas fa-rocket'
    },
    {
        title: 'Seamless Tech Adoption',
        description: 'Successfully adopt international tech tools without operational disruption.',
        icon: 'fas fa-laptop-code'
    },
    {
        title: 'Revenue Optimization',
        description: 'Higher occupancy, better pricing, and reduced distribution costs.',
        icon: 'fas fa-chart-line'
    },
    {
        title: 'Digital Visibility',
        description: 'More direct bookings and stronger brand awareness online.',
        icon: 'fas fa-search'
    },
    {
        title: 'Market Entry Support',
        description: 'Tech companies gain vetted access to East African hospitality market.',
        icon: 'fas fa-door-open'
    },
    {
        title: 'Capacity Building',
        description: 'Training, workshops, and continuous support for your team.',
        icon: 'fas fa-graduation-cap'
    }
]
</script>
