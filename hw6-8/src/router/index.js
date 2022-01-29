// 1. ИМПОРТ ROUTER
// createRouter нужен для создания объекта router
// createWebHistory для генерации ссылок
import { createRouter, createWebHistory } from 'vue-router'
// *4.1 ОТДЕЛЬНО ИМПОРТИРУЕМ
import Home from '../views/Home.vue' // ../ - переход на уровень выше


// 2. СОЗДАНИЕ МАССИВА С МАРШРУТАМИ
const routes = [
  {
    // *4.2 ОТДЕЛЬНО ПОДКЛЮЧАЕМ => при сборке все компоненты с таким типом подключения попадут в 1 js файл (для часто использующихся компонентов)
    path: '/',
    component: Home
  },
  {
    path: '/products', /* <router-link to="/products"></router-link> */
    component: () => import( '../views/Products.vue') // *4.3 ЛЕНИВАЯ ЗАГРУЗКА => при сборке каждый компонент прописывается в отдельном js файле (для редко использующихся компонентов; подгружаются, когда есть необходимость)
  }
]


// 3. СОЗДАНИЕ ЭКЗЕМПЛЯРА ROUTER (ОБЪЕКТ МАРШРУТИЗАТОРА)
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// 4. ЭКСПОРТ ROUTER
export default router
