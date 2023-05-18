<script setup lang="ts">
import { type VNodeRef, useSlots } from 'vue'

import type { ViewportBreakpoint } from '../../utils/uiTypes'

const props = withDefaults(
    defineProps<{
        isOpen: boolean
        size?: ViewportBreakpoint
        isClosable?: boolean
    }>(),
    {
        size: 'md',
        isClosable: true
    }
)

const emit = defineEmits<{
    'update:isOpened'(val: string): void
}>()

const slots = useSlots()

const slotProps: { focusRef: VNodeRef } = {
    focusRef: (el) => {
        initialFocusEl.value = unrefElement(el as any)
    }
}

const { containerEl, initialFocusEl, vModel } = useModal(props, emit)
</script>

<template>
    <Teleport to="body">
        <div v-if="props.isOpen" class="ui-modal">
            <div class="overlay" />

            <VContainer ref="containerEl" class="container" :size="props.size"> </VContainer>
        </div>
    </Teleport>
</template>

<style scoped lang="postcss"></style>
