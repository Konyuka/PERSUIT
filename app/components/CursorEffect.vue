<script setup>
// Only run on client side
if (import.meta.client) {
  const cursor = document.createElement('div')
  const circle = document.createElement('div')
  
  cursor.id = 'custom-cursor-dot'
  circle.id = 'custom-cursor-circle'
  
  // Styles for dot
  Object.assign(cursor.style, {
    position: 'fixed',
    width: '8px',
    height: '8px',
    backgroundColor: '#F04C23',
    borderRadius: '50%',
    pointerEvents: 'none',
    zIndex: '2147483647',
    transform: 'translate(-50%, -50%)',
    transition: 'width 0.15s, height 0.15s',
    left: '-100px',
    top: '-100px'
  })
  
  // Styles for circle
  Object.assign(circle.style, {
    position: 'fixed',
    width: '20px',
    height: '20px',
    border: '2px solid #F04C23',
    borderRadius: '50%',
    pointerEvents: 'none',
    zIndex: '2147483646',
    transform: 'translate(-50%, -50%)',
    transition: 'width 0.2s, height 0.2s, opacity 0.2s',
    opacity: '0.6',
    left: '-100px',
    top: '-100px'
  })
  
  // Append to body
  document.body.appendChild(cursor)
  document.body.appendChild(circle)
  
  // Circle position with lag
  let circleX = -100
  let circleY = -100
  let mouseX = -100
  let mouseY = -100
  
  // Animation loop for trailing effect
  function animate() {
    circleX += (mouseX - circleX) * 0.15
    circleY += (mouseY - circleY) * 0.15
    
    circle.style.left = circleX + 'px'
    circle.style.top = circleY + 'px'
    
    requestAnimationFrame(animate)
  }
  animate()
  
  // Mouse move
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX
    mouseY = e.clientY
    cursor.style.left = e.clientX + 'px'
    cursor.style.top = e.clientY + 'px'
  })
  
  // Mouse down/up for click effect
  document.addEventListener('mousedown', () => {
    cursor.style.width = '6px'
    cursor.style.height = '6px'
    circle.style.width = '15px'
    circle.style.height = '15px'
  })
  
  document.addEventListener('mouseup', () => {
    cursor.style.width = '8px'
    cursor.style.height = '8px'
    circle.style.width = '20px'
    circle.style.height = '20px'
  })
  
  // Hover effect on interactive elements
  const addHoverEffect = () => {
    document.querySelectorAll('a, button, .btn, input, [role="button"]').forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.style.width = '12px'
        cursor.style.height = '12px'
        circle.style.width = '30px'
        circle.style.height = '30px'
        circle.style.opacity = '0.4'
      })
      el.addEventListener('mouseleave', () => {
        cursor.style.width = '8px'
        cursor.style.height = '8px'
        circle.style.width = '20px'
        circle.style.height = '20px'
        circle.style.opacity = '0.6'
      })
    })
  }
  
  setTimeout(addHoverEffect, 500)
  
  // Hide default cursor
  const style = document.createElement('style')
  style.textContent = `
    @media (hover: hover) and (pointer: fine) {
      * { cursor: none !important; }
    }
  `
  document.head.appendChild(style)
}
</script>

<template>
  <div></div>
</template>
