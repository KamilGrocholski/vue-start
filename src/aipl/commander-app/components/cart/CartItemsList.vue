<script setup lang="ts">
import { type CartItem as CartItemProps } from '../../types'
import CartItem from './CartItem.vue'

const props = defineProps() as {
    cartItems: CartItemProps[]
}
</script>

<template>
    <ul>
        <li v-for="cartItem in props.cartItems" :key="cartItem.item.id">
            <CartItem :item="cartItem.item" :quantity="cartItem.quantity" />
        </li>
    </ul>
</template>
