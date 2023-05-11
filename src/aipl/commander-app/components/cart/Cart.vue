<script setup lang="ts">
import { type CartItem } from '../../types'
import CartItemsList from './CartItemsList.vue'

const props = defineProps() as {
    cartItems: CartItem[]
}
</script>

<template>
    <div>
        <CartItemsList :cartItems="props.cartItems" />
    </div>
</template>
