<script setup lang='ts'>
    import {type Item as ItemProps} from '../../types'
    import Item from './Item.vue'

    const props = defineProps<{
        items: ItemProps[]
        }>()
</script>

<template>
    <ul>
        <li v-for="item in props.items" :key="item.id">
            {{item.name}}
        </li>
    </ul>
</template>
