<template>
    <div>
        <!-- Hero Section -->
        <section class="page-header py-5 position-relative"
            style="background: linear-gradient(135deg, #198754 0%, #146c43 100%); min-height: 400px;">
            <div class="container">
                <div class="row align-items-center py-5">
                    <div class="col-lg-7">
                        <span class="badge bg-light text-success mb-3 px-3 py-2">Our Services</span>
                        <h1 class="text-11 font-weight-bold text-white mb-4">Tours & Travel Solutions</h1>
                        <p class="text-4 text-white opacity-8 mb-4">
                            Premium travel management for corporate clients, families, and groups—combining 
                            local expertise with international standards for unforgettable East African experiences.
                        </p>
                        <div class="d-flex gap-3">
                            <NuxtLink to="/contact" class="btn btn-light font-weight-semibold px-4 py-3">
                                <i class="fas fa-plane me-2"></i> Plan Your Trip
                            </NuxtLink>
                            <a href="#learn-more" class="btn btn-outline-light font-weight-semibold px-4 py-3">
                                Learn More <i class="fas fa-arrow-down ms-2"></i>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-5 text-center d-none d-lg-block">
                        <div class="position-relative">
                            <div class="bg-white rounded-lg p-4 shadow-lg" style="transform: rotate(-3deg);">
                                <i class="fas fa-globe-africa text-success" style="font-size: 120px;"></i>
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
                <li class="active">Tours & Travel</li>
            </ul>
        </div>

        <!-- Overview Section -->
        <section id="learn-more" class="py-5">
            <div class="container">
                <div class="row align-items-center py-4">
                    <div class="col-lg-6 mb-4 mb-lg-0">
                        <img src="/img/demos/business-consulting-3/services/services-3.jpg" 
                            class="img-fluid rounded-lg shadow" alt="Tours & Travel" />
                    </div>
                    <div class="col-lg-6">
                        <span class="d-block text-success font-weight-bold text-3 positive-ls-2 mb-2">TRAVEL MADE SIMPLE</span>
                        <h2 class="text-8 font-weight-bold mb-4">Your East Africa Travel Partner</h2>
                        <p class="text-4 mb-4">
                            Whether you're organizing corporate travel, planning a family safari, or coordinating 
                            group tours, we handle everything—from flights and accommodations to experiences and logistics.
                        </p>
                        <div class="row">
                            <div class="col-6">
                                <div class="d-flex align-items-center mb-3">
                                    <i class="fas fa-check-circle text-success text-4 me-2"></i>
                                    <span>Flight Bookings</span>
                                </div>
                                <div class="d-flex align-items-center mb-3">
                                    <i class="fas fa-check-circle text-success text-4 me-2"></i>
                                    <span>Hotel Reservations</span>
                                </div>
                                <div class="d-flex align-items-center mb-3">
                                    <i class="fas fa-check-circle text-success text-4 me-2"></i>
                                    <span>Safari Planning</span>
                                </div>
                                <div class="d-flex align-items-center mb-3">
                                    <i class="fas fa-check-circle text-success text-4 me-2"></i>
                                    <span>Airport Transfers</span>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="d-flex align-items-center mb-3">
                                    <i class="fas fa-check-circle text-success text-4 me-2"></i>
                                    <span>Visa Assistance</span>
                                </div>
                                <div class="d-flex align-items-center mb-3">
                                    <i class="fas fa-check-circle text-success text-4 me-2"></i>
                                    <span>Travel Insurance</span>
                                </div>
                                <div class="d-flex align-items-center mb-3">
                                    <i class="fas fa-check-circle text-success text-4 me-2"></i>
                                    <span>Event Planning</span>
                                </div>
                                <div class="d-flex align-items-center mb-3">
                                    <i class="fas fa-check-circle text-success text-4 me-2"></i>
                                    <span>24/7 Support</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Client Types Section -->
        <section class="py-5 bg-light">
            <div class="container">
                <div class="row justify-content-center mb-5">
                    <div class="col-lg-8 text-center">
                        <span class="d-block text-success font-weight-bold text-3 positive-ls-2 mb-2">WHO WE SERVE</span>
                        <h2 class="text-8 font-weight-bold mb-3">Tailored Travel Solutions</h2>
                        <p class="text-4 text-muted">We specialize in three distinct travel segments, each with unique needs.</p>
                    </div>
                </div>
                
                <div class="row">
                    <!-- Corporate Travel -->
                    <div class="col-lg-4 mb-4">
                        <div class="card border-0 shadow h-100">
                            <div class="card-header bg-primary text-white py-4 text-center">
                                <i class="fas fa-briefcase text-6 mb-2"></i>
                                <h4 class="mb-0 font-weight-bold">Corporate Travel</h4>
                            </div>
                            <div class="card-body p-4">
                                <p class="text-muted mb-4">
                                    Streamlined business travel management for companies operating in East Africa.
                                </p>
                                <ul class="list-unstyled">
                                    <li class="mb-2"><i class="fas fa-check text-success me-2"></i> Business class bookings</li>
                                    <li class="mb-2"><i class="fas fa-check text-success me-2"></i> Corporate hotel rates</li>
                                    <li class="mb-2"><i class="fas fa-check text-success me-2"></i> Meeting & conference venues</li>
                                    <li class="mb-2"><i class="fas fa-check text-success me-2"></i> Executive car services</li>
                                    <li class="mb-2"><i class="fas fa-check text-success me-2"></i> Expense reporting</li>
                                    <li><i class="fas fa-check text-success me-2"></i> Travel policy compliance</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Family Travel -->
                    <div class="col-lg-4 mb-4">
                        <div class="card border-0 shadow h-100">
                            <div class="card-header bg-success text-white py-4 text-center">
                                <i class="fas fa-users text-6 mb-2"></i>
                                <h4 class="mb-0 font-weight-bold">Family Adventures</h4>
                            </div>
                            <div class="card-body p-4">
                                <p class="text-muted mb-4">
                                    Memorable family holidays and safari experiences tailored for all ages.
                                </p>
                                <ul class="list-unstyled">
                                    <li class="mb-2"><i class="fas fa-check text-success me-2"></i> Family-friendly safaris</li>
                                    <li class="mb-2"><i class="fas fa-check text-success me-2"></i> Beach resort holidays</li>
                                    <li class="mb-2"><i class="fas fa-check text-success me-2"></i> Kid-focused activities</li>
                                    <li class="mb-2"><i class="fas fa-check text-success me-2"></i> Multi-generational trips</li>
                                    <li class="mb-2"><i class="fas fa-check text-success me-2"></i> Cultural experiences</li>
                                    <li><i class="fas fa-check text-success me-2"></i> Flexible itineraries</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Group Travel -->
                    <div class="col-lg-4 mb-4">
                        <div class="card border-0 shadow h-100">
                            <div class="card-header bg-dark text-white py-4 text-center">
                                <i class="fas fa-people-carry text-6 mb-2"></i>
                                <h4 class="mb-0 font-weight-bold">Group Tours</h4>
                            </div>
                            <div class="card-body p-4">
                                <p class="text-muted mb-4">
                                    Coordinated travel for groups, events, incentives, and special occasions.
                                </p>
                                <ul class="list-unstyled">
                                    <li class="mb-2"><i class="fas fa-check text-success me-2"></i> Incentive travel</li>
                                    <li class="mb-2"><i class="fas fa-check text-success me-2"></i> Wedding groups</li>
                                    <li class="mb-2"><i class="fas fa-check text-success me-2"></i> Conference delegates</li>
                                    <li class="mb-2"><i class="fas fa-check text-success me-2"></i> School trips</li>
                                    <li class="mb-2"><i class="fas fa-check text-success me-2"></i> Tour groups</li>
                                    <li><i class="fas fa-check text-success me-2"></i> Special interest tours</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Destinations Section -->
        <section class="py-5">
            <div class="container">
                <div class="row justify-content-center mb-5">
                    <div class="col-lg-8 text-center">
                        <span class="d-block text-success font-weight-bold text-3 positive-ls-2 mb-2">DESTINATIONS</span>
                        <h2 class="text-8 font-weight-bold mb-3">Explore East Africa</h2>
                        <p class="text-4 text-muted">We specialize in the most sought-after destinations in the region.</p>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-lg-3 col-md-6 mb-4" v-for="dest in destinations" :key="dest.name">
                        <div class="card border-0 shadow-sm h-100 overflow-hidden">
                            <div class="position-relative">
                                <img :src="dest.image" class="card-img-top" :alt="dest.name" 
                                    style="height: 180px; object-fit: cover;" />
                                <div class="position-absolute bottom-0 start-0 end-0 p-3"
                                    style="background: linear-gradient(transparent, rgba(0,0,0,0.8));">
                                    <h5 class="font-weight-bold text-white mb-0">{{ dest.name }}</h5>
                                </div>
                            </div>
                            <div class="card-body p-3">
                                <p class="text-muted text-3 mb-0">{{ dest.highlights }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Why Choose Us -->
        <section class="py-5 bg-dark">
            <div class="container">
                <div class="row justify-content-center mb-5">
                    <div class="col-lg-8 text-center">
                        <span class="d-block text-success font-weight-bold text-3 positive-ls-2 mb-2">WHY PERSUIT</span>
                        <h2 class="text-8 font-weight-bold text-white mb-3">The PERSUIT Difference</h2>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-lg-4 col-md-6 mb-4" v-for="benefit in benefits" :key="benefit.title">
                        <div class="d-flex">
                            <div class="flex-shrink-0">
                                <div class="rounded-circle bg-success d-flex align-items-center justify-content-center"
                                    style="width: 50px; height: 50px;">
                                    <i :class="benefit.icon" class="text-white"></i>
                                </div>
                            </div>
                            <div class="ms-3">
                                <h5 class="font-weight-bold text-white mb-2">{{ benefit.title }}</h5>
                                <p class="text-light opacity-7 mb-0 text-3">{{ benefit.desc }}</p>
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
                        <h3 class="text-7 font-weight-bold text-white mb-2">Ready to Plan Your Journey?</h3>
                        <p class="text-4 text-white opacity-8 mb-0">
                            Whether it's business travel, a family safari, or a group adventure—we'll make it unforgettable.
                        </p>
                    </div>
                    <div class="col-lg-4 text-lg-end">
                        <NuxtLink to="/contact" class="btn btn-light btn-lg font-weight-semibold px-5 py-3">
                            Start Planning <i class="fas fa-arrow-right ms-2"></i>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
useHead({
    title: 'Tours & Travel - PERSUIT Consultants | Corporate & Safari Travel East Africa'
})

const destinations = [
    {
        name: 'Maasai Mara',
        image: '/img/demos/business-consulting-3/services/services-1.jpg',
        highlights: 'Big Five safaris, Great Migration, cultural visits'
    },
    {
        name: 'Diani Beach',
        image: '/img/demos/business-consulting-3/services/services-2.jpg',
        highlights: 'Beach resorts, water sports, marine parks'
    },
    {
        name: 'Serengeti',
        image: '/img/demos/business-consulting-3/services/services-3.jpg',
        highlights: 'Wildlife viewing, balloon safaris, luxury camps'
    },
    {
        name: 'Zanzibar',
        image: '/img/demos/business-consulting-3/services/services-4.jpg',
        highlights: 'Spice tours, Stone Town, pristine beaches'
    },
    {
        name: 'Nairobi',
        image: '/img/demos/business-consulting-3/services/services-5.jpg',
        highlights: 'National Park, Giraffe Centre, Karen Blixen'
    },
    {
        name: 'Amboseli',
        image: '/img/demos/business-consulting-3/services/services-6.jpg',
        highlights: 'Mt. Kilimanjaro views, elephants, bird watching'
    },
    {
        name: 'Lake Nakuru',
        image: '/img/demos/business-consulting-3/services/services-1.jpg',
        highlights: 'Flamingos, rhino sanctuary, scenic beauty'
    },
    {
        name: 'Ngorongoro',
        image: '/img/demos/business-consulting-3/services/services-2.jpg',
        highlights: 'Crater wildlife, Maasai culture, UNESCO site'
    }
]

const benefits = [
    {
        title: 'Local Expertise',
        desc: 'Born and raised in East Africa, we know these destinations inside out.',
        icon: 'fas fa-map-marked-alt'
    },
    {
        title: 'Trusted Partners',
        desc: 'Vetted hotels, lodges, and suppliers across the region.',
        icon: 'fas fa-handshake'
    },
    {
        title: 'Best Rates',
        desc: 'Volume purchasing power and negotiated corporate rates.',
        icon: 'fas fa-tags'
    },
    {
        title: '24/7 Support',
        desc: 'Round-the-clock assistance throughout your journey.',
        icon: 'fas fa-headset'
    },
    {
        title: 'Custom Itineraries',
        desc: 'Every trip is tailored to your specific needs and interests.',
        icon: 'fas fa-route'
    },
    {
        title: 'Seamless Experience',
        desc: 'From booking to return, we handle every detail.',
        icon: 'fas fa-magic'
    }
]
</script>
