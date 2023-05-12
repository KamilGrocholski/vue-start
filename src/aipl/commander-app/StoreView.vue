<script setup lang="ts">
import CartItemsList from './components/cart/CartItemsList.vue'
import { useCartStore } from './stores/cart-store'
import ItemsList from './components/items/ItemsList.vue'
import items from './data/items'

const cartStore = useCartStore()
</script>

<template>
    <section>
        <h1>Cart</h1>
        <CartItemsList v-if="cartStore.cartItems.length" :cartItems="cartStore.cartItems" />
        <div v-else>No items in the cart.</div>
    </section>
    <section>
        <h1>Items</h1>
        <ItemsList v-if="items.length" :items="items" />
        <div v-else>No items in the shop.</div>
    </section>
</template>

<style scoped></style>
