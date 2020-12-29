import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style/global.css'
import './style/media-500.css'
import './style/media-1280.css'

createApp(App).use(router).mount('#app')
