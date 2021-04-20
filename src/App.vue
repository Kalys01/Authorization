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
  methods: {
    setLocale: function(locale) {
      // this.$i18n.locale = locale
      import(`./langs/${locale}.json`).then((msgs) => {
        this.$i18n.setLocaleMessage(locale, msgs)
        this.$i18n.locale = locale
      })
    }
  },
  computed: {
    layout() {
      //console.log(this.$route.meta.layout)
      return (this.$route.meta.layout || 'empty') + '-layout'
    }
  },
  components: {
    EmptyLayout,
    MainLayout
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

