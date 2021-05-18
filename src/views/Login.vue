<template>
  <div class="login">
    <form class="login-box" @submit.prevent="submitHandler">
      <h1 class="login">Login</h1>
      <div
        :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
        class="textbox"
      >
        <input
          v-model.trim="email"
          type="email"
          placeholder="Email"
        >
      </div>
      <small
        v-if="($v.email.$dirty && !$v.email.required)"
        class="small-error-text"
      >
        Введите Email
      </small>
      <small
        v-else-if="($v.email.$dirty && !$v.email.email)"
        class="small-error-text"
      >
        Введите корректный Email
      </small>
      <div
        :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}" 
        class="textbox"
      >
        <input
          v-model.trim="password"
          type="password"
          placeholder="Password"
        >
      </div>
      <small
        v-if="$v.password.$dirty && !$v.password.required"
        class="small-error-text"
      >
        Введите пароль
      </small>
      <small
        v-else-if="$v.password.$dirty && !$v.password.minLength"
        class="small-error-text"
      >
        Dлина пароля должно быть минимум {{ $v.password.$params.minLength.min }} символов.<br/>
        Сейчас длина {{ password.length }}
      </small>
      <button
        class="btn"
        type="submit"
      >
        Sign in
      </button> 
      <p>No account? <router-link to="/register">Register</router-link></p>
    </form>
  </div>
</template>

<script>
import {email, required, minLength} from 'vuelidate/lib/validators'

export default {
  name: 'login',
  data: () => ({
    email: '',
    password: '',
  }),
  validations: {
    email: {email, required},
    password: {required, minLength: minLength(7)}
  },
  methods: {
    submitHandler() {
      if(this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      const formData = {
        email: this.email,
        password: this.password
      }
      console.log(formData)
      this.$router.push('/')
    },
  },
}
</script>

<style scoped>
.login {
  padding: 5px;
  min-width: 150px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* background: url(../assets/auth.jpg) no-repeat; */
}
form .login-box {
  min-width: 300px;
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
.invalid {
  border-bottom: #c70e0e 1px solid;
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
