<script setup lang="ts">
import type { PropType } from 'vue'

import { type Item as ItemProps } from '../../types'
import Item from './Item.vue'

const props = defineProps({
    items: {
        type: Array as PropType<ItemProps[]>,
        required: true
    }
})
</script>

<template>
    <ul>
        <Item v-for="item in props.items" :key="item.id" :item="item" />
    </ul>
</template>
