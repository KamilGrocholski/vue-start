import {ref} from 'vue'

import { useVModel } from "@vueuse/core"

const useModal = (
    props: {isOpen: boolean, isClosable?: boolean},
    emit: SE<{
        'update:isOpen'(val: string): void
        }>
    }
) => {
    const vModel = useVModel(props, 'isOpen', emit)
    const containerEl = ref<HTMLElement>()

    const close = () => {
        if (!props?.isClosable) return
        vModel.value = false
    }

    onClickOutside(containerEl, close)

    return {
        containerEl,
        vModel
    }
}
