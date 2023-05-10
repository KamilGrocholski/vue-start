import { createRouter, createWebHistory } from 'vue-router'

import TodosView from '../aipl/todo-app/TodosView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'todos',
            component: TodosView
        }
    ]
})

export default router
