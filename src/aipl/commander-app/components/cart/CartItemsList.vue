<script setup lang="ts">
import type { CartItem as CartItemProps } from '../../types'
import CartItem from './CartItem.vue'
import { type PropType } from 'vue'

const props = defineProps({
    cartItems: {
        type: Array as PropType<CartItemProps[]>,
        required: true
    }
})
</script>

<template>
    <ul>
        <CartItem
            v-for="cartItem in props.cartItems"
            :cartItem="cartItem"
            :key="cartItem.item.id"
        />
    </ul>
</template>

<style scoped>
ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}
</style>
