import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from '../langs/en.json'

Vue.use(VueI18n)

// export const i18n = new VueI18n({
//     locale: 'ru',
//     fallbackLocale: 'en',
//     message: {
//         en
//     }
// })
// new Vue({ i18n }).$mount('#app')

export default new VueI18n({
    locale: 'ru',
    fallbackLocale: 'en',
    message: {
        en
    }
})
