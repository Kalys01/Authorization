<template>
  <div class="not_found">
    <div class="text">
      <h1>404</h1>
      <p>Page not found. <span class="white-underline-right-to-left"><router-link to="/" >main page</router-link></span></p>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.not_found {
  width: 100%;
  height: 100%;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  background: #000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-transform: uppercase;
}
.text {
  position: absolute;
}
h1 {
  font-size: 200px;
}
p {
  font-size: 30px;
}
a {
  color: #fff;
}
</style>
