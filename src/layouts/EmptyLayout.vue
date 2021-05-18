<template>
  <div class="register">
    <div class="back">
      <router-link to="/"><i class="fas fa-long-arrow-alt-right"></i></router-link>
    </div>
    <div class="register-block">  
      <router-view />
    </div>
  </div>
</template>

<style scoped>
.register-block {
  background: #fff;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.back {
  position: absolute;
  right: 0;
  margin: 6px;
}
.fas {
  font-size: 38px;
  color: #000;
}
</style>
