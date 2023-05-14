<script setup lang="ts">
import type { PropType } from 'vue'

import VButton from '../VButton/VButton.vue'

const props = defineProps({
    isOpen: {
        type: Boolean,
        required: true
    },
    close: {
        type: Function as PropType<() => void>,
        requried: true
    }
})
</script>

<template>
    <div v-if="isOpen" class="modal__overlay">
        <div class="modal__wrapper">
            <div class="modal__header">
                <VButton @click="close()">&times;</VButton>
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
.modal__overlay {
    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    background-color: rgba(0, 0, 0, 75%);
}

.modal__wrapper {
    margin-inline: auto;
    background-color: var(--vt-c-vue-blue);
    height: fit-content;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    border-radius: 0.3rem;
}

.modal__header {
    display: flex;
    flex-direction: row;
    justify-content: end;
    height: fit-content;
}
</style>
