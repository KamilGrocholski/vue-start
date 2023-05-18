import { createRouter, createWebHistory } from 'vue-router'

import StoreView from '../aipl/commander-app/StoreView.vue'
import ComponentsView from '../aipl/components-app/ComponentsView.vue'
import TodosView from '../aipl/todo-app/TodosView.vue'
import HomeView from '../HomeView.vue'
import JokesView from '@/aipl/jokes-app/JokesView.vue'

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
            path: '/store',
            name: 'store',
            component: StoreView
        },
        {
            path: '/components',
            name: 'components',
            component: ComponentsView
        },
        {
            path: '/jokes',
            name: 'jokesk',
            component: JokesView
        }
    ]
})

export default router
