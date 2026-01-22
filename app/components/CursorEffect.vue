<template>
  <div class="cursor-effect-wrapper">
    <!-- Main cursor dot -->
    <div 
      ref="cursorDot" 
      class="cursor-dot"
      :class="{ 'cursor-hover': isHovering, 'cursor-clicking': isClicking }"
    ></div>
    <!-- Trailing circle -->
    <div 
      ref="cursorCircle" 
      class="cursor-circle"
      :class="{ 'cursor-hover': isHovering, 'cursor-clicking': isClicking }"
    ></div>
  </div>
</template>

<script setup>
const cursorDot = ref(null)
const cursorCircle = ref(null)
const isHovering = ref(false)
const isClicking = ref(false)

// Mouse position
const mouseX = ref(0)
const mouseY = ref(0)

// Circle position (with lag)
const circleX = ref(0)
const circleY = ref(0)

let animationFrame = null

onMounted(() => {
  // Check if it's a touch device
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
    return // Don't show custom cursor on touch devices
  }

  document.addEventListener('mousemove', onMouseMove)
  document.addEventListener('mousedown', onMouseDown)
  document.addEventListener('mouseup', onMouseUp)
  document.addEventListener('mouseleave', onMouseLeave)
  document.addEventListener('mouseenter', onMouseEnter)

  // Add hover detection for interactive elements
  addHoverListeners()

  // Start animation loop
  animate()
})

onUnmounted(() => {
  document.removeEventListener('mousemove', onMouseMove)
  document.removeEventListener('mousedown', onMouseDown)
  document.removeEventListener('mouseup', onMouseUp)
  document.removeEventListener('mouseleave', onMouseLeave)
  document.removeEventListener('mouseenter', onMouseEnter)
  
  if (animationFrame) {
    cancelAnimationFrame(animationFrame)
  }
})

const onMouseMove = (e) => {
  mouseX.value = e.clientX
  mouseY.value = e.clientY

  // Update dot position immediately
  if (cursorDot.value) {
    cursorDot.value.style.left = `${e.clientX}px`
    cursorDot.value.style.top = `${e.clientY}px`
  }
}

const onMouseDown = () => {
  isClicking.value = true
}

const onMouseUp = () => {
  isClicking.value = false
}

const onMouseLeave = () => {
  if (cursorDot.value) cursorDot.value.style.opacity = '0'
  if (cursorCircle.value) cursorCircle.value.style.opacity = '0'
}

const onMouseEnter = () => {
  if (cursorDot.value) cursorDot.value.style.opacity = '1'
  if (cursorCircle.value) cursorCircle.value.style.opacity = '1'
}

const animate = () => {
  // Smooth trailing effect - circle follows with delay
  const speed = 0.15 // Lower = more lag
  
  circleX.value += (mouseX.value - circleX.value) * speed
  circleY.value += (mouseY.value - circleY.value) * speed

  if (cursorCircle.value) {
    cursorCircle.value.style.left = `${circleX.value}px`
    cursorCircle.value.style.top = `${circleY.value}px`
  }

  animationFrame = requestAnimationFrame(animate)
}

const addHoverListeners = () => {
  // Wait for DOM to be ready
  setTimeout(() => {
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, [role="button"], .btn, .nav-link, .dropdown-item')
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        isHovering.value = true
      })
      el.addEventListener('mouseleave', () => {
        isHovering.value = false
      })
    })
  }, 500)
}

// Re-add listeners on route change
const route = useRoute()
watch(() => route.path, () => {
  setTimeout(addHoverListeners, 500)
})
</script>

<style scoped>
.cursor-dot {
  position: fixed;
  top: 0;
  left: 0;
  width: 8px;
  height: 8px;
  background-color: var(--primary, #F04C23);
  border-radius: 50%;
  pointer-events: none;
  z-index: 99999;
  transform: translate(-50%, -50%);
  transition: width 0.2s ease, height 0.2s ease, background-color 0.2s ease, opacity 0.3s ease;
}

.cursor-circle {
  position: fixed;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  border: 2px solid var(--primary, #F04C23);
  border-radius: 50%;
  pointer-events: none;
  z-index: 99998;
  transform: translate(-50%, -50%);
  transition: width 0.3s ease, height 0.3s ease, border-color 0.2s ease, opacity 0.3s ease;
  opacity: 0.6;
}

/* Hover state */
.cursor-dot.cursor-hover {
  width: 12px;
  height: 12px;
  background-color: var(--primary, #F04C23);
}

.cursor-circle.cursor-hover {
  width: 60px;
  height: 60px;
  border-color: var(--primary, #F04C23);
  opacity: 0.4;
}

/* Click state */
.cursor-dot.cursor-clicking {
  width: 6px;
  height: 6px;
}

.cursor-circle.cursor-clicking {
  width: 30px;
  height: 30px;
  opacity: 0.8;
}

/* Hide on mobile/touch devices */
@media (max-width: 991px), (hover: none) {
  .cursor-dot,
  .cursor-circle {
    display: none !important;
  }
}
</style>
