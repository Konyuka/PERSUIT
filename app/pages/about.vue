<template>
    <div>
        <!-- Page Header -->
        <section class="page-header page-header-modern bg-color-dark py-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 align-self-center p-static order-2 text-center">
                        <h1 class="text-10 font-weight-bold text-color-light">About Us</h1>
                        <span class="sub-title text-color-light">Learn more about our company</span>
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
                <li class="active">About Us</li>
            </ul>
        </div>

        <!-- About Content -->
        <div class="container py-5 my-4">
            <div class="row align-items-center mb-5">
                <div class="col-lg-6 mb-5 mb-lg-0">
                    <div class="row row-gutter-sm">
                        <div class="col-6">
                            <img src="/img/demos/business-consulting-3/generic/generic-1.jpg"
                                class="img-fluid box-shadow-5" alt="About 1" />
                        </div>
                        <div class="col-6">
                            <img src="/img/demos/business-consulting-3/generic/generic-2.jpg"
                                class="img-fluid box-shadow-5 mb-4" alt="About 2" />
                            <img src="/img/demos/business-consulting-3/generic/generic-3.jpg"
                                class="img-fluid box-shadow-5" alt="About 3" />
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 ps-lg-5">
                    <h2
                        class="custom-highlight-text-1 d-inline-block line-height-5 text-4 positive-ls-3 font-weight-medium text-color-primary mb-2">
                        WHO WE ARE</h2>
                    <h3 class="text-9 line-height-3 text-transform-none font-weight-semibold mb-4">We are a team of
                        dedicated professionals</h3>
                    <p class="text-3-5 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p class="text-3-5 mb-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                        qui officia deserunt mollit anim id est laborum.</p>
                    <NuxtLink to="/contact"
                        class="btn btn-primary custom-btn-style-1 font-weight-semibold btn-px-4 btn-py-2 text-3-5">
                        <span>Get in Touch</span>
                    </NuxtLink>
                </div>
            </div>

            <!-- Mission & Vision -->
            <div class="row py-5">
                <div class="col-lg-4 mb-4 mb-lg-0">
                    <div class="card border-0 shadow h-100">
                        <div class="card-body text-center p-5">
                            <i class="fas fa-bullseye text-color-primary mb-4" style="font-size: 3rem;"></i>
                            <h4 class="font-weight-semibold mb-3">Our Mission</h4>
                            <p class="mb-0">To deliver exceptional consulting services that drive measurable results and
                                create lasting value for our clients.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 mb-4 mb-lg-0">
                    <div class="card border-0 shadow h-100">
                        <div class="card-body text-center p-5">
                            <i class="fas fa-eye text-color-primary mb-4" style="font-size: 3rem;"></i>
                            <h4 class="font-weight-semibold mb-3">Our Vision</h4>
                            <p class="mb-0">To be the leading business consulting firm recognized for innovation,
                                integrity, and transformative impact.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card border-0 shadow h-100">
                        <div class="card-body text-center p-5">
                            <i class="fas fa-heart text-color-primary mb-4" style="font-size: 3rem;"></i>
                            <h4 class="font-weight-semibold mb-3">Our Values</h4>
                            <p class="mb-0">Excellence, integrity, collaboration, and innovation guide everything we do
                                for our clients.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Stats Section -->
            <div class="row py-5 bg-color-grey mt-5">
                <div class="col-lg-3 col-md-6 text-center mb-4 mb-lg-0">
                    <h2 class="text-color-primary font-weight-bold text-12 mb-2">240+</h2>
                    <p class="font-weight-semibold text-4 mb-0">Happy Clients</p>
                </div>
                <div class="col-lg-3 col-md-6 text-center mb-4 mb-lg-0">
                    <h2 class="text-color-primary font-weight-bold text-12 mb-2">15+</h2>
                    <p class="font-weight-semibold text-4 mb-0">Years Experience</p>
                </div>
                <div class="col-lg-3 col-md-6 text-center mb-4 mb-md-0">
                    <h2 class="text-color-primary font-weight-bold text-12 mb-2">500+</h2>
                    <p class="font-weight-semibold text-4 mb-0">Projects Completed</p>
                </div>
                <div class="col-lg-3 col-md-6 text-center">
                    <h2 class="text-color-primary font-weight-bold text-12 mb-2">50+</h2>
                    <p class="font-weight-semibold text-4 mb-0">Team Members</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
useHead({
    title: 'About Us - PURSUIT'
})
</script>
