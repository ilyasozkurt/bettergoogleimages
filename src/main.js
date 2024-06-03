import {createApp} from 'vue'
import './assets/scss/style.scss'
import i18n from './i18n'
import appRouter from "@/router.js";

//Import App.vue file
import App from './App.vue'

createApp(App)
    .use(appRouter)
    .use(i18n)
    .mount('#app')
