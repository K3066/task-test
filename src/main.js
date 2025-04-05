import './assets/main.sass'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import SvgHolder from "@/components/icons/SvgHolder.vue";

const app = createApp(App)

app.component('SvgHolder', SvgHolder)


app.use(createPinia())
app.use(router)

app.mount('#app')
