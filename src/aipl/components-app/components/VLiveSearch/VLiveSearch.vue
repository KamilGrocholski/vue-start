<script setup lang="ts" generic="T">
import { type PropType, ref, watch } from 'vue'

import VButton from '../VButton/VButton.vue'
import VTextInput from '../VTextInput/VTextInput.vue'

const props = defineProps({
    onSearch: {
        type: Function as PropType<(query: string) => void>,
        required: true
    },
    onEnter: {
        type: Function as PropType<(item: T) => void>,
        required: true
    },
    extractKey: {
        type: Function as PropType<(item: T) => string>,
        required: true
    },
    fetchItems: {
        type: Function as PropType<(query: string) => T[]>,
        required: true
    }
})

const query = ref<string>('')
const selectedIndex = ref<number>(-1)
const items = ref<T[]>([])
const shouldShowItems = ref<boolean>(false)

watch(query, () => {
    const newItems = props.fetchItems(query.value)
    if (Array.isArray(newItems)) {
        items.value = newItems
    }
})

function handleSearch() {
    props.onSearch(query.value)
}

function handleEnter() {
    const selectedItem = items.value[selectedIndex.value]

    if (!selectedItem) {
        return
    }

    props.onEnter(selectedItem)
    shouldShowItems.value = false
}

function handleKeydown(e: KeyboardEvent) {
    const { key } = e

    switch (key) {
        case 'Enter':
            e.preventDefault()
            handleEnter()
            return
        case 'Esc':
            e.preventDefault()
            shouldShowItems.value = false
            return
        case 'ArrowDown':
            e.preventDefault()
            if (!items.value.length) {
                selectedIndex.value = -1
                return
            }
            if (selectedIndex.value >= items.value.length - 1) {
                selectedIndex.value = 0
                return
            }
            selectedIndex.value = selectedIndex.value + 1
            return
        case 'ArrowUp':
            e.preventDefault()
            if (!items.value.length) {
                selectedIndex.value = -1
                return
            }
            if (selectedIndex.value <= 0) {
                selectedIndex.value = items.value.length
                return
            }
            selectedIndex.value = selectedIndex.value - 1
            return
    }
}

function handleBlur() {
    shouldShowItems.value = false
}

function handleFocus() {
    shouldShowItems.value = true
}
</script>

<template>
    <div>
        <div>
            <VTextInput
                v-model="query"
                @keydown="handleKeydown"
                @blur="handleBlur"
                @focus="handleFocus"
                placeholder="Type smth..."
            />
            <VButton @click="handleSearch">Search</VButton>
        </div>
        <div v-if="shouldShowItems">
            <ul>
                <li
                    v-for="(item, itemIndex) in items"
                    :key="props.extractKey(item)"
                    class="item"
                    :class="{ item__hover: itemIndex === selectedIndex }"
                    @click="handleEnter"
                >
                    <slot name="item" v-bind="item"></slot>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.item {
    width: 100%;
    color: white;
}

.item:hover {
    background-color: gray;
}

.item__hover {
    background-color: var(--vt-c-vue-mint);
}
</style>
