import {createApp} from 'vue'
import 'bootstrap'
import './assets/scss/style.scss'
import i18n from './i18n'

//Import App.vue file
import App from './App.vue'

createApp(App)
    .use(i18n)
    .mount('#app')
