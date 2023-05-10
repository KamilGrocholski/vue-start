<template>
    <div class="modal">
        <div class="modal__content"><slot></slot></div>
    </div>
</template>

<style scoped>
.modal {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow-y: auto;
    z-index: 50;
    background-color: rgba(50, 30, 20, 75%);
}

.modal__content {
    background-color: var(--vt-c-vue-blue);
    border-radius: 0.5rem;
    padding: 1rem;
    position: relative;
    text-align: left;
    align-content: center;
    margin-left: auto;
    margin-right: auto;
}
</style>
