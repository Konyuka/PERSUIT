<template>
  <div class="body">
    <Header />
    <div role="main" class="main">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<style>
/* Global reset - must override everything */
:root {
  margin: 0;
  padding: 0;
}

html {
  margin: 0 !important;
  padding: 0 !important;
  scroll-behavior: smooth;
}

body {
  margin: 0 !important;
  padding: 0 !important;
  margin-top: 0 !important;
  padding-top: 0 !important;
}

#__nuxt {
  margin: 0 !important;
  padding: 0 !important;
  margin-top: 0 !important;
  padding-top: 0 !important;
}

.body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0 !important;
  padding: 0 !important;
  border: none !important;
  border-top: none !important;
}
 
.body > .main {
  flex: 1;
  margin: 0;
  padding: 0;
}

.body > #footer {
  margin-top: auto;
}

/* Force header to stick to top - no gap */
#header {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0 !important;
  padding: 0 !important;
}

#header .header-body {
  margin: 0 !important;
  border-top: none !important;
}
</style>
