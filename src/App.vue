<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import EmptyLayout from '@/layouts/EmptyLayout'
import MainLayout from '@/layouts/MainLayout'

export default {
  components: {
    EmptyLayout,
    MainLayout
  },
  computed: {
    layout() {
      //console.log(this.$route.meta.layout)
      return (this.$route.meta.layout || 'empty') + '-layout'
    }
  },
  methods: {
    setLocale: function(locale) {
      // this.$i18n.locale = locale
      import(`./langs/${locale}.json`).then((msgs) => {
        this.$i18n.setLocaleMessage(locale, msgs)
        this.$i18n.locale = locale
      })
    }
  },
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  // font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // color: #2c3e50;
  #app {
    overflow: hidden;
  }
}
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: #000;
}


//----------UNDERLINES------------

// WHITE UNDERLINE RIGHT TO LEFT
.white-underline-right-to-left:hover::before {
  -ms-transform: scaleX(1); /*для IE9 и старше (младше девятой версии трансформация не поддерживается */
	-webkit-transform: scaleX(1);/*для Chrome, Safari, Android и iOS*/
	-o-transform: scaleX(1);/*для Opera до версии 12.10*/
	-moz-transform: scaleX(1);/*для Firefox до версии 16.0*/
  transform: scaleX(1);/*не всеми браузерами поддерживается по этому прописан выше трансформы*/
  transition: transform 0.25s;
  transform-origin: right;
}
.white-underline-right-to-left::before {
  content: '';
  width: 100%;
  height: 2px;
  background-color: #fff;
  position: absolute;
  left: 0;
  transform-origin: left;
  bottom: -3px;
  -ms-transform: scaleX(0); /*для IE9 и старше (младше девятой версии трансформация не поддерживается */
	-webkit-transform: scaleX(0);/*для Chrome, Safari, Android и iOS*/
	-o-transform: scaleX(0);/*для Opera до версии 12.10*/
	-moz-transform: scaleX(0);/*для Firefox до версии 16.0*/
  transform: scaleX(0);/*не всеми браузерами поддерживается по этому прописан выше трансформы*/
  transition: transform 0.25s;
}

// BLACK UNDERLINE RIGHT TO LEFT
.black-underline-right-to-left:hover::before {
  -ms-transform: scaleX(1); /*для IE9 и старше (младше девятой версии трансформация не поддерживается */
	-webkit-transform: scaleX(1);/*для Chrome, Safari, Android и iOS*/
	-o-transform: scaleX(1);/*для Opera до версии 12.10*/
	-moz-transform: scaleX(1);/*для Firefox до версии 16.0*/
  transform: scaleX(1);/*не всеми браузерами поддерживается по этому прописан выше трансформы*/
  transition: transform 0.25s;
  transform-origin: right;
}
.black-underline-right-to-left::before {
  content: '';
  width: 100%;
  height: 2px;
  background-color: #000;
  position: absolute;
  left: 0;
  transform-origin: left;
  bottom: -3px;
  -ms-transform: scaleX(0); /*для IE9 и старше (младше девятой версии трансформация не поддерживается */
	-webkit-transform: scaleX(0);/*для Chrome, Safari, Android и iOS*/
	-o-transform: scaleX(0);/*для Opera до версии 12.10*/
	-moz-transform: scaleX(0);/*для Firefox до версии 16.0*/
  transform: scaleX(0);/*не всеми браузерами поддерживается по этому прописан выше трансформы*/
  transition: transform 0.25s;
}


// WHITE UNDERLINE LEFT TO RIGHT
.white-underline-left-to-right:hover::before {
  -ms-transform: scaleX(1); /*для IE9 и старше (младше девятой версии трансформация не поддерживается */
	-webkit-transform: scaleX(1);/*для Chrome, Safari, Android и iOS*/
	-o-transform: scaleX(1);/*для Opera до версии 12.10*/
	-moz-transform: scaleX(1);/*для Firefox до версии 16.0*/
  transform: scaleX(1);/*не всеми браузерами поддерживается по этому прописан выше трансформы*/
  transition: transform 0.25s;
  transform-origin: left;
}
.white-underline-left-to-right::before {
  content: '';
  width: 100%;
  height: 2px;
  background-color: #fff;
  position: absolute;
  left: 0;
  transform-origin: right;
  bottom: -3px;
  -ms-transform: scaleX(0); /*для IE9 и старше (младше девятой версии трансформация не поддерживается */
	-webkit-transform: scaleX(0);/*для Chrome, Safari, Android и iOS*/
	-o-transform: scaleX(0);/*для Opera до версии 12.10*/
	-moz-transform: scaleX(0);/*для Firefox до версии 16.0*/
  transform: scaleX(0);/*не всеми браузерами поддерживается по этому прописан выше трансформы*/
  transition: transform 0.25s;
}

// BLACK UNDERLINE LEFT TO RIGHT
.black-underline-left-to-right:hover::before {
  -ms-transform: scaleX(1); /*для IE9 и старше (младше девятой версии трансформация не поддерживается */
	-webkit-transform: scaleX(1);/*для Chrome, Safari, Android и iOS*/
	-o-transform: scaleX(1);/*для Opera до версии 12.10*/
	-moz-transform: scaleX(1);/*для Firefox до версии 16.0*/
  transform: scaleX(1);/*не всеми браузерами поддерживается по этому прописан выше трансформы*/
  transition: transform 0.25s;
  transform-origin: left;
}
.black-underline-left-to-right::before {
  content: '';
  width: 100%;
  height: 2px;
  background-color: #000;
  position: absolute;
  left: 0;
  transform-origin: right;
  bottom: -3px;
  -ms-transform: scaleX(0); /*для IE9 и старше (младше девятой версии трансформация не поддерживается */
	-webkit-transform: scaleX(0);/*для Chrome, Safari, Android и iOS*/
	-o-transform: scaleX(0);/*для Opera до версии 12.10*/
	-moz-transform: scaleX(0);/*для Firefox до версии 16.0*/
  transform: scaleX(0);/*не всеми браузерами поддерживается по этому прописан выше трансформы*/
  transition: transform 0.25s;
}
</style>

