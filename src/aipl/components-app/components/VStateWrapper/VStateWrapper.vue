<script setup lang="ts" generic="T">
import { computed } from 'vue'

export type VStateWrapperProps<TData> = {
    isLoading: boolean
    isError?: boolean
    isEmpty?: boolean
    data: TData
}

const props = defineProps<VStateWrapperProps<T>>()

const isReallyEmpty = computed(() => {
    if (props.isEmpty) return true

    if (props.data === null || props.data === undefined) return true

    if (Array.isArray(props.data) && props.data.length === 0) return true

    return false
})
</script>

<template>
    <slot v-if="isLoading" name="Loading"></slot>
    <slot v-else-if="isError" name="Error"></slot>
    <slot v-else-if="isReallyEmpty" name="Empty"></slot>
    <slot v-else name="NonEmpty"></slot>
</template>
