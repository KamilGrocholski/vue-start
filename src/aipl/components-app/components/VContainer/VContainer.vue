<script setup lang="ts">
import { type ViewportBreakpoint } from '../../utils/uiTypes'

const props = withDefaults(defineProps<{ as?: string; size?: ViewportBreakpoint }>(), {
    as: 'div',
    size: 'md'
})
</script>

<template>
    <component :is="props.as" class="ui-container" :class="props.size">
        <slot />
    </component>
</template>

<style lang="postcss">
.container {
    width: 100%;
    margin-inline: auto;

    &.xl {
        max-width: var(--size-xl);
    }
    &.lg {
        max-width: var(--size-lg);
    }
    &.md {
        max-width: var(--size-md);
    }
    &.sm {
        max-width: var(--size-sm);
    }
}
</style>
