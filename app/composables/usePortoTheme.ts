// Composable to initialize Porto theme plugins after page navigation
export const usePortoTheme = () => {
  const initTheme = () => {
    if (typeof window !== 'undefined' && (window as any).theme) {
      const theme = (window as any).theme
      
      // Reinitialize all plugins
      if (theme.fn && theme.fn.intObs) {
        theme.fn.intObs()
      }
      
      // Initialize Owl Carousel
      if ((window as any).jQuery) {
        const $ = (window as any).jQuery
        
        // Initialize owl carousel
        $('.owl-carousel').each(function() {
          const $this = $(this)
          if (!$this.hasClass('owl-loaded')) {
            const options = $this.data('plugin-options') || {}
            $this.owlCarousel(options)
          }
        })
        
        // Initialize parallax
        $('[data-plugin-parallax]').each(function() {
          const $this = $(this)
          const imageSrc = $this.data('image-src')
          if (imageSrc) {
            $this.css('background-image', `url(${imageSrc})`)
            $this.css('background-size', 'cover')
            $this.css('background-position', 'center')
          }
        })
        
        // Initialize appear animations
        $('[data-appear-animation]').each(function() {
          const $this = $(this)
          const animation = $this.data('appear-animation')
          const delay = $this.data('appear-animation-delay') || 0
          
          setTimeout(() => {
            $this.addClass('appear-animation-visible')
            $this.addClass(animation)
          }, delay)
        })
      }
    }
  }
  
  return {
    initTheme
  }
}
