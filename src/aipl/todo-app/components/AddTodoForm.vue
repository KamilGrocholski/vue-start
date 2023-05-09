<script setup lang="ts">
import { ref } from 'vue'

import { type Todo, useTodosStore, TODO_STATUSES } from '../stores/todo-store/todoStore'

const todosStore = useTodosStore()
const content = ref<string>('')
const status = ref<Todo['status']>('in progress')

function handleSubmit() {
    const parsedContent = content.value.trim()
    if (parsedContent.length <= 5) {
        return
    }

    const parsedStatus = status.value.trim() as Todo['status']

    if (!TODO_STATUSES.includes(parsedStatus)) {
        return
    }

    todosStore.addTodo({
        content: parsedContent,
        status: parsedStatus
    })
}
</script>

<template>
    <form @submit.prevent="handleSubmit">
        <input v-model="content" />
        <select v-model="status">
            <option v-for="status in TODO_STATUSES" :key="status">
                {{ status }}
            </option>
        </select>
    </form>
</template>
