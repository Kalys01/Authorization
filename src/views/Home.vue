<template>
  <div class="home">
    <!-- <div class="nav">
      <div class="lang">
        <a href="#" @click="setLocale('ru')">рус</a> |
        <a href="#" @click="setLocale('en')">eng</a>
        <button class="btn sign-up" @click="$router.push({name: 'login'})">Войти</button>
      </div>
    </div>-->
    <div class="content left">
      <h1><router-link class="white-underline-left-to-right link galleries_link" to="/galleries">galleries</router-link></h1>
    </div>
    <div class="content right">
      <h1><router-link class="black-underline-right-to-left link projects_link" to="/projects">projects</router-link></h1>
    </div>
    <div class="blockel">
      <li><router-link class="black-underline-right-to-left block about" to="/about">about</router-link></li>
      <li><router-link class="black-underline-right-to-left block contact" to="/contact"><span class="address" data-replace="address">contact</span></router-link></li>
      <li><router-link class="black-underline-right-to-left block login" to="/login">Login</router-link></li>
    </div>
    <div class="data-time">
      <span class="time">{{ date | date('time') }}</span><br/>
      <span class="data">{{ date | date('date') }}</span>
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
.home {
  width: 105%;
  display: flex;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-weight: bold;
}
h1 a.link {
  font-size: 60px;
}

.left,
.right {
  height: 100vh;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 1s;
  transform: skewX(-6grad);
}
.left {
  background: #000;
  border-right: 2px solid #fff;
  margin-left: -3%;
}
.right {
  background: #fff;
  border-left: 2px solid #000;
}

.home:hover .right{
  width: 65%;
}
  
.home:hover .left {
  width: 35%;
}
.left:hover {
  width: 65%!important;
}
  
.left:hover+.right {
  width: 35%;
}

.data-time {
  position: absolute;
  color: #fff;
  margin: 6px;
  font-size: 20px;
}
a {
  text-transform: uppercase;
  color: rgb(0, 0, 0);
  position: relative;
  line-height: 25px;
}

.galleries_link {
  color: #fff;
}
.projects_link {
  color: #000;
}


/* ссылки */
.blockel {
  position: absolute;
  text-align: right;
  top: 0;
  right: 0;
  margin: 6px;
  z-index: 4;
  font-weight: bold;
}
.about {
  margin-bottom: 20px;
}

.address{
  position: relative;  
  transition:1s;
  user-select: none;
}
.address:hover{
  color:transparent;
}
.address:before{
  position: absolute;
  left:0;
  width:100%;
  height:100%;
  content:attr(data-replace);
  color:transparent;
  transition:1s;
}
.address:hover:before{
  color:#000;
}


@media screen and (max-width: 750px) {
  .home {
    width: 100%;
    height: 100vh;
    position: relative;
  }
  .left,
  .right {
    width: 100%;
    border: none;
    height: 50vh;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 1s;
    transform: skewX(0grad);
  }
  .right {
    bottom: 0;
  }
  .left {
    margin-left: 0;
  }
}
</style>
