// Porto Theme Initialization Plugin
export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.client) {
    // Wait for the page to be mounted before initializing
    nuxtApp.hook('page:finish', () => {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        initPortoPlugins()
      }, 100)
    })
    
    // Also run on initial load
    nuxtApp.hook('app:mounted', () => {
      setTimeout(() => {
        initPortoPlugins()
      }, 500)
    })
  }
})

function initPortoPlugins() {
  if (typeof window === 'undefined') return
  
  const $ = (window as any).jQuery
  if (!$) return
  
  // Initialize Owl Carousel
  $('.owl-carousel').each(function(this: any) {
    const $this = $(this)
    if (!$this.hasClass('owl-loaded') && $this.data('plugin-options')) {
      try {
        let options = $this.data('plugin-options')
        if (typeof options === 'string') {
          // Parse the options string (Porto uses single quotes in data attributes)
          options = JSON.parse(options.replace(/'/g, '"'))
        }
        $this.owlCarousel(options)
      } catch (e) {
        // Fallback default options
        $this.owlCarousel({
          items: 2,
          margin: 20,
          loop: true,
          nav: false,
          autoplay: true,
          autoplayTimeout: 5000,
          dots: true,
          responsive: {
            0: { items: 1 },
            768: { items: 2 },
            992: { items: 2 }
          }
        })
      }
    }
  })
  
  // Initialize Parallax backgrounds
  $('[data-plugin-parallax]').each(function(this: any) {
    const $this = $(this)
    const imageSrc = $this.data('image-src')
    if (imageSrc && !$this.data('parallax-initialized')) {
      $this.css({
        'background-image': `url(${imageSrc})`,
        'background-size': 'cover',
        'background-position': 'center center',
        'background-attachment': 'fixed'
      })
      $this.data('parallax-initialized', true)
    }
  })
  
  // Initialize Appear Animations
  $('[data-appear-animation]').each(function(this: any) {
    const $this = $(this)
    if (!$this.hasClass('appear-animation-visible')) {
      const animation = $this.data('appear-animation')
      const delay = $this.data('appear-animation-delay') || 0
      
      setTimeout(() => {
        $this.addClass('appear-animation-visible animate__animated animate__' + animation)
        $this.css('opacity', '1')
      }, delay)
    }
  })
  
  // Initialize hash scroll
  $('[data-hash]').on('click', function(this: any, e: Event) {
    e.preventDefault()
    const target = $(this).attr('href')
    if (target && target.startsWith('#')) {
      const $target = $(target)
      if ($target.length) {
        $('html, body').animate({
          scrollTop: $target.offset().top - 100
        }, 800)
      }
    }
  })
}
