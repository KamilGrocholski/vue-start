<script lang="ts">
import { type Todo } from '../../../../stores/todos'
import TodoListItem from '../TodoListItem'

export default {
    name: 'TodosList',
    components: {
        TodoListItem
    },
    setup(props: { todos: Todo[] }) {
        return {
            todos: props.todos
        }
    }
}
</script>

<template>
    <ul>
        <TodoListItem v-for="todo in todos" :todo="todo" :key="todo.id" />
    </ul>
</template>
