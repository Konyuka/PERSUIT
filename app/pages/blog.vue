<template>
    <div>
        <!-- Page Header -->
        <section class="page-header page-header-modern py-5 position-relative"
            style="background: linear-gradient(135deg, #1a2a3a 0%, #0d1b2a 100%);">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 align-self-center p-static order-2 text-center">
                        <h1 class="text-10 font-weight-bold text-color-light mb-2">Insights & Blog</h1>
                        <p class="text-color-light opacity-7 text-4 mb-0">Industry Trends, Tips & Expert Analysis</p>
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
                <li class="active">Insights</li>
            </ul>
        </div>

        <!-- Blog Content -->
        <div class="container py-5 my-4">
            <div class="row">
                <!-- Blog Posts -->
                <div class="col-lg-8">
                    <!-- Featured Post -->
                    <div class="card border-0 shadow-lg mb-5" v-if="featuredPost">
                        <div class="row g-0">
                            <div class="col-md-6">
                                <img :src="featuredPost.image" class="img-fluid rounded-start h-100" :alt="featuredPost.title"
                                    style="object-fit: cover; min-height: 300px;" />
                            </div>
                            <div class="col-md-6">
                                <div class="card-body p-4 d-flex flex-column h-100">
                                    <span class="badge bg-primary mb-3" style="width: fit-content;">{{ featuredPost.category }}</span>
                                    <h3 class="font-weight-bold mb-3">{{ featuredPost.title }}</h3>
                                    <p class="text-muted mb-3">{{ featuredPost.excerpt }}</p>
                                    <div class="mt-auto">
                                        <div class="d-flex align-items-center text-3 mb-3">
                                            <span class="text-color-grey me-3">
                                                <i class="fas fa-calendar-alt me-1"></i> {{ featuredPost.date }}
                                            </span>
                                            <span class="text-color-grey">
                                                <i class="fas fa-user me-1"></i> {{ featuredPost.author }}
                                            </span>
                                        </div>
                                        <a href="#" class="btn btn-primary font-weight-semibold">
                                            Read Article <i class="fas fa-arrow-right ms-2"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Blog Grid -->
                    <div class="row">
                        <div class="col-md-6 mb-4" v-for="post in blogPosts" :key="post.id">
                            <article class="card border-0 shadow h-100">
                                <div class="card-img-top position-relative overflow-hidden">
                                    <img :src="post.image" class="img-fluid w-100" :alt="post.title"
                                        style="height: 200px; object-fit: cover;" />
                                    <span
                                        class="position-absolute top-0 start-0 bg-color-primary text-color-light px-3 py-2 m-3 font-weight-semibold text-2">
                                        {{ post.category }}
                                    </span>
                                </div>
                                <div class="card-body p-4">
                                    <div class="d-flex align-items-center text-2 mb-2">
                                        <span class="text-color-grey me-3">
                                            <i class="fas fa-calendar-alt me-1"></i> {{ post.date }}
                                        </span>
                                    </div>
                                    <h4 class="font-weight-bold text-4 mb-3">
                                        <a href="#" class="text-color-dark text-decoration-none">{{ post.title }}</a>
                                    </h4>
                                    <p class="text-3 text-muted mb-3">{{ post.excerpt }}</p>
                                    <a href="#" class="text-color-primary font-weight-semibold text-decoration-none">
                                        Read More <i class="fas fa-arrow-right ms-1"></i>
                                    </a>
                                </div>
                            </article>
                        </div>
                    </div>

                    <!-- Pagination -->
                    <nav class="mt-4">
                        <ul class="pagination justify-content-center">
                            <li class="page-item disabled">
                                <a class="page-link" href="#"><i class="fas fa-chevron-left"></i></a>
                            </li>
                            <li class="page-item active"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item">
                                <a class="page-link" href="#"><i class="fas fa-chevron-right"></i></a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <!-- Sidebar -->
                <div class="col-lg-4">
                    <!-- Search -->
                    <div class="card border-0 shadow mb-4">
                        <div class="card-body p-4">
                            <h5 class="font-weight-bold mb-3">Search</h5>
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Search articles...">
                                <button class="btn btn-primary" type="button">
                                    <i class="fas fa-search"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Categories -->
                    <div class="card border-0 shadow mb-4">
                        <div class="card-body p-4">
                            <h5 class="font-weight-bold mb-3">Categories</h5>
                            <ul class="list-unstyled mb-0">
                                <li class="d-flex justify-content-between py-2 border-bottom" v-for="cat in categories"
                                    :key="cat.name">
                                    <a href="#" class="text-decoration-none text-dark">{{ cat.name }}</a>
                                    <span class="badge bg-color-primary rounded-pill">{{ cat.count }}</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- Popular Topics -->
                    <div class="card border-0 shadow mb-4">
                        <div class="card-body p-4">
                            <h5 class="font-weight-bold mb-3">Popular Topics</h5>
                            <div class="d-flex flex-wrap gap-2">
                                <span v-for="tag in popularTags" :key="tag" class="badge bg-light text-dark py-2 px-3">
                                    {{ tag }}
                                </span>
                            </div>
                        </div>
                    </div>

                    <!-- Newsletter -->
                    <div class="card border-0 shadow bg-primary text-white">
                        <div class="card-body p-4">
                            <h5 class="font-weight-bold mb-3 text-white">Subscribe to Our Newsletter</h5>
                            <p class="opacity-8 mb-3">Get the latest hospitality tech insights delivered to your inbox.</p>
                            <form @submit.prevent="subscribeNewsletter">
                                <div class="mb-3">
                                    <input type="email" v-model="newsletterEmail" class="form-control" placeholder="Your email address" required>
                                </div>
                                <button type="submit" class="btn btn-light font-weight-semibold w-100">
                                    Subscribe <i class="fas fa-paper-plane ms-2"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
useHead({
    title: 'Insights & Blog - PERSUIT Consultants | Hospitality Tech Trends'
})

const newsletterEmail = ref('')

const subscribeNewsletter = () => {
    alert(`Thank you for subscribing with ${newsletterEmail.value}!`)
    newsletterEmail.value = ''
}

const featuredPost = {
    id: 0,
    title: 'The Future of Hospitality Technology in East Africa: 2026 Outlook',
    excerpt: 'Explore the emerging trends shaping the hospitality technology landscape across Kenya, Tanzania, and the wider East African region.',
    image: '/img/demos/business-consulting-3/services/services-1.jpg',
    category: 'Industry Trends',
    date: 'Jan 15, 2026',
    author: 'James Mwangi'
}

const blogPosts = [
    {
        id: 1,
        title: 'How Hotels Can Maximize Revenue with Dynamic Pricing',
        excerpt: 'Learn the strategies that successful hotels use to optimize their pricing and increase RevPAR.',
        image: '/img/demos/business-consulting-3/services/services-2.jpg',
        category: 'Revenue Management',
        date: 'Jan 10, 2026',
        author: 'Grace Wanjiku'
    },
    {
        id: 2,
        title: '5 Essential Tech Tools Every Tour Operator Needs',
        excerpt: 'Discover the must-have technology solutions for modern tour operators in East Africa.',
        image: '/img/demos/business-consulting-3/services/services-3.jpg',
        category: 'Technology',
        date: 'Jan 5, 2026',
        author: 'David Ochieng'
    },
    {
        id: 3,
        title: 'Building a Strong Online Presence for Your Safari Lodge',
        excerpt: 'Digital marketing strategies specifically tailored for safari lodges and camps.',
        image: '/img/demos/business-consulting-3/services/services-4.jpg',
        category: 'Digital Marketing',
        date: 'Dec 28, 2025',
        author: 'Peter Njoroge'
    },
    {
        id: 4,
        title: 'Partnership Best Practices: Connecting Tech & Hospitality',
        excerpt: 'How technology companies can successfully partner with East African hospitality businesses.',
        image: '/img/demos/business-consulting-3/services/services-5.jpg',
        category: 'Partnerships',
        date: 'Dec 20, 2025',
        author: 'Sarah Kimani'
    },
    {
        id: 5,
        title: 'OTA Optimization: Getting More Bookings from Booking.com',
        excerpt: 'Practical tips to improve your visibility and conversion rates on major OTAs.',
        image: '/img/demos/business-consulting-3/services/services-6.jpg',
        category: 'Distribution',
        date: 'Dec 15, 2025',
        author: 'Grace Wanjiku'
    },
    {
        id: 6,
        title: 'Training Your Team for Technology Adoption Success',
        excerpt: 'Best practices for onboarding staff to new hospitality technology platforms.',
        image: '/img/demos/business-consulting-3/services/services-1.jpg',
        category: 'Training',
        date: 'Dec 10, 2025',
        author: 'Nancy Achieng'
    }
]

const categories = [
    { name: 'Revenue Management', count: 15 },
    { name: 'Technology', count: 12 },
    { name: 'Digital Marketing', count: 18 },
    { name: 'Partnerships', count: 8 },
    { name: 'Industry Trends', count: 10 },
    { name: 'Case Studies', count: 6 }
]

const popularTags = [
    'Hotels', 'Tour Operators', 'OTA', 'Dynamic Pricing', 'SEO', 
    'CRM', 'East Africa', 'Safari', 'Technology', 'Revenue'
]
</script>
