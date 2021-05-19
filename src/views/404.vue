<template>
  <div class="not_found">
    <h1>404</h1>
    <p>Page not found. <router-link to="/"  class="main-page">main page</router-link></p>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.not_found {
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  text-transform: uppercase;
}

h1 {
  font-size: 200px;
}
p {
  font-size: 30px;
}
a {
  color: #000;
}
.main-page {
  border-bottom: 2px solid #000;
}
</style>
