<template>
    <div>
        <!-- Page Header -->
        <section class="page-header page-header-modern bg-color-dark py-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 align-self-center p-static order-2 text-center">
                        <h1 class="text-10 font-weight-bold text-color-light">Blog</h1>
                        <span class="sub-title text-color-light">Latest insights and news</span>
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
                <li class="active">Blog</li>
            </ul>
        </div>

        <!-- Blog Content -->
        <div class="container py-5 my-4">
            <div class="row">
                <!-- Blog Posts -->
                <div class="col-lg-8">
                    <div class="row">
                        <div class="col-12 mb-4" v-for="post in blogPosts" :key="post.id">
                            <article class="card border-0 shadow">
                                <div class="card-img-top position-relative overflow-hidden">
                                    <img :src="post.image" class="img-fluid w-100" :alt="post.title"
                                        style="height: 300px; object-fit: cover;" />
                                    <span
                                        class="position-absolute top-0 start-0 bg-color-primary text-color-light px-3 py-2 m-3 font-weight-semibold text-2">
                                        {{ post.category }}
                                    </span>
                                </div>
                                <div class="card-body p-4">
                                    <div class="d-flex align-items-center text-3 mb-3">
                                        <span class="text-color-grey me-3">
                                            <i class="fas fa-calendar-alt me-1"></i> {{ post.date }}
                                        </span>
                                        <span class="text-color-grey me-3">
                                            <i class="fas fa-user me-1"></i> {{ post.author }}
                                        </span>
                                        <span class="text-color-grey">
                                            <i class="fas fa-comments me-1"></i> {{ post.comments }} Comments
                                        </span>
                                    </div>
                                    <h3 class="font-weight-semibold text-5 mb-3">
                                        <a href="#" class="text-color-dark text-decoration-none">{{ post.title }}</a>
                                    </h3>
                                    <p class="mb-3">{{ post.excerpt }}</p>
                                    <a href="#"
                                        class="btn btn-primary custom-btn-style-1 font-weight-semibold btn-px-3 btn-py-2 text-3">
                                        <span>Read More</span>
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
                            <h5 class="font-weight-semibold mb-3">Search</h5>
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Search...">
                                <button class="btn btn-primary" type="button">
                                    <i class="fas fa-search"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Categories -->
                    <div class="card border-0 shadow mb-4">
                        <div class="card-body p-4">
                            <h5 class="font-weight-semibold mb-3">Categories</h5>
                            <ul class="list-unstyled mb-0">
                                <li class="d-flex justify-content-between py-2 border-bottom" v-for="cat in categories"
                                    :key="cat.name">
                                    <a href="#" class="text-decoration-none">{{ cat.name }}</a>
                                    <span class="badge bg-color-primary">{{ cat.count }}</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- Recent Posts -->
                    <div class="card border-0 shadow">
                        <div class="card-body p-4">
                            <h5 class="font-weight-semibold mb-3">Recent Posts</h5>
                            <ul class="list-unstyled mb-0">
                                <li class="d-flex py-2 border-bottom" v-for="post in recentPosts" :key="post.title">
                                    <img :src="post.image" class="me-3" width="60" height="60"
                                        style="object-fit: cover;" :alt="post.title" />
                                    <div>
                                        <a href="#"
                                            class="text-decoration-none text-color-dark font-weight-medium text-3">{{
                                            post.title }}</a>
                                        <small class="d-block text-color-grey mt-1">{{ post.date }}</small>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
useHead({
    title: 'Blog - PURSUIT'
})

const blogPosts = [
    {
        id: 1,
        title: '10 Strategies for Accelerating Business Growth in 2024',
        excerpt: 'Discover the most effective strategies that successful companies are using to drive sustainable growth in today\'s competitive market.',
        image: '/img/demos/business-consulting-3/services/services-1.jpg',
        category: 'Strategy',
        date: 'Jan 15, 2024',
        author: 'John Doe',
        comments: 12
    },
    {
        id: 2,
        title: 'Digital Transformation: A Complete Guide for Businesses',
        excerpt: 'Learn how to successfully navigate the digital transformation journey and leverage technology for competitive advantage.',
        image: '/img/demos/business-consulting-3/services/services-2.jpg',
        category: 'Technology',
        date: 'Jan 10, 2024',
        author: 'Jessica Brown',
        comments: 8
    },
    {
        id: 3,
        title: 'Building High-Performance Teams: Best Practices',
        excerpt: 'Explore proven techniques for building and maintaining teams that consistently deliver exceptional results.',
        image: '/img/demos/business-consulting-3/services/services-3.jpg',
        category: 'Leadership',
        date: 'Jan 5, 2024',
        author: 'Robert Smith',
        comments: 15
    }
]

const categories = [
    { name: 'Strategy', count: 12 },
    { name: 'Technology', count: 8 },
    { name: 'Leadership', count: 6 },
    { name: 'Marketing', count: 10 },
    { name: 'Finance', count: 4 }
]

const recentPosts = [
    {
        title: 'Leadership Tips for 2024',
        image: '/img/demos/business-consulting-3/services/services-4.jpg',
        date: 'Jan 18, 2024'
    },
    {
        title: 'Marketing Trends to Watch',
        image: '/img/demos/business-consulting-3/services/services-5.jpg',
        date: 'Jan 12, 2024'
    },
    {
        title: 'Cost Optimization Strategies',
        image: '/img/demos/business-consulting-3/services/services-6.jpg',
        date: 'Jan 8, 2024'
    }
]
</script>
