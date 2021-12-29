import { createApp } from 'vue'
import App from './App.vue'
import Router from './route'

import './styles/main.scss'

createApp(App).use(Router).mount('#app')
