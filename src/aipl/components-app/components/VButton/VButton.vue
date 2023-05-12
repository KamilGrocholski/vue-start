<script setup lang="ts">
import { computed, type ButtonHTMLAttributes, type PropType } from 'vue'

const VARIANT = {
    primary: 'btn-primary',
    secondary: 'btn-secondary'
} as const

const SIZE = {
    lg: 'btn-lg',
    md: 'btn-md',
    sm: 'btn-sm'
} as const

const props = defineProps({
    type: {
        type: String as PropType<ButtonHTMLAttributes['type']>,
        default: 'button'
    },
    loading: {
        type: Boolean,
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    },
    variant: {
        type: String as PropType<keyof typeof VARIANT>,
        default: 'primary'
    },
    size: {
        type: String as PropType<keyof typeof SIZE>,
        default: 'md'
    }
})

const computedAttrs = computed(() => {
    return {
        'aria-disabled': props.disabled ? true : undefined,
        disabled: props.disabled ? true : undefined,
        type: props.type
    }
})

const computedClass = computed(() => {
    return [
        VARIANT[props.variant],
        SIZE[props.size],
        {
            'btn-disabled': props.disabled || props.loading,
            'btn-loading': props.loading
        }
    ]
})
</script>

<template>
    <button v-bind="computedAttrs" :class="computedClass">
        <span v-if="props.loading"> Loading... </span>
        <span v-else>
            <slot></slot>
        </span>
    </button>
</template>

<style scoped>
button {
    all: unset;
    cursor: pointer;
    border: 1px solid;
    transition: all 200ms ease-in-out;
    border-radius: 0.3rem;
    background-color: black;
    color: white;
    height: fit-content;
    width: fit-content;
}

.btn-primary {
    border-color: var(--vt-c-vue-mint);
}

.btn-primary:not(:disabled):not(.btn-loading):hover {
    background-color: var(--vt-c-vue-mint);
    color: black;
}

.btn-secondary {
    border-color: var(--vt-c-vue-blue);
}

.btn-secondary:not(:disabled):not(.btn-loading):hover {
    background-color: var(--vt-c-vue-blue);
    color: white;
}

.btn-lg {
    font-size: 1.2rem;
    padding-inline: 1rem;
    padding-block: 0.5rem;
}

.btn-md {
    font-size: 1rem;
    padding-inline: 0.7rem;
    padding-block: 0.3rem;
}

.btn-sm {
    font-size: 0.9rem;
    padding-inline: 0.5rem;
    padding-block: 0.1rem;
}

.btn-disabled {
    opacity: 75%;
    cursor: not-alowed;
}

.btn-loading {
    cursor: wait !important;
}
</style>
