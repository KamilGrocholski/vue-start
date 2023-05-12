<script setup lang='ts' generic='T'>
    import {type PropType, ref, watch} from 'vue'

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
    const hoverIndex = ref<number>(-1)
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
        const {key} = e

        switch(key) {
            case 'Enter': 
                e.preventDefault()
                selectedIndex.value = hoverIndex.value
                handleEnter()
                return
            case 'Esc':
                e.preventDefault()
                shouldShowItems.value = false
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
            <input v-model="query" :on-keydown="handleKeydown" :on-blur="handleBlur" :on-focus="handleFocus" />
            <button @click="handleSearch">Search</button>
        </div>
        <div v-if="shouldShowItems">
            <ul>
                <li v-for="item in items" :key="props.extractKey(item)">
                    <component :is="item" />               
                </li>
            </ul>
        </div>
    </div>
</template>


