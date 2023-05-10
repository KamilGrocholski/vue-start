<script setup lang="ts">
import TodosList from './components/TodosList.vue'
import AddTodoForm from './components/AddTodoForm.vue'
import UpdateTodoForm from './components/UpdateTodoForm.vue'
import RemoveTodoForm from './components/RemoveTodoForm.vue'
</script>

<template>
    <div class='todos-view'>
        <RemoveTodoForm />
        <UpdateTodoForm />
        <AddTodoForm />
            <TodosList />
    </div>
</template>

<style scoped>
.todos-view {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    width: 100%;
}

@media (max-width: 1024px) {
    .todos-view {
        flex-direction: column;
    }
}
</style>
