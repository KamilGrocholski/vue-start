<script setup lang="ts">
import { storeToRefs } from 'pinia'

import Modal from './Modal.vue'
import Button from './Button.vue'
import { useTodosStore, TODO_STATUSES } from '../stores/todo-store/todoStore'

const todosStore = useTodosStore()

const { todoToUpdate, isUpdateModalOpen } = storeToRefs(todosStore)

function handleSubmit() {
    if (!todoToUpdate.value) {
        return
    }

    todosStore.updateTodo(todoToUpdate.value.id, {
        content: todoToUpdate.value.content,
        status: todoToUpdate.value.status
    })

    todosStore.closeUpdateModal()
}
</script>

<template>
    <Modal v-if="isUpdateModalOpen">
        <form @submit.prevent="handleSubmit">
            <div class="inputs-wrapper">
                <input v-model="todoToUpdate.content" type="text" />
                <select v-model="todoToUpdate.status">
                    <option v-for="status in TODO_STATUSES" :key="status">
                        {{ status }}
                    </option>
                </select>
            </div>
            <div class="actions-wrapper">
                <Button size="lg" type="submit">Update</Button>
                <Button size="lg" @click="todosStore.closeUpdateModal">Cancel</Button>
            </div>
        </form>
    </Modal>
</template>

<style scoped>
.w-full {
    width: 100%;
}

.inputs-wrapper {
    display: flex;
    flex-direction: column;
}

.actions-wrapper {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    margin-top: 1rem;
    justify-content: center;
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
