<template>
    <div>
        <!-- Page Header -->
        <section class="page-header page-header-modern py-5 position-relative"
            style="background: linear-gradient(135deg, #1a2a3a 0%, #0d1b2a 100%);">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 align-self-center p-static order-2 text-center">
                        <h1 class="text-10 font-weight-bold text-color-light mb-2">Our Team</h1>
                        <p class="text-color-light opacity-7 text-4 mb-0">The Experts Behind PERSUIT Consultants</p>
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
                <li class="active">Team</li>
            </ul>
        </div>

        <!-- Team Content -->
        <div class="container py-5 my-4">
            <div class="row justify-content-center mb-5">
                <div class="col-lg-8 text-center">
                    <h2 class="custom-highlight-text-1 d-inline-block line-height-5 text-4 positive-ls-3 font-weight-medium text-color-primary mb-2">
                        MEET THE TEAM</h2>
                    <h3 class="text-9 line-height-3 text-transform-none font-weight-bold mb-4">
                        Industry Experts & Passionate Professionals</h3>
                    <p class="text-3-5 mb-0">
                        Our diverse team brings together decades of experience across hospitality, technology, revenue management, and digital marketing—all united by our passion for transforming East African hospitality.
                    </p>
                </div>
            </div>

            <!-- Leadership Team -->
            <div class="row mb-5">
                <div class="col-12 mb-4">
                    <h4 class="font-weight-bold text-color-primary border-bottom pb-2">Leadership</h4>
                </div>
                <div class="col-lg-4 col-md-6 mb-4" v-for="member in leadershipTeam" :key="member.id">
                    <div class="card border-0 shadow h-100">
                        <div class="card-img-top position-relative overflow-hidden">
                            <img :src="member.image" class="img-fluid w-100" :alt="member.name"
                                style="height: 280px; object-fit: cover;" />
                        </div>
                        <div class="card-body text-center p-4">
                            <h4 class="font-weight-bold text-5 mb-1">{{ member.name }}</h4>
                            <p class="text-color-primary font-weight-semibold mb-3">{{ member.role }}</p>
                            <p class="text-3 text-muted mb-3">{{ member.bio }}</p>
                            <div class="social-icons social-icons-clean social-icons-icon-dark">
                                <a v-if="member.linkedin" :href="member.linkedin" target="_blank" title="LinkedIn"
                                    class="me-2">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                                <a v-if="member.twitter" :href="member.twitter" target="_blank" title="Twitter"
                                    class="me-2">
                                    <i class="fab fa-x-twitter"></i>
                                </a>
                                <a v-if="member.email" :href="'mailto:' + member.email" title="Email">
                                    <i class="fas fa-envelope"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Department Teams -->
            <div class="row mb-5">
                <div class="col-12 mb-4">
                    <h4 class="font-weight-bold text-color-primary border-bottom pb-2">Our Specialists</h4>
                </div>
                <div class="col-lg-3 col-md-6 mb-4" v-for="member in specialistTeam" :key="member.id">
                    <div class="card border-0 shadow-sm h-100">
                        <div class="card-img-top position-relative overflow-hidden">
                            <img :src="member.image" class="img-fluid w-100" :alt="member.name"
                                style="height: 220px; object-fit: cover;" />
                        </div>
                        <div class="card-body text-center p-3">
                            <h5 class="font-weight-bold mb-1">{{ member.name }}</h5>
                            <p class="text-color-primary font-weight-medium text-3 mb-2">{{ member.role }}</p>
                            <p class="text-2 text-muted mb-2">{{ member.specialty }}</p>
                            <div class="social-icons social-icons-clean social-icons-icon-dark social-icons-sm">
                                <a v-if="member.linkedin" :href="member.linkedin" target="_blank" title="LinkedIn">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Why Our Team -->
            <div class="row py-5 bg-color-grey rounded-lg">
                <div class="col-12 text-center mb-4">
                    <h3 class="font-weight-bold mb-3">Why Work With Our Team?</h3>
                </div>
                <div class="col-md-6 col-lg-3 text-center mb-4 mb-lg-0">
                    <div class="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style="width: 70px; height: 70px;">
                        <i class="fas fa-globe-africa text-white" style="font-size: 1.5rem;"></i>
                    </div>
                    <h5 class="font-weight-bold mb-2">Local Expertise</h5>
                    <p class="text-3 text-muted mb-0">Deep understanding of East African hospitality markets</p>
                </div>
                <div class="col-md-6 col-lg-3 text-center mb-4 mb-lg-0">
                    <div class="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style="width: 70px; height: 70px;">
                        <i class="fas fa-laptop-code text-white" style="font-size: 1.5rem;"></i>
                    </div>
                    <h5 class="font-weight-bold mb-2">Tech Savvy</h5>
                    <p class="text-3 text-muted mb-0">Experience with leading hospitality technology platforms</p>
                </div>
                <div class="col-md-6 col-lg-3 text-center mb-4 mb-md-0">
                    <div class="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style="width: 70px; height: 70px;">
                        <i class="fas fa-users text-white" style="font-size: 1.5rem;"></i>
                    </div>
                    <h5 class="font-weight-bold mb-2">Client-Focused</h5>
                    <p class="text-3 text-muted mb-0">Dedicated to delivering measurable results</p>
                </div>
                <div class="col-md-6 col-lg-3 text-center">
                    <div class="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style="width: 70px; height: 70px;">
                        <i class="fas fa-handshake text-white" style="font-size: 1.5rem;"></i>
                    </div>
                    <h5 class="font-weight-bold mb-2">Partnership Mindset</h5>
                    <p class="text-3 text-muted mb-0">Long-term relationships over quick transactions</p>
                </div>
            </div>

            <!-- Join Our Team CTA -->
            <div class="row mt-5 py-5 text-center" style="background: linear-gradient(135deg, #1a2a3a 0%, #0d1b2a 100%); border-radius: 10px;">
                <div class="col-12">
                    <h3 class="text-color-light font-weight-bold mb-3">Want to Join Our Team?</h3>
                    <p class="text-color-light opacity-8 mb-4">
                        We're always looking for talented professionals passionate about hospitality technology.
                    </p>
                    <NuxtLink to="/contact"
                        class="btn btn-primary custom-btn-style-1 font-weight-semibold btn-px-4 btn-py-2 text-3-5">
                        <span>View Career Opportunities</span>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
useHead({
    title: 'Our Team - PERSUIT Consultants | Hospitality Technology Experts'
})

const leadershipTeam = [
    {
        id: 1,
        name: 'James Mwangi',
        role: 'Founder & CEO',
        image: '/img/demos/business-consulting-3/team/team-1.jpg',
        bio: 'Over 15 years of experience in hospitality consulting and technology partnerships across East Africa.',
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        email: 'james@persuitconsultants.com'
    },
    {
        id: 2,
        name: 'Sarah Kimani',
        role: 'Chief Operations Officer',
        image: '/img/demos/business-consulting-3/team/team-3.jpg',
        bio: 'Expert in operational excellence with a background in hotel management and process optimization.',
        linkedin: 'https://linkedin.com',
        email: 'sarah@persuitconsultants.com'
    },
    {
        id: 3,
        name: 'David Ochieng',
        role: 'Head of Technology Partnerships',
        image: '/img/demos/business-consulting-3/team/team-2.jpg',
        bio: 'Former tech executive with expertise in B2B partnerships and market expansion strategies.',
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        email: 'david@persuitconsultants.com'
    }
]

const specialistTeam = [
    {
        id: 4,
        name: 'Grace Wanjiku',
        role: 'Revenue Manager',
        image: '/img/demos/business-consulting-3/team/team-4.jpg',
        specialty: 'Pricing Strategy & Demand Forecasting',
        linkedin: 'https://linkedin.com'
    },
    {
        id: 5,
        name: 'Peter Njoroge',
        role: 'Digital Marketing Lead',
        image: '/img/demos/business-consulting-3/team/team-5.jpg',
        specialty: 'SEO, PPC & Social Media',
        linkedin: 'https://linkedin.com'
    },
    {
        id: 6,
        name: 'Amina Hassan',
        role: 'Travel Consultant',
        image: '/img/demos/business-consulting-3/team/team-3.jpg',
        specialty: 'Corporate & Group Travel',
        linkedin: 'https://linkedin.com'
    },
    {
        id: 7,
        name: 'Michael Oduor',
        role: 'Tech Integration Specialist',
        image: '/img/demos/business-consulting-3/team/team-1.jpg',
        specialty: 'CRM, PMS & Channel Managers',
        linkedin: 'https://linkedin.com'
    },
    {
        id: 8,
        name: 'Elizabeth Mutua',
        role: 'Account Manager',
        image: '/img/demos/business-consulting-3/team/team-4.jpg',
        specialty: 'Client Success & Retention',
        linkedin: 'https://linkedin.com'
    },
    {
        id: 9,
        name: 'Brian Kipkorir',
        role: 'Market Research Analyst',
        image: '/img/demos/business-consulting-3/team/team-2.jpg',
        specialty: 'Competitor Analysis & Trends',
        linkedin: 'https://linkedin.com'
    },
    {
        id: 10,
        name: 'Nancy Achieng',
        role: 'Training Coordinator',
        image: '/img/demos/business-consulting-3/team/team-5.jpg',
        specialty: 'Workshops & Capacity Building',
        linkedin: 'https://linkedin.com'
    },
    {
        id: 11,
        name: 'Samuel Kamau',
        role: 'Business Development',
        image: '/img/demos/business-consulting-3/team/team-1.jpg',
        specialty: 'New Partnerships & Sales',
        linkedin: 'https://linkedin.com'
    }
]
</script>
