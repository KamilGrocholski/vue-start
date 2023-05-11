import { createRouter, createWebHistory } from 'vue-router'

import CartView from '../aipl/commander-app/CartView.vue'
import TodosView from '../aipl/todo-app/TodosView.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/todos',
            name: 'todos',
            component: TodosView
        },
        {
            path: '/cart',
            name: 'cart',
            component: CartView
        }
    ]
})

export default router
