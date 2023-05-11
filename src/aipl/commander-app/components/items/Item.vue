<script setup lang='ts'>
    import type {Item} from '../../types'
    import {useCartStore} from '../../stores/cart-store'

    const cartStore = useCartStore()

    const props = defineProps<Item>()

    function handleAddToCart() {
        cartStore.addItem({
            item: props,
            quantity: 1
        })
    }
</script>

<template>
<div>
    <h3>{{props.name}}</h3>
    <img :src="props.imageUrl" :alt="props.name" />
    <div>{{props.price}}</div>
    <button @click="handleAddToCart">Add</button>
</div>
</template>
