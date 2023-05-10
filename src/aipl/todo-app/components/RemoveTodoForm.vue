<script setup lang="ts">
import { storeToRefs } from 'pinia'
import Modal from './Modal.vue'
import Button from './Button.vue'
import { useTodosStore } from '../stores/todo-store/todoStore'

const todosStore = useTodosStore()

const { todoToRemove, isRemoveModalOpen } = storeToRefs(todosStore)

function handleSubmit() {
    if (todoToRemove.value.id === undefined) {
        return
    }

    todosStore.removeTodo(todoToRemove.value.id)
    todosStore.closeRemoveModal()
}
</script>

<template>
    <Modal v-if="isRemoveModalOpen"> 
        <form @submit.prevent="handleSubmit" class='form-wrapper'>
            <p>Do you want to remove this todo?</p>
            <div>
            <Button type="submit" size='lg'>Yes</Button>
            <Button size='lg' @click="todosStore.closeRemoveModal">No</Button>
            </div>
        </form>
    </Modal>
</template>

<style scoped>
.form-wrapper {
    text-align: center;
}
.form-wrapper>div {
    display: flex;
    justify-content: center;
    gap: 1rem;
}
</style>
