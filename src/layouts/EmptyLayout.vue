<template>
  <div class="register">
    <div class="back">
      <h4 class="black-underline-right-to-left fas"><router-link to="/">CLOSE</router-link></h4>
    </div>
    <div class="corner"></div>
    <div class="corner2"></div>
    <div class="register-block">  
      <router-view />
    </div>
  </div>
</template>

<style scoped>
.register {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

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
  font-weight: 900;
  text-transform: uppercase;
  color: #000;
  
}

.corner {
  position: absolute;
	width: 0;
	height: 0;
	border-top: 500px solid #000; 
	border-right: 500px solid transparent;
}
.corner2 {
  position: absolute;
  bottom: 0;
  right: 0;
	width: 0;
	height: 0;
	border-bottom: 500px solid #000; 
	border-left: 500px solid transparent;
}

@media (max-width: 992px) {
  .corner {
    border-top: 400px solid #000; 
	  border-right: 400px solid transparent;
  }

  .corner2 {
    border-bottom: 400px solid #000; 
	  border-left: 400px solid transparent;
  }
}
@media screen and (max-width: 768px) {
  .corner {
    border-top: 300px solid #000; 
	  border-right: 300px solid transparent;
  }

  .corner2 {
    border-bottom: 300px solid #000; 
	  border-left: 300px solid transparent;
  }
}
@media screen and (max-width: 480px) {
  .corner {
    border-top: 100px solid #000; 
	  border-right: 100px solid transparent;
  }

  .corner2 {
    border-bottom: 100px solid #000; 
	  border-left: 100px solid transparent;
  }
}
</style>
