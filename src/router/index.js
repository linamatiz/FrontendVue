import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '../views/LoginView.vue'
import WelcomeView from '../views/WelcomeView.vue'
import RegistroView from '../views/RegistroView.vue'
import QueSomosView from '../views/QueSomosView.vue'
import PerfilView from '../views/PerfilView.vue'
import HomeView from '../views/HomeView.vue'
import pagosView from '../views/PagosView.vue'

const routes = [
  {
    path: '/welcome',
    name: 'welcome',
    component: WelcomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/registro',
    name: 'registro',
    component: RegistroView
  },
  {
    path: '/queSomos',
    name: 'queSomos',
    component: QueSomosView
  },
  {
    path: '/perfil',
    name: 'perfil',
    component: PerfilView
  },
  {
    path: '/home',
    component: HomeView
  },
  {
    path: '/pagos',
    name: 'pagos',
    component: pagosView
  },
  {
    path: '/:pathMatch(.*)*',
    component: WelcomeView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
