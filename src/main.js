import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import my_router from "./router.js"

createApp(App).use(my_router).mount('#app')
