<template>
    <div>
        <!-- Hero Section with Parallax Background -->
        <section class="section section-height-3 section-with-shape-divider position-relative border-0 m-0"
            data-plugin-parallax data-plugin-options="{'speed': 1.5, 'parallaxHeight': '120%'}"
            data-image-src="/img/demos/business-consulting-3/backgrounds/background-1.jpg">
            <!-- Woman Image on Right -->
            <img src="/img/demos/business-consulting-3/backgrounds/background-woman.png"
                class="img-fluid position-absolute top-0 end-0 d-none d-md-block appear-animation"
                data-appear-animation="fadeInUpShorter" data-appear-animation-delay="1100" alt="PERSUIT Consultant"
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
                        <strong
                            class="d-block font-weight-semibold text-color-dark text-5-5 line-height-4 mb-3 pb-1 appear-animation"
                            data-appear-animation="fadeInUpShorter" data-appear-animation-delay="500">
                            Bridging International Technology &
                            <span class="custom-highlight-text-1 font-weight-bold">East African Hospitality!</span>
                        </strong>
                        <p class="text-3-5 mb-4 appear-animation" data-appear-animation="fadeInUpShorter"
                            data-appear-animation-delay="750">
                            We connect global tech solutions with hotels, tour operators, and travel companies across
                            East Africa—enabling digital transformation,
                            boosting revenue, and building lasting partnerships. Our team of industry experts bridges
                            the gap between cutting-edge international
                            technology and the unique needs of the African hospitality market, ensuring seamless
                            integration and sustainable growth.
                        </p>
                        <!-- Scroll Down Link -->
                        <a href="#aboutus" data-hash data-hash-offset="0" data-hash-offset-lg="100"
                            class="d-inline-flex align-items-center text-decoration-none appear-animation"
                            data-appear-animation="fadeInUpShorter" data-appear-animation-delay="1000">
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
                        We specialize in connecting international technology providers with East African hospitality
                        businesses.
                        From hotels and lodges to tour operators and travel agencies—we facilitate partnerships, drive
                        technology
                        adoption, and deliver measurable results.
                    </p>
                    <div class="row align-items-center pb-2 mb-4 mb-lg-1 mb-xl-4">
                        <div class="col-6">
                            <div class="d-flex align-items-center">
                                <div class="bg-primary rounded-circle d-flex align-items-center justify-content-center me-3"
                                    style="width: 56px; height: 56px; min-width: 56px;">
                                    <i class="fas fa-globe-africa text-white fa-lg"></i>
                                </div>
                                <div>
                                    <strong class="d-block font-weight-bold text-7 text-color-primary">50+</strong>
                                    <span class="text-3 text-muted">Partner Companies</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="d-flex align-items-center">
                                <div class="bg-primary rounded-circle d-flex align-items-center justify-content-center me-3"
                                    style="width: 56px; height: 56px; min-width: 56px;">
                                    <i class="fas fa-hotel text-white fa-lg"></i>
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

        <!-- Partner Logos Carousel -->
        <div class="container-fluid pt-5 mt-5 mb-4">
            <div class="row">
                <div class="col">
                    <ClientOnly>
                        <PartnersCarousel />
                    </ClientOnly>
                </div>
            </div>
        </div>

        <!-- What We Do Section - All Services with Image Cards -->
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
                        <h3 class="text-9 line-height-3 text-transform-none font-weight-semibold mb-3 pb-1">
                            Comprehensive Solutions for Hospitality Excellence</h3>
                        <p class="text-3-5 pb-3 mb-4">
                            From technology integration to revenue optimization, we provide end-to-end consulting
                            services
                            tailored for the East African hospitality industry.
                        </p>
                    </div>
                </div>
                <div class="row row-gutter-sm justify-content-center mb-5">
                    <div class="col-sm-9 col-md-6 col-lg-4 mb-4" v-for="(service, index) in services"
                        :key="service.title" :class="{ 'mb-lg-0': index >= 3 }">
                        <NuxtLink :to="service.link" class="custom-link-hover-effects text-decoration-none">
                            <div class="card box-shadow-4">
                                <div class="card-img-top position-relative overlay overlay-show">
                                    <div class="position-absolute bottom-0 left-0 w-100 py-3 px-4 z-index-3">
                                        <h4 class="font-weight-semibold text-color-light text-6 mb-1">{{ service.title
                                            }}</h4>
                                        <div class="custom-crooked-line">
                                            <img width="154" height="26"
                                                src="/img/demos/business-consulting-3/icons/infinite-crooked-line.svg"
                                                alt="" style="width: 154px;" />
                                        </div>
                                    </div>
                                    <img :src="service.image" class="img-fluid" :alt="service.title" />
                                </div>
                                <div class="card-body d-flex align-items-center custom-view-more px-4">
                                    <p class="card-text w-100 mb-0">{{ service.description }}</p>
                                    <img width="50" height="50" class="w-auto"
                                        src="/img/demos/business-consulting-3/icons/arrow-right.svg" alt=""
                                        style="width: 50px;" />
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
                        <h2
                            class="custom-highlight-text-1 d-inline-block line-height-5 text-4 positive-ls-3 font-weight-medium text-color-primary mb-2">
                            WHO WE SERVE</h2>
                        <h3 class="text-9 line-height-3 text-transform-none font-weight-bold mb-3">
                            Industries We Specialize In</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 col-lg-3 mb-4" v-for="industry in industries" :key="industry.name">
                        <div class="card h-100 text-center p-4 position-relative overflow-hidden industry-card"
                            style="border: none; border-left: 4px solid #F04C23; border-radius: 0 8px 8px 0; box-shadow: 0 5px 25px rgba(0,0,0,0.08); transition: all 0.3s ease;">
                            <!-- Subtle gradient accent on hover -->
                            <div class="position-absolute top-0 start-0 w-100 h-100"
                                style="background: linear-gradient(135deg, rgba(240,76,35,0.02) 0%, transparent 50%); pointer-events: none;">
                            </div>
                            <div class="position-relative">
                                <div class="mx-auto mb-3 d-flex align-items-center justify-content-center"
                                    style="width: 70px; height: 70px; background: linear-gradient(135deg, rgba(240,76,35,0.1) 0%, rgba(240,76,35,0.05) 100%); border-radius: 12px;">
                                    <i :class="industry.icon" class="text-color-primary" style="font-size: 2rem;"></i>
                                </div>
                                <h5 class="font-weight-bold mb-2 text-uppercase text-3" style="letter-spacing: 1px;">{{
                                    industry.name }}</h5>
                                <p class="text-3 text-muted mb-0">{{ industry.description }}</p>
                            </div>
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
            <!-- Orange parallax left side -->
            <div class="position-absolute top-0 start-0 h-100 d-none d-lg-block"
                style="width: 40%; background: linear-gradient(135deg, #F04C23 0%, #e04420 100%);">
                <div class="position-absolute top-0 start-0 w-100 h-100"
                    style="background: url('/img/demos/business-consulting-3/parallax/parallax-1.jpg') center center; background-size: cover; mix-blend-mode: multiply; opacity: 0.3;">
                </div>
            </div>
            <!-- BENEFITS text spanning both sections -->
            <div class="position-absolute d-none d-lg-block"
                style="top: 50%; left: 16.1%; transform: translateY(-50%); z-index: 2;">
                <h2 class="font-weight-bold mb-0 text-white opacity-50"
                    style="font-size: 140px; line-height: 1; letter-spacing: -2px;">
                    BENEFITS</h2>
            </div>
            <div class="container position-relative z-index-3 pt-5 mt-5">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <!-- Spacer for left side -->
                    </div>
                    <div class="col-lg-6">
                        <h2
                            class="custom-highlight-text-1 d-inline-block line-height-5 text-4 positive-ls-3 font-weight-medium text-color-primary mb-2">
                            WHY CHOOSE PERSUIT</h2>
                        <h3
                            class="text-9 line-height-3 text-transform-none font-weight-bold text-color-light ls-0 mb-3 pb-1">
                            The East Africa Hospitality Tech Experts</h3>
                        <p class="text-3-5 text-color-light opacity-8 pb-2 mb-4">
                            We understand both sides of the equation—international tech companies seeking market entry
                            and local hospitality businesses needing digital transformation.
                        </p>
                        <ul class="list list-unstyled ps-0 pe-lg-5 mb-0">
                            <li class="d-flex align-items-start pb-1 mb-3" v-for="benefit in benefits" :key="benefit">
                                <div class="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0 bg-white"
                                    style="width: 40px; height: 40px; min-width: 40px;">
                                    <i class="fas fa-check text-color-primary"></i>
                                </div>
                                <span class="text-3-5 text-color-light ps-3">{{ benefit }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- Skills Section with Progress Bars -->
        <div class="container">
            <div class="row align-items-center py-4 my-5 mb-lg-0 my-xl-5">
                <div class="col-lg-7 mb-5 mb-lg-0">
                    <h2 class="text-9 line-height-3 text-transform-none font-weight-semibold mb-4">
                        Expertise That Drives Meaningful Results for Your Business</h2>
                    <p class="text-3-5 pb-3 mb-4">
                        Our team combines deep hospitality knowledge with cutting-edge technology skills.
                        We deliver measurable improvements across every aspect of your operations.
                    </p>
                    <div class="progress-bars pb-4">
                        <div class="progress-label d-flex justify-content-between">
                            <span class="text-color-dark font-weight-semibold text-2">TECHNOLOGY INTEGRATION</span>
                            <span class="text-color-dark font-weight-semibold text-2">95%</span>
                        </div>
                        <div class="progress progress-xs progress-no-border-radius bg-color-grey mb-4">
                            <div class="progress-bar bg-primary" role="progressbar" style="width: 95%"></div>
                        </div>

                        <hr class="my-0">

                        <div class="progress-label d-flex justify-content-between pt-2">
                            <span class="text-color-dark font-weight-semibold text-2">REVENUE OPTIMIZATION</span>
                            <span class="text-color-dark font-weight-semibold text-2">90%</span>
                        </div>
                        <div class="progress progress-xs progress-no-border-radius bg-color-grey mb-4">
                            <div class="progress-bar bg-primary" role="progressbar" style="width: 90%"></div>
                        </div>

                        <hr class="my-0">

                        <div class="progress-label d-flex justify-content-between pt-2">
                            <span class="text-color-dark font-weight-semibold text-2">MARKET EXPANSION</span>
                            <span class="text-color-dark font-weight-semibold text-2">85%</span>
                        </div>
                        <div class="progress progress-xs progress-no-border-radius bg-color-grey mb-4">
                            <div class="progress-bar bg-primary" role="progressbar" style="width: 85%"></div>
                        </div>

                        <hr class="my-0">

                        <div class="progress-label d-flex justify-content-between pt-2">
                            <span class="text-color-dark font-weight-semibold text-2">PARTNERSHIP SUCCESS</span>
                            <span class="text-color-dark font-weight-semibold text-2">92%</span>
                        </div>
                        <div class="progress progress-xs progress-no-border-radius bg-color-grey mb-4">
                            <div class="progress-bar bg-primary" role="progressbar" style="width: 92%"></div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5">
                    <img src="/img/demos/business-consulting-3/generic/generic-4.jpg" class="img-fluid"
                        alt="Skills and expertise" />
                </div>
            </div>
        </div>

        <!-- Get In Touch Section -->
        <section class="section section-with-shape-divider position-relative bg-dark border-0 m-0">
            <div class="shape-divider shape-divider-reverse-x z-index-3" style="height: 102px;">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1920 102"
                    preserveAspectRatio="xMinYMin">
                    <polygon fill="#F3F3F3" points="0,65 220,35 562,63 931,10 1410,68 1920,16 1920,103 0,103 " />
                    <polygon fill="#FFFFFF" points="0,82 219,51 562,78 931,26 1409,83 1920,32 1920,103 0,103 " />
                </svg>
            </div>
            <!-- Orange right panel with background image -->
            <div class="position-absolute top-0 end-0 h-100 d-none d-md-block"
                style="width: 32%; background: linear-gradient(135deg, rgba(240,76,35,0.9) 0%, rgba(224,68,32,0.95) 100%);">
                <div class="position-absolute top-0 start-0 w-100 h-100"
                    style="background: url('/img/demos/business-consulting-3/backgrounds/background-2.jpg') center center; background-size: cover; mix-blend-mode: multiply; opacity: 0.3;">
                </div>
            </div>
            <div class="container">
                <div class="row align-items-center pt-5 pb-xl-5 mt-5">
                    <div class="col-md-7 col-lg-8 py-4 my-2 ms-md-3 ms-lg-0">
                        <h2
                            class="custom-highlight-text-1 d-inline-block line-height-5 text-4 positive-ls-3 font-weight-medium text-color-primary mb-2">
                            GET IN TOUCH</h2>
                        <h3
                            class="text-9 line-height-3 text-transform-none font-weight-medium text-color-light ls-0 mb-3 pb-1">
                            Send Us a Message and Learn More About Our Services</h3>
                        <p class="text-3-5 text-color-light opacity-7 pb-3 mb-4">
                            Have questions about our hospitality technology solutions? Ready to explore a partnership?
                            We'd love to hear from you. Fill out the form below and our team will get back to you within
                            24
                            hours.
                        </p>
                        <form class="contact-form">
                            <div class="row">
                                <div class="form-group col">
                                    <input type="text" class="form-control text-3 h-auto py-2 bg-transparent text-white"
                                        style="border: none; border-bottom: 1px solid rgba(255,255,255,0.3);"
                                        name="name" placeholder="* Full Name" required>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="form-group col">
                                    <input type="email"
                                        class="form-control text-3 h-auto py-2 bg-transparent text-white"
                                        style="border: none; border-bottom: 1px solid rgba(255,255,255,0.3);"
                                        name="email" placeholder="* Email Address" required>
                                </div>
                            </div>
                            <div class="row mt-3 mb-4">
                                <div class="form-group col">
                                    <textarea rows="4" class="form-control text-3 h-auto py-2 bg-transparent text-white"
                                        style="border: none; border-bottom: 1px solid rgba(255,255,255,0.3);"
                                        name="message" placeholder="* Message" required></textarea>
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group col">
                                    <button type="submit"
                                        class="btn btn-primary custom-btn-style-1 font-weight-semibold btn-px-4 btn-py-2 text-3-5">
                                        <span>Send Message</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        <!-- Testimonials Section -->
        <section class="section section-height-3 border-0 m-0 position-relative"
            style="background: url('/img/demos/business-consulting-3/backgrounds/background-3.jpg') center center; background-size: cover;">
            <div class="container py-4">
                <div class="row">
                    <div class="col text-center">
                        <h2
                            class="custom-highlight-text-1 d-inline-block line-height-5 text-4 positive-ls-3 font-weight-medium text-color-primary mb-2">
                            TESTIMONIALS</h2>
                        <h3
                            class="text-9 line-height-3 text-transform-none font-weight-semibold text-color-dark pb-3 mb-4">
                            What People Say</h3>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-10">
                        <ClientOnly>
                            <div class="bg-white box-shadow-4 p-5 position-relative" style="border-radius: 8px;">
                                <!-- Quote icon -->
                                <div class="text-center mb-4">
                                    <span class="text-color-primary"
                                        style="font-size: 3rem; font-family: serif;">"</span>
                                </div>
                                <!-- Testimonial content -->
                                <div class="text-center px-lg-5">
                                    <p class="text-color-dark text-4 line-height-8 mb-4" style="font-style: italic;">
                                        {{ testimonials[currentTestimonial].quote }}
                                    </p>
                                    <div class="testimonial-author">
                                        <strong class="font-weight-bold text-5-5 d-block mb-1">
                                            - {{ testimonials[currentTestimonial].name }}</strong>
                                        <span class="text-color-dark">{{ testimonials[currentTestimonial].role }}</span>
                                    </div>
                                </div>
                                <!-- Navigation arrows -->
                                <div class="d-flex justify-content-between align-items-center position-absolute w-100 top-50 start-0 translate-middle-y px-3"
                                    style="pointer-events: none;">
                                    <button @click="prevTestimonial" class="btn btn-link text-color-primary p-2"
                                        style="pointer-events: auto; font-size: 1.5rem;">
                                        <i class="fas fa-arrow-left"></i>
                                    </button>
                                    <button @click="nextTestimonial" class="btn btn-link text-color-primary p-2"
                                        style="pointer-events: auto; font-size: 1.5rem;">
                                        <i class="fas fa-arrow-right"></i>
                                    </button>
                                </div>
                                <!-- Dots indicator -->
                                <div class="d-flex justify-content-center gap-2 mt-4">
                                    <span v-for="(_, index) in testimonials" :key="index"
                                        @click="currentTestimonial = index" class="rounded-circle cursor-pointer"
                                        :style="{
                                            width: '10px',
                                            height: '10px',
                                            backgroundColor: currentTestimonial === index ? '#F04C23' : '#ddd',
                                            cursor: 'pointer'
                                        }"></span>
                                </div>
                            </div>
                            <template #fallback>
                                <div class="bg-white box-shadow-4 p-5" style="border-radius: 8px; min-height: 200px;">
                                </div>
                            </template>
                        </ClientOnly>
                    </div>
                </div>
            </div>
        </section>

        <!-- Problems We Solve Section -->
        <section class="section border-0 m-0 py-5" style="background-color: #f4f4f4;">
            <div class="container py-4">
                <div class="row justify-content-center mb-5">
                    <div class="col-lg-8 text-center">
                        <h2
                            class="custom-highlight-text-1 d-inline-block line-height-5 text-4 positive-ls-3 font-weight-medium text-color-primary mb-2">
                            PROBLEMS WE SOLVE</h2>
                        <h3 class="text-9 line-height-3 text-transform-none font-weight-bold mb-3">
                            Delivering Measurable Results</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 col-lg-4 mb-4" v-for="problem in problemsSolved" :key="problem.title">
                        <div class="card h-100 position-relative overflow-hidden industry-card bg-white"
                            style="border: none; border-left: 4px solid #F04C23; border-radius: 0 8px 8px 0; box-shadow: 0 5px 25px rgba(0,0,0,0.08); transition: all 0.3s ease;">
                            <!-- Subtle gradient accent -->
                            <div class="position-absolute top-0 start-0 w-100 h-100"
                                style="background: linear-gradient(135deg, rgba(240,76,35,0.02) 0%, transparent 50%); pointer-events: none;">
                            </div>
                            <div class="card-body p-4 position-relative">
                                <div class="d-flex align-items-center mb-3">
                                    <div class="d-flex align-items-center justify-content-center flex-shrink-0"
                                        style="width: 50px; height: 50px; background: linear-gradient(135deg, rgba(240,76,35,0.1) 0%, rgba(240,76,35,0.05) 100%); border-radius: 10px;">
                                        <i :class="problem.icon" class="text-color-primary"
                                            style="font-size: 1.3rem;"></i>
                                    </div>
                                    <h5 class="font-weight-bold mb-0 ms-3 text-uppercase text-3"
                                        style="letter-spacing: 0.5px;">
                                        {{ problem.title }}</h5>
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
                            Whether you're a tech company looking to enter the East African market or a hospitality
                            business
                            seeking digital transformation, we're here to help you succeed.
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
                    <div class="col-lg-5 d-flex justify-content-center justify-content-lg-end">
                        <div class="position-relative" style="max-width: 380px;">
                            <!-- Decorative background elements -->
                            <div class="position-absolute"
                                style="width: 100%; height: 100%; background: linear-gradient(135deg, #F04C23 0%, #ff6b4a 100%); border-radius: 20px; transform: rotate(3deg); top: 10px; left: 10px; opacity: 0.3;">
                            </div>
                            <div class="position-absolute"
                                style="width: 100%; height: 100%; background: linear-gradient(135deg, #F04C23 0%, #ff6b4a 100%); border-radius: 20px; transform: rotate(-2deg); top: 5px; left: -5px; opacity: 0.15;">
                            </div>

                            <!-- Main card -->
                            <div class="position-relative bg-white p-5"
                                style="border-radius: 20px; box-shadow: 0 25px 50px rgba(0,0,0,0.25);">
                                <!-- Top accent bar -->
                                <div class="position-absolute top-0 start-50 translate-middle-x"
                                    style="width: 60px; height: 4px; background: linear-gradient(90deg, #F04C23, #ff6b4a); border-radius: 2px; margin-top: -2px;">
                                </div>

                                <!-- Header -->
                                <div class="text-center mb-4">
                                    <div class="d-inline-flex align-items-center justify-content-center mb-3"
                                        style="width: 60px; height: 60px; background: linear-gradient(135deg, rgba(240,76,35,0.1) 0%, rgba(240,76,35,0.05) 100%); border-radius: 50%;">
                                        <i class="fas fa-headset text-color-primary" style="font-size: 1.5rem;"></i>
                                    </div>
                                    <h5 class="font-weight-bold text-uppercase mb-0"
                                        style="letter-spacing: 2px; font-size: 0.9rem;">Quick Contact</h5>
                                </div>

                                <!-- Contact items -->
                                <div class="d-flex flex-column gap-3">
                                    <a href="mailto:info@persuitconsultants.com"
                                        class="d-flex align-items-center text-decoration-none p-3"
                                        style="background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%); border-radius: 12px; border: 1px solid #eee; transition: all 0.3s ease;">
                                        <div class="d-flex align-items-center justify-content-center flex-shrink-0"
                                            style="width: 44px; height: 44px; background: linear-gradient(135deg, #F04C23 0%, #ff6b4a 100%); border-radius: 10px;">
                                            <i class="fas fa-envelope text-white"></i>
                                        </div>
                                        <span class="ms-3 text-dark font-weight-medium"
                                            style="font-size: 0.95rem;">info@persuitconsultants.com</span>
                                    </a>

                                    <a href="tel:+254700000000"
                                        class="d-flex align-items-center text-decoration-none p-3"
                                        style="background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%); border-radius: 12px; border: 1px solid #eee; transition: all 0.3s ease;">
                                        <div class="d-flex align-items-center justify-content-center flex-shrink-0"
                                            style="width: 44px; height: 44px; background: linear-gradient(135deg, #F04C23 0%, #ff6b4a 100%); border-radius: 10px;">
                                            <i class="fas fa-phone text-white"></i>
                                        </div>
                                        <span class="ms-3 text-dark font-weight-medium" style="font-size: 0.95rem;">+254
                                            700 000
                                            000</span>
                                    </a>

                                    <div class="d-flex align-items-center p-3"
                                        style="background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%); border-radius: 12px; border: 1px solid #eee;">
                                        <div class="d-flex align-items-center justify-content-center flex-shrink-0"
                                            style="width: 44px; height: 44px; background: linear-gradient(135deg, #F04C23 0%, #ff6b4a 100%); border-radius: 10px;">
                                            <i class="fas fa-map-marker-alt text-white"></i>
                                        </div>
                                        <span class="ms-3 text-dark font-weight-medium"
                                            style="font-size: 0.95rem;">Nairobi,
                                            Kenya</span>
                                    </div>
                                </div>

                                <!-- Bottom decoration -->
                                <div class="text-center mt-4 pt-3" style="border-top: 1px dashed #eee;">
                                    <span class="text-muted" style="font-size: 0.8rem;">Available 24/7 for urgent
                                        inquiries</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref } from 'vue'

useHead({
    title: 'PERSUIT Consultants | Hospitality Technology & Revenue Management | East Africa'
})

const services = [
    {
        title: 'Tech Partnerships',
        description: 'Bridge between global tech solutions and East African hospitality businesses.',
        image: '/img/demos/business-consulting-3/services/services-1.jpg',
        link: '/services/tech-partnerships'
    },
    {
        title: 'Tours & Travel',
        description: 'Curated travel experiences for corporates, families, and groups.',
        image: '/img/demos/business-consulting-3/services/services-2.jpg',
        link: '/services/tours-travel'
    },
    {
        title: 'Revenue Management',
        description: 'Dynamic pricing, forecasting, and profitability optimization.',
        image: '/img/demos/business-consulting-3/services/services-3.jpg',
        link: '/services/revenue-management'
    },
    {
        title: 'Digital Marketing',
        description: 'SEO, PPC, social media, and online reputation management.',
        image: '/img/demos/business-consulting-3/services/services-4.jpg',
        link: '/services/digital-marketing'
    },
    {
        title: 'Training & Development',
        description: 'Workshops and onboarding for hospitality tech adoption.',
        image: '/img/demos/business-consulting-3/services/services-5.jpg',
        link: '/services/training'
    },
    {
        title: 'Strategic Consulting',
        description: 'End-to-end strategy for digital transformation.',
        image: '/img/demos/business-consulting-3/services/services-6.jpg',
        link: '/services/consulting'
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

// Testimonials data
const testimonials = [
    {
        quote: 'PERSUIT Consultants transformed our hotel\'s digital presence. Their technology integration expertise helped us increase direct bookings by 40% and streamline our operations significantly.',
        name: 'Sarah Mwangi',
        role: 'General Manager, Serena Hotels Kenya'
    },
    {
        quote: 'As a tour operator, working with PERSUIT was a game-changer. They connected us with the right technology partners and helped us modernize our booking systems seamlessly.',
        name: 'James Ochieng',
        role: 'CEO, Safari Adventures East Africa'
    },
    {
        quote: 'The revenue management strategies implemented by PERSUIT helped us optimize our pricing and increase our RevPAR by 25%. Their understanding of the East African market is unmatched.',
        name: 'Grace Kimani',
        role: 'Director of Revenue, Fairmont Hotels'
    }
]

// Testimonial navigation
const currentTestimonial = ref(0)

const nextTestimonial = () => {
    currentTestimonial.value = (currentTestimonial.value + 1) % testimonials.length
}

const prevTestimonial = () => {
    currentTestimonial.value = (currentTestimonial.value - 1 + testimonials.length) % testimonials.length
}
</script>
