import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './app/layout/App.vue'
import router from './app/router'
import ui from '@nuxt/ui/vue-plugin'
import { i18n } from '@/app/i18n'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ui)
app.use(i18n)

app.mount('#app')
