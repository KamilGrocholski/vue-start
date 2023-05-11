<script setup lang="ts">
import { storeToRefs } from 'pinia'

import Button from './Button.vue'
import { useTodosStore } from '../stores/todo-store/todoStore'

const todosStore = useTodosStore()

const { todos } = storeToRefs(todosStore)
</script>
<template>
    <ul class="todos-list">
        <li v-for="todo in todos" :key="todo.id" class="todo-item">
            <div className="todo-item__data">
                <p>{{ todo.content }}</p>
                <p>{{ todo.status }}</p>
            </div>
            <div class="todo-item__actions">
                <Button @click="todosStore.openUpdateModal(todo)">Update</Button>
                <Button variant="danger" @click="todosStore.openRemoveModal(todo.id)"
                    >Remove</Button
                >
            </div>
        </li>
    </ul>
</template>

<style scoped>
.todo-item__status-inprogress {
    color: green;
}

.todos-list {
    gap: 2rem;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.todo-item {
    display: flex;
    flex-direction: column;
    margin-right: auto;
    margin-left: auto;
    gap: 1rem;
    background-color: var(--vt-c-vue-blue);
    padding: 0.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
    transition-property: box-shadow;
    transition-timing-function: ease-in-out;
    transition-delay: 50ms;
    transition-duration: 100ms;
    overflow-wrap: break-word;
    width: 100%;
}

@media (max-width: 720px) {
    .todos-list {
        display: flex;
        flex-direction: column;
    }
}

.todo-item__data {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.todo-item__actions {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    justify-content: end;
}
</style>
