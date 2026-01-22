<template>
    <div>
        <!-- Hero Section -->
        <section class="page-header py-5 position-relative"
            style="background: linear-gradient(135deg, #1a2a3a 0%, #0d1b2a 100%); min-height: 400px;">
            <div class="container">
                <div class="row align-items-center py-5">
                    <div class="col-lg-7">
                        <span class="badge bg-success mb-3 px-3 py-2">Our Services</span>
                        <h1 class="text-11 font-weight-bold text-white mb-4">Revenue Management</h1>
                        <p class="text-4 text-white opacity-8 mb-4">
                            Maximize your property's revenue potential with data-driven pricing strategies, 
                            demand forecasting, and distribution optimization tailored for East African markets.
                        </p>
                        <div class="d-flex gap-3">
                            <NuxtLink to="/contact" class="btn btn-success font-weight-semibold px-4 py-3">
                                <i class="fas fa-chart-line me-2"></i> Optimize Revenue
                            </NuxtLink>
                            <a href="#learn-more" class="btn btn-outline-light font-weight-semibold px-4 py-3">
                                Learn More <i class="fas fa-arrow-down ms-2"></i>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-5 text-center d-none d-lg-block">
                        <div class="position-relative">
                            <div class="bg-success rounded-lg p-4 shadow-lg" style="transform: rotate(3deg);">
                                <i class="fas fa-chart-line text-white" style="font-size: 120px;"></i>
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
                <li class="active">Revenue Management</li>
            </ul>
        </div>

        <!-- Overview Section -->
        <section id="learn-more" class="py-5">
            <div class="container">
                <div class="row align-items-center py-4">
                    <div class="col-lg-6 order-lg-2 mb-4 mb-lg-0">
                        <img src="/img/demos/business-consulting-3/services/services-2.jpg" 
                            class="img-fluid rounded-lg shadow" alt="Revenue Management" />
                    </div>
                    <div class="col-lg-6 order-lg-1">
                        <span class="d-block text-color-primary font-weight-bold text-3 positive-ls-2 mb-2">THE CHALLENGE</span>
                        <h2 class="text-8 font-weight-bold mb-4">Stop Leaving Money on the Table</h2>
                        <p class="text-4 mb-4">
                            Many East African hotels and lodges rely on static pricing or gut instinct. In today's 
                            dynamic market, this means lost revenue—either through underpricing during high demand 
                            or overpricing that drives guests away.
                        </p>
                        <div class="bg-light rounded p-4 mb-4">
                            <h5 class="font-weight-bold mb-3">Common Revenue Challenges:</h5>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="d-flex align-items-center mb-2">
                                        <i class="fas fa-times-circle text-danger me-2"></i>
                                        <span>Static pricing models</span>
                                    </div>
                                    <div class="d-flex align-items-center mb-2">
                                        <i class="fas fa-times-circle text-danger me-2"></i>
                                        <span>Low direct bookings</span>
                                    </div>
                                    <div class="d-flex align-items-center mb-2">
                                        <i class="fas fa-times-circle text-danger me-2"></i>
                                        <span>OTA dependency</span>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="d-flex align-items-center mb-2">
                                        <i class="fas fa-times-circle text-danger me-2"></i>
                                        <span>No demand forecasting</span>
                                    </div>
                                    <div class="d-flex align-items-center mb-2">
                                        <i class="fas fa-times-circle text-danger me-2"></i>
                                        <span>Manual rate updates</span>
                                    </div>
                                    <div class="d-flex align-items-center mb-2">
                                        <i class="fas fa-times-circle text-danger me-2"></i>
                                        <span>Poor channel mix</span>
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
                        <span class="d-block text-color-primary font-weight-bold text-3 positive-ls-2 mb-2">OUR SERVICES</span>
                        <h2 class="text-8 font-weight-bold mb-3">Revenue Management Solutions</h2>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-lg-4 col-md-6 mb-4" v-for="service in services" :key="service.title">
                        <div class="card border-0 shadow h-100">
                            <div class="card-body p-4">
                                <div class="rounded-circle bg-success bg-opacity-10 d-inline-flex align-items-center justify-content-center mb-3"
                                    style="width: 60px; height: 60px;">
                                    <i :class="service.icon" class="text-success text-4"></i>
                                </div>
                                <h5 class="font-weight-bold mb-3">{{ service.title }}</h5>
                                <p class="text-muted text-3 mb-0">{{ service.desc }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Process Section -->
        <section class="py-5">
            <div class="container">
                <div class="row justify-content-center mb-5">
                    <div class="col-lg-8 text-center">
                        <span class="d-block text-color-primary font-weight-bold text-3 positive-ls-2 mb-2">OUR PROCESS</span>
                        <h2 class="text-8 font-weight-bold mb-3">How We Optimize Your Revenue</h2>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-lg-3 col-md-6 mb-4" v-for="(step, index) in process" :key="step.title">
                        <div class="text-center">
                            <div class="rounded-circle bg-primary text-white d-inline-flex align-items-center justify-content-center mb-3"
                                style="width: 60px; height: 60px;">
                                <span class="font-weight-bold text-5">{{ index + 1 }}</span>
                            </div>
                            <h5 class="font-weight-bold mb-2">{{ step.title }}</h5>
                            <p class="text-muted text-3">{{ step.desc }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- KPIs Section -->
        <section class="py-5 bg-dark">
            <div class="container">
                <div class="row justify-content-center mb-5">
                    <div class="col-lg-8 text-center">
                        <span class="d-block text-success font-weight-bold text-3 positive-ls-2 mb-2">MEASURABLE RESULTS</span>
                        <h2 class="text-8 font-weight-bold text-white mb-3">Key Performance Indicators We Track</h2>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-lg-2 col-md-4 col-6 mb-4" v-for="kpi in kpis" :key="kpi.name">
                        <div class="text-center">
                            <div class="bg-success bg-opacity-10 rounded p-3 mb-2">
                                <span class="text-success font-weight-bold text-4">{{ kpi.name }}</span>
                            </div>
                            <small class="text-light opacity-7">{{ kpi.desc }}</small>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Results Section -->
        <section class="py-5">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 mb-4 mb-lg-0">
                        <span class="d-block text-color-primary font-weight-bold text-3 positive-ls-2 mb-2">TYPICAL RESULTS</span>
                        <h2 class="text-8 font-weight-bold mb-4">What You Can Expect</h2>
                        <p class="text-4 mb-4">
                            Our revenue management strategies have helped hotels and lodges across East Africa 
                            achieve significant improvements in their bottom line.
                        </p>
                        
                        <div class="row text-center">
                            <div class="col-4">
                                <h3 class="text-success font-weight-bold text-9 mb-1">+25%</h3>
                                <p class="text-3 text-muted">Average RevPAR Increase</p>
                            </div>
                            <div class="col-4">
                                <h3 class="text-success font-weight-bold text-9 mb-1">+15%</h3>
                                <p class="text-3 text-muted">ADR Improvement</p>
                            </div>
                            <div class="col-4">
                                <h3 class="text-success font-weight-bold text-9 mb-1">+10%</h3>
                                <p class="text-3 text-muted">Occupancy Growth</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="card border-0 shadow">
                            <div class="card-body p-4">
                                <h5 class="font-weight-bold mb-4">Perfect For:</h5>
                                <div class="d-flex align-items-center mb-3">
                                    <i class="fas fa-hotel text-primary me-3 text-4"></i>
                                    <div>
                                        <strong>Hotels & Resorts</strong>
                                        <p class="text-muted mb-0 text-3">City hotels, beach resorts, business hotels</p>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center mb-3">
                                    <i class="fas fa-tree text-primary me-3 text-4"></i>
                                    <div>
                                        <strong>Safari Lodges & Camps</strong>
                                        <p class="text-muted mb-0 text-3">Game lodges, tented camps, eco-lodges</p>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center mb-3">
                                    <i class="fas fa-home text-primary me-3 text-4"></i>
                                    <div>
                                        <strong>Vacation Rentals</strong>
                                        <p class="text-muted mb-0 text-3">Airbnb properties, serviced apartments</p>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center">
                                    <i class="fas fa-building text-primary me-3 text-4"></i>
                                    <div>
                                        <strong>Boutique Properties</strong>
                                        <p class="text-muted mb-0 text-3">Unique, independent accommodations</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="py-5" style="background: linear-gradient(135deg, #198754 0%, #146c43 100%);">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-8 mb-4 mb-lg-0">
                        <h3 class="text-7 font-weight-bold text-white mb-2">Ready to Maximize Your Revenue?</h3>
                        <p class="text-4 text-white opacity-8 mb-0">
                            Get a free revenue assessment and discover your property's untapped potential.
                        </p>
                    </div>
                    <div class="col-lg-4 text-lg-end">
                        <NuxtLink to="/contact" class="btn btn-light btn-lg font-weight-semibold px-5 py-3">
                            Free Assessment <i class="fas fa-arrow-right ms-2"></i>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
useHead({
    title: 'Revenue Management - PERSUIT Consultants | Hotel Pricing Optimization'
})

const services = [
    {
        title: 'Dynamic Pricing Strategy',
        desc: 'Data-driven pricing that responds to demand, competition, and market conditions in real-time.',
        icon: 'fas fa-tags'
    },
    {
        title: 'Demand Forecasting',
        desc: 'Predict future demand patterns using historical data, events, and market trends.',
        icon: 'fas fa-chart-area'
    },
    {
        title: 'OTA Optimization',
        desc: 'Maximize visibility and bookings on Booking.com, Expedia, and other major platforms.',
        icon: 'fas fa-globe'
    },
    {
        title: 'Channel Mix Strategy',
        desc: 'Balance direct bookings vs. OTAs to optimize revenue and reduce commission costs.',
        icon: 'fas fa-balance-scale'
    },
    {
        title: 'Competitive Analysis',
        desc: 'Monitor competitor pricing and positioning to stay ahead in your market.',
        icon: 'fas fa-search'
    },
    {
        title: 'Performance Reporting',
        desc: 'Regular KPI tracking and actionable insights to drive continuous improvement.',
        icon: 'fas fa-file-alt'
    }
]

const process = [
    { title: 'Audit', desc: 'Analyze your current pricing, distribution, and performance metrics' },
    { title: 'Strategy', desc: 'Develop customized revenue strategy based on your property and market' },
    { title: 'Implement', desc: 'Set up tools, processes, and team training for execution' },
    { title: 'Optimize', desc: 'Continuous monitoring, adjustment, and improvement of results' }
]

const kpis = [
    { name: 'RevPAR', desc: 'Revenue per available room' },
    { name: 'ADR', desc: 'Average daily rate' },
    { name: 'Occupancy', desc: 'Room occupancy rate' },
    { name: 'GOPPAR', desc: 'Gross operating profit' },
    { name: 'Pick-up', desc: 'Booking pace tracking' },
    { name: 'RGI', desc: 'Revenue generation index' }
]
</script>
