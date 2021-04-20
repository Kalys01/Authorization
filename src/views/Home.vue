<template>
  <div class="home">
    <!-- <h1>{{$t('message')}}</h1> -->
    <h1>This is a home page</h1>
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
      
      <div class="lang">
        <a href="#" @click="setLocale('ru')">рус</a> |
        <a href="#" @click="setLocale('en')">eng</a>
        <button class="btn sign-up" >Войти</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    setLocale: function(locale) {
      // this.$i18n.locale = locale
      import(`../langs/${locale}.json`).then((msgs) => {
        this.$i18n.setLocaleMessage(locale, msgs)
        this.$i18n.locale = locale
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.btn {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  padding: 7px 10px;
  cursor: pointer;
  color: #2c3e50;
}

.lang {
  position: absolute;
  right: 30px;
  top: 30px;
}
.sign-up {
  margin: 0 0 0 5px;
}
</style>
