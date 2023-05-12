<script setup lang="ts">
import CartItemsListVue from './CartItemsList.vue'
import { useCartStore } from '../../stores/cart-store'

const cartStore = useCartStore()
</script>

<template>
    <div>
        <CartItemsListVue v-if="cartStore.cartItems.length" :cartItems="cartStore.cartItems" />
        <div v-else>No items in the cart.</div>
    </div>
</template>
