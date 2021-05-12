<template>
  <div class="login">
    <form class="login-box" @submit.prevent="submitHandler">
      <h1 class="login">Register</h1>
      <div class="textbox">
        <input class="" type="text" placeholder="Name">
      </div>
      <small class="small-error-text">пожалуйста введите Name</small>
      <div class="textbox">
        <input class="" type="email" placeholder="email">
      </div>
      <small class="small-error-text">пожалуйста введите email</small>
      <div class="textbox">
        <input class="" type="password" placeholder="Password">
      </div>
      <small class="small-error-text">пожалуйста введите Password</small>
      <button class="btn">Register</button>
      <p>Уже есть аккаунт? <router-link to="/login">Войти</router-link></p>    
    </form>
  </div>
</template>

<script>
import {email, required, minLength} from 'vuelidate/lib/validators'

export default {
  name: 'register',
  data: () => ({
    email: '',
    password: '',
    name: '',
  }),
  validations: {
    email: {email, required},
    password: {required, minLength: minLength(7)}
  },
  methods: {
    submitHandler() {

    },
  },
}
</script>

<style scoped>
.login {
  padding: 5px;
  /* background: url(../assets/auth.jpg) no-repeat; */
}
form .login-box {
  max-width: 600px;
  height: 300px;
  background: rgb(255, 255, 255);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 0 5px;
}
h1 {
  font-size: 40px;
  border-bottom: 4px solid;
  margin-bottom: 40px;
  padding-bottom: 4px;
  float: left;
}
.textbox {
  width: 100%;
  overflow: hidden;
  font-size: 18px;
  margin: 15px 0 0 0;
  border-bottom: 1px solid;
}
.textbox input {
  outline: none;
  border: none;
  background: none;
  width: 100%;
  height: 35px;
}
.textbox input::placeholder {
  color: #2c3e50;
  opacity: .8;
}
.small-error-text {
  font-size: 12px;
  color: #c70e0e;
}

.btn {
  width: 100%;
  background: none;
  border: 2px solid;
  padding: 5px;
  font-size: 18px;
  cursor: pointer;
  margin: 26px 0;
}
</style>
