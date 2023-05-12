<script setup lang="ts">
import { type PropType } from 'vue'

import { type CartItem as CartItemProps } from '../../types'
import { useCartStore } from '../../stores/cart-store'

const cartStore = useCartStore()

const props = defineProps({
    cartItem: {
        type: Object as PropType<CartItemProps>,
        required: true
    }
})

function handleDecrement() {
    cartStore.changeQuantity(props.cartItem.item.id, props.cartItem.quantity - 1)
}

function handleIncrement() {
    cartStore.changeQuantity(props.cartItem.item.id, props.cartItem.quantity + 1)
}

function handleRemove() {
    cartStore.removeItem(props.cartItem.item.id)
}
</script>

<template>
    <li>
        <figure>
            <img :src="props.cartItem.item.imageUrl" :alt="props.cartItem.item.name" />
        </figure>
        <h3>{{ props.cartItem.item.name }}</h3>
        <div class="actions">
            <button @click="handleDecrement">-</button>
            <span>{{ props.cartItem.quantity }}</span>
            <button @click="handleIncrement">+</button>
            <button @click="handleRemove">Remove</button>
        </div>
    </li>
</template>

<style scoped>
li {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
    background-color: gray;
    padding: 1rem;
}

.actions {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
}

h3 {
    font-weight: 400;
}

img {
    max-width: 100%;
    display: block;
}

button {
    all: unset;
    background-color: var(--vt-c-vue-blue);
    padding-inline: 0.5rem;
    padding-block: 0.1rem;
    cursor: pointer;
    transition: all 200ms;
}

button:hover {
    background-color: var(--vt-c-vue-mint);
}
</style>
