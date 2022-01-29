// 1. ИМПОРТ ROUTER
// createRouter нужен для создания объекта router
// createWebHistory для генерации ссылок
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'


// 2. СОЗДАНИЕ МАССИВА С МАРШРУТАМИ
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]


// 3. СОЗДАНИЕ ЭКЗЕМПЛЯРА ROUTER (ОБЪЕКТ МАРШРУТИЗАТОРА)
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// 4. ЭКСПОРТ ROUTER
export default router
