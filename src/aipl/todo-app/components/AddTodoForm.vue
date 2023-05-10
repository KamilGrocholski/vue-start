<script setup lang="ts">
import { ref } from 'vue'

import { type Todo, useTodosStore, TODO_STATUSES } from '../stores/todo-store/todoStore'
import Button from './Button.vue'

const todosStore = useTodosStore()

const content = ref<string>('')
const status = ref<Todo['status']>('in progress')

function handleSubmit() {
    const parsedContent = content.value.trim()

    const parsedStatus = status.value.trim() as Todo['status']

    todosStore.addTodo({
        content: parsedContent,
        status: parsedStatus
    })

    content.value = ''
}
</script>

<template>
    <form @submit.prevent="handleSubmit">
        <div class='inputs-wrapper'>
        <input v-model="content" type="text" />
        <select v-model="status">
            <option v-for="status in TODO_STATUSES" :key="status">
                {{ status }}
            </option>
        </select>
        </div>
        <Button class='w-full' type="submit" size='lg'>Add</Button>
    </form>
</template>

<style scoped>
.w-full {
    width: 100%;
}

.inputs-wrapper {
    display: flex;
    flex-direction: column;
}

select {
    padding-inline: 1rem;
    padding-block: 0.5rem;
    font-size: 1.1rem;
}

input {
    padding-inline: 1rem;
    padding-block: 0.5rem;
    font-size: 1.1rem;
}
</style>
