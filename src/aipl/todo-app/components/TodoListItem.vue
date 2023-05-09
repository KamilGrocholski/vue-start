<script lang="ts">
import { type Todo } from '../stores/todo-store/todoStore'

export default {
    name: 'TodoListItem',
    setup(props: { todo: Todo }) {
        return {
            todo: props.todo
        }
    }
}
</script>

<template>
    <li>
        <p>{{ todo.content }}</p>
        <p>{{ todo.status }}</p>
    </li>
</template>
