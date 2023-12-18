import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router/auto'
import { createPinia } from 'pinia'
import App from './App.vue'
import './styles/main.css'
import ClickOutside from '~/composables/click-outside';
const app = createApp(App)
app.directive("click-outside", ClickOutside)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
})
const pinia = createPinia()

app.use(router);

app.use(pinia)

app.mount('#app')
