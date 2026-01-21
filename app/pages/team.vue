<template>
    <div>
        <!-- Page Header -->
        <section class="page-header page-header-modern bg-color-dark py-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 align-self-center p-static order-2 text-center">
                        <h1 class="text-10 font-weight-bold text-color-light">Our Team</h1>
                        <span class="sub-title text-color-light">Meet our talented professionals</span>
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
                    <h2
                        class="custom-highlight-text-1 d-inline-block line-height-5 text-4 positive-ls-3 font-weight-medium text-color-primary mb-2">
                        THE MEMBERS</h2>
                    <h3 class="text-9 line-height-3 text-transform-none font-weight-semibold mb-4">Our Amazing Team</h3>
                    <p class="text-3-5 mb-0">Our diverse team of experts brings together decades of experience across
                        various industries to deliver exceptional results for our clients.</p>
                </div>
            </div>

            <!-- Team Grid -->
            <div class="row">
                <div class="col-lg-3 col-md-6 mb-4" v-for="member in teamMembers" :key="member.id">
                    <div class="card border-0 shadow h-100">
                        <div class="card-img-top position-relative overlay">
                            <img :src="member.image" class="img-fluid" :alt="member.name" />
                        </div>
                        <div class="card-body text-center p-4">
                            <h4 class="font-weight-semibold text-5 mb-1">{{ member.name }}</h4>
                            <p class="text-color-primary font-weight-medium mb-3">{{ member.role }}</p>
                            <p class="text-3 mb-3">{{ member.bio }}</p>
                            <div class="social-icons social-icons-clean social-icons-icon-dark">
                                <a v-if="member.linkedin" :href="member.linkedin" target="_blank" title="LinkedIn">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                                <a v-if="member.twitter" :href="member.twitter" target="_blank" title="Twitter">
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

            <!-- Join Our Team CTA -->
            <div class="row mt-5 py-5 bg-color-grey text-center">
                <div class="col-12">
                    <h3 class="font-weight-semibold mb-3">Want to Join Our Team?</h3>
                    <p class="mb-4">We're always looking for talented individuals to join our growing team.</p>
                    <NuxtLink to="/contact"
                        class="btn btn-primary custom-btn-style-1 font-weight-semibold btn-px-4 btn-py-2 text-3-5">
                        <span>View Open Positions</span>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
useHead({
    title: 'Our Team - PURSUIT'
})

const teamMembers = [
    {
        id: 1,
        name: 'John Doe',
        role: 'CEO & Founder',
        image: '/img/demos/business-consulting-3/team/team-1.jpg',
        bio: 'Over 20 years of experience in strategic consulting.',
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        email: 'john@pursuit.com'
    },
    {
        id: 2,
        name: 'Robert Smith',
        role: 'Chief Strategy Officer',
        image: '/img/demos/business-consulting-3/team/team-2.jpg',
        bio: 'Expert in business transformation and growth strategies.',
        linkedin: 'https://linkedin.com',
        email: 'robert@pursuit.com'
    },
    {
        id: 3,
        name: 'Jessica Brown',
        role: 'Director of Operations',
        image: '/img/demos/business-consulting-3/team/team-3.jpg',
        bio: 'Specializes in operational excellence and efficiency.',
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        email: 'jessica@pursuit.com'
    },
    {
        id: 4,
        name: 'Monica Wilson',
        role: 'Marketing Director',
        image: '/img/demos/business-consulting-3/team/team-4.jpg',
        bio: 'Digital marketing strategist with a creative edge.',
        linkedin: 'https://linkedin.com',
        email: 'monica@pursuit.com'
    },
    {
        id: 5,
        name: 'Chris Johnson',
        role: 'Financial Advisor',
        image: '/img/demos/business-consulting-3/team/team-5.jpg',
        bio: 'Certified financial planner and investment specialist.',
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        email: 'chris@pursuit.com'
    },
    {
        id: 6,
        name: 'Sarah Davis',
        role: 'HR Manager',
        image: '/img/demos/business-consulting-3/team/team-1.jpg',
        bio: 'Building strong teams and positive workplace cultures.',
        linkedin: 'https://linkedin.com',
        email: 'sarah@pursuit.com'
    },
    {
        id: 7,
        name: 'Michael Lee',
        role: 'Technology Lead',
        image: '/img/demos/business-consulting-3/team/team-2.jpg',
        bio: 'Driving digital transformation and innovation.',
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
        email: 'michael@pursuit.com'
    },
    {
        id: 8,
        name: 'Emily Chen',
        role: 'Client Relations',
        image: '/img/demos/business-consulting-3/team/team-3.jpg',
        bio: 'Ensuring exceptional client experiences every time.',
        linkedin: 'https://linkedin.com',
        email: 'emily@pursuit.com'
    }
]
</script>
