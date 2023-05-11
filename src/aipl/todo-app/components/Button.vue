<script lang="ts">
import { computed, defineComponent, type PropType, type ButtonHTMLAttributes } from 'vue'

export type ButtonVariant = 'primary' | 'danger'

export type ButtonSize = 'md' | 'lg'

export default defineComponent({
    props: {
        disabled: { type: Boolean as PropType<boolean>, default: false },
        loading: { type: Boolean as PropType<boolean>, default: false },
        variant: { type: String as PropType<ButtonVariant>, default: 'primary' },
        size: { type: String as PropType<ButtonSize>, default: 'md' },
        type: { type: String as PropType<ButtonHTMLAttributes['type']>, default: 'button' },
        class: { type: String, default: '' }
    },
    setup(props) {
        const computedClasses = computed(() => [
            [`btn-${props.variant}`],
            [`btn-${props.size}`],
            {
                'btn-disabled': props.disabled,
                'btn-loading': props.loading
            },
            props.class
        ])

        const computedAttrs = computed(() => ({
            'aria-disabled': props.disabled ? true : undefined,
            disabled: props.disabled ? true : undefined,
            type: props.type
        }))

        const click = (e: MouseEvent) => {
            if (props.disabled) {
                e.preventDefault()
                e.stopPropagation()

                return
            }
        }

        return {
            computedClasses,
            computedAttrs,
            click
        }
    }
})
</script>

<template>
    <button @click="click" v-bind="computedAttrs" class="btn" :class="computedClasses">
        <div>
            <div v-if="loading">Loading...</div>
            <slot v-else></slot>
        </div>
    </button>
</template>

<style scoped>
.btn {
    outline: none;
    border: none;
    border-radius: 0.2rem;
    cursor: pointer;
    transition-property: background-color color;
    transition-duration: 200ms;
    transition-timing-function: ease-in-out;
    box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
}

.btn-primary {
    background-color: var(--vt-c-vue-mint);
    color: white;
}

.btn-danger {
    background-color: red;
    color: white;
}

.btn-danger:not(:disabled):not(.btn-loading):hover {
    background-color: white;
    color: black;
}

.btn-disabled {
    opacity: 75%;
    cursor: none;
}

.btn-md {
    padding-inline: 0.5rem;
    padding-block: 0.3rem;
}

.btn-lg {
    padding-inline: 1rem;
    padding-block: 0.7rem;
    font-size: 1.1rem;
}
</style>
