<script lang="ts">
export default {
    inheritAttrs: false
}
</script>

<script setup lang="ts">
import { computed, type InputHTMLAttributes, type PropType } from 'vue'

const VARIANT = {
    primary: 'input-primary',
    secondary: 'input-secondary'
} as const

const SIZE = {
    lg: 'input-lg',
    md: 'input-md',
    sm: 'input-sm'
} as const

const props = defineProps({
    type: {
        type: String as PropType<InputHTMLAttributes>,
        default: 'text'
    },
    size: {
        type: String as PropType<keyof typeof SIZE>,
        default: 'md'
    },
    variant: {
        type: String as PropType<keyof typeof VARIANT>,
        default: 'primary'
    },
    disabled: {
        type: Boolean,
        default: false
    }
})

const computedClass = computed(() => {
    return [
        SIZE[props.size],
        VARIANT[props.variant],
        {
            'input-disabled': props.disabled ? true : undefined
        }
    ]
})

const computedAttrs = computed(() => {
    return {
        'aria-disabled': props.disabled,
        disabled: props.disabled
    }
})
</script>

<template>
    <input v-bind="$attrs" :class="computedClass" />
</template>

<style scoped>
input {
    all: unset;
    border-radius: 0.3rem;
    border: 1px solid;
    height: fit-content;
    transition: all 200ms ease-in-out;
}

input::placeholder {
    color: white;
}

.input-primary {
    border-color: var(--vt-c-vue-mint);
    color: white;
}

.input-primary:not(:disabled):focus,
.input-primary:not(:disabled):hover,
.input-primary:not(:disabled):active {
    background-color: var(--vt-c-vue-mint);
    color: black;
}

.input-secondary {
    border-color: var(--vt-c-vue-blue);
    color: white;
}

.input-secondary:not(:disabled):focus,
.input-secondary:not(:disabled):hover,
.input-secondary:not(:disabled):active {
    background-color: var(--vt-c-vue-blue);
    color: white;
}

.input-lg {
    font-size: 1.2rem;
    padding-inline: 1rem;
    padding-block: 0.5rem;
}

.input-md {
    font-size: 1rem;
    padding-inline: 0.7rem;
    padding-block: 0.3rem;
}

.input-sm {
    font-size: 0.9rem;
    padding-inline: 0.5rem;
    padding-block: 0.1rem;
}

.input-disabled {
    opacity: 75%;
    cursor: not-allowed;
}
</style>
