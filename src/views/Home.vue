<template>
  <div class="home">
    <div class="nav">
      <div class="data-time">
        <span class="data">{{ date | date('date') }}</span> | <span class="time">{{ date | date('time') }}</span>
      </div>
      <div class="lang">
        <a href="#" @click="setLocale('ru')">рус</a> |
        <a href="#" @click="setLocale('en')">eng</a>
        <button class="btn sign-up" @click="$router.push({name: 'login'})">Войти</button>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data: () => ({
    date: new Date(),
    interval: null,
  }),
  methods: {
    setLocale: function(locale) {
      // this.$i18n.locale = locale
      import(`../langs/${locale}.json`).then((msgs) => {
        this.$i18n.setLocaleMessage(locale, msgs)
        this.$i18n.locale = locale
      })
    }
  },
  mounted() {
    this.interval = setInterval(() => {
      this.date = new Date()
    }, 1000)
  },
  beforeDestroy() {
    clearInterval(this.interval)
  }
}
</script>

<style lang="scss" scoped>
.nav {
  width: 100%;
  height: 60px;
  background: grey;
  position: relative;
  display: flex;
  align-items: center;
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
}
.sign-up {
  margin: 0 0 0 5px;
}
</style>
