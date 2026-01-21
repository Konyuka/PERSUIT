// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    '@fortawesome/fontawesome-free/css/all.min.css',
    'animate.css',
    '~/assets/css/theme.css',
    '~/assets/css/theme-elements.css',
    '~/assets/css/theme-blog.css',
    '~/assets/css/theme-shop.css',
    '~/assets/css/demos/demo-business-consulting-3.css',
    '~/assets/css/skins/skin-business-consulting-3.css',
    '~/assets/css/custom.css'
  ],

  app: {
    head: {
      title: 'PERSUIT CONSULTANTS',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'PERSUIT CONSULTANTS - Professional Business Consulting Services' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800&display=swap' }
      ],
      script: [
        { src: '/vendor/bootstrap/js/bootstrap.bundle.min.js', defer: true }
      ]
    }
  }
})
