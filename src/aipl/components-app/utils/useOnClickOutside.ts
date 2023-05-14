import { onBeforeUnmount, onMounted, type Ref } from 'vue'
// DOMRef is dom by ref
export default function useOnClickOutside(DOMRef: Ref<HTMLElement | null>, callback: () => void) {
    function handleClick(event: Event) {
        if (DOMRef?.value && !DOMRef.value.contains(event.target as HTMLElement)) {
            callback()
            return
        }
    }

    onMounted(() => {
        document.addEventListener('mousedown', handleClick)
    })

    onBeforeUnmount(() => {
        document.removeEventListener('mousedown', handleClick)
    })
}
