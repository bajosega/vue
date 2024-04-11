import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './component/slot/Layout.vue'
import AboutView from './AbouwewetView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})