import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css' // Importar el archivo CSS de Bootstrap
import 'bootstrap/dist/js/bootstrap.js' // Importar el archivo JavaScript de Bootstrap

import router from './router'

createApp(App).use(router).mount('#app')
