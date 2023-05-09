<script lang='ts'>
import TodosList from './components/TodosList.vue'
import AddTodoForm from './components/AddTodoForm.vue'
import { useTodosStore } from './stores/todo-store/todoStore';

const todosStore = useTodosStore()

export default {
    name: 'TodosView',
    setup() {
        return {
            todos: todosStore.todos 
        }
    }
}
</script>

<template>
<main>
    <AddTodoForm />
    <TodosList :todos="todos" />
</main>
</template>


