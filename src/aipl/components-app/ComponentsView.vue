<script setup lang="ts">
import { computed, ref } from 'vue'

import VButton from './components/VButton/VButton.vue'
import VTextInput from './components/VTextInput/VTextInput.vue'
import VLiveSearch from './components/VLiveSearch/VLiveSearch.vue'
import VModal from './components/VModal/VModal.vue'

const isModalOpen = ref<boolean>(false)

const weirdGlobalInVue = computed(() => {
    return {
        console
    }
})
</script>

<template>
    <div class="sections-container">
        <section>
            <h1>Buttons</h1>
            <article>
                <h2>Primary</h2>
                <div>
                    <VButton size="sm" variant="primary">Click me!</VButton>
                    <VButton size="md" variant="primary">Click me!</VButton>
                    <VButton size="lg" variant="primary">Click me!</VButton>
                </div>
            </article>
            <article>
                <h2>Secondary</h2>
                <div>
                    <VButton size="sm" variant="secondary">Click me!</VButton>
                    <VButton size="md" variant="secondary">Click me!</VButton>
                    <VButton size="lg" variant="secondary">Click me!</VButton>
                </div>
            </article>
        </section>

        <section>
            <h1>Text inputs</h1>
            <article>
                <h2>Primary</h2>
                <div>
                    <VTextInput variant="primary" size="sm" placeholder="Type smth..." />
                    <VTextInput variant="primary" size="md" placeholder="Type smth..." />
                    <VTextInput variant="primary" size="lg" placeholder="Type smth..." />
                </div>
            </article>
            <article>
                <h2>Secondary</h2>
                <div>
                    <VTextInput variant="secondary" size="sm" placeholder="Type smth..." />
                    <VTextInput variant="secondary" size="md" placeholder="Type smth..." />
                    <VTextInput variant="secondary" size="lg" placeholder="Type smth..." />
                </div>
            </article>
        </section>

        <section>
            <h1>VLiveSearch</h1>
            <article>
                <div>
                    <VLiveSearch
                        :extractKey="(item) => item.id"
                        :onSearch="(query) => weirdGlobalInVue.console.log(query)"
                        :onEnter="(item) => weirdGlobalInVue.console.log(item)"
                        :fetchItems="
                            (query) =>
                                [
                                    { id: 1, name: 'ok' },
                                    { id: 2, name: 'nie' },
                                    { id: 3, name: 'tak' }
                                ].filter((item) => item.name.startsWith(query))
                        "
                    >
                        <template #item="{ name }">
                            <div>{{ name }}</div>
                        </template>
                    </VLiveSearch>
                </div>
            </article>
        </section>

        <section>
            <h1>Modal</h1>
            <article>
                <VModal
                    :isOpen="isModalOpen"
                    :close="
                        () => {
                            isModalOpen = false
                        }
                    "
                >
                    <div style="height: 300px; width: 300px; text-align: center">Modal content</div>
                </VModal>
                <VButton
                    @click="
                        () => {
                            isModalOpen = true
                        }
                    "
                    >Modal</VButton
                >
            </article>
        </section>
    </div>
</template>

<style scoped>
h1 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.8rem;
}

h2 {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 0.4rem;
}

.sections-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

article > div {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
}

@media (max-width: 764px) {
    article > div {
        flex-direction: column;
    }
}
</style>
