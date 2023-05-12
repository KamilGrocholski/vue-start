<script setup lang="ts">
import { computed, type PropType } from 'vue'

import type {Item} from '../../types'
import {useCartStore} from '../../stores/cart-store'

const cartStore = useCartStore()

const props = defineProps({
    item: {
        type: Object as PropType<Item>,
        required: true
    }
})

function handleAddToCart() {
    cartStore.addItem({
        item: props.item,
        quantity: 1
    })
}

const isAlreadyIn = computed(() => {
    return cartStore.cartItems.findIndex(i => i.item.id === props.item.id) >= 0
})
</script>

<template>
    <div class="item">
        <figure>
            <img :src="props.item.imageUrl" :alt="props.item.name" />
        </figure>
        <h3>{{ props.item.name }}</h3>
        <div>{{ props.item.price }}</div>
        <button :disabled="isAlreadyIn" @click="handleAddToCart" :class="{alreadyIn: isAlreadyIn}">
            <span v-if="isAlreadyIn">In the cart</span>
            <span v-else>Add</span>
        </button>
    </div>
</template>

<style scoped>
button {
    all: unset;
    background-color: var(--vt-c-vue-mint);
    width: 100%;
    padding-inline: 1rem;
    padding-block: 0.5rem;
    cursor: pointer;
}

.item {
    max-width: min(30ch, 100% - 5rem);
    margin-inline: auto;
}

.alreadyIn {
    background-color: var(--vt-c-vue-blue);
    cursor: default;
}

img {
    max-width: 100%;
    display: block;
}
</style>
