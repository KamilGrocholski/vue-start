<script setup lang="ts">
import type { CartItem } from '../../types'
import { useCartStore } from '../../stores/cart-store'

const cartStore = useCartStore()

const props = defineProps() as CartItem

function handleIncrement() {
    cartStore.changeQuantity(props.item.id, props.quantity + 1)
}

function handleDecrement() {
    cartStore.changeQuantity(props.item.id, props.quantity - 1)
}
</script>

<template>
    <div>
        <div>
            <figure>
                <img :src="props.item.imageUrl" :alt="props.item.name" />
            </figure>
            <div>
                <h3>{{ props.item.name }}</h3>
            </div>
        </div>
        <div>
            <button @click="handleDecrement">-</button>
            <p>{{ props.quantity }}</p>
            <button @click="handleIncrement">+</button>
        </div>
    </div>
</template>
