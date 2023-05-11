<script setup lang="ts">
import Cart from './components/cart/Cart.vue'
import {type Item} from './types'
import {useCartStore} from './stores/cart-store'
import items from './data/items'
</script>

<template>
    <div>
        <div v-for="item in items" :key="item.id">
            {{item.name}}
        </div>
        <ItemsList :items="items" />
    </div>
</template>
