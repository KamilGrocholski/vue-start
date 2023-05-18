<script setup lang="ts">
import { useMutation, useQueryClient } from '@tanstack/vue-query'

import { type JokesPair, type CastVoteData, castVote } from '../api/jokesApi'

defineProps<{ jokesPair: JokesPair }>()

const queryClient = useQueryClient()

const { isError, mutate } = useMutation({
    mutationFn: (data: CastVoteData) => castVote(data),
    onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['jokesPair'] })
    }
})
</script>

<template>
    <div class="voting-container">
        <span v-if="isError">An error has occured during the voting. Try again.</span>
        <button
            class="voting-btn"
            @click="mutate({ for: jokesPair.joke1, against: jokesPair.joke2 })"
        >
            {{ jokesPair.joke1.value }}
        </button>
        <div class="voting-vs">VS</div>
        <button
            class="voting-btn"
            @click="mutate({ for: jokesPair.joke2, against: jokesPair.joke1 })"
        >
            {{ jokesPair.joke2.value }}
        </button>
    </div>
</template>

<style scoped>
.voting-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
}

.voting-vs {
    width: fit-content;
    margin-inline: auto;
}

.skip-btn {
    color: var(--vt-c-vue-blue);
}

.voting-btn {
    background-color: var(--vt-c-vue-blue);
    width: fit-content;
    margin-inline: auto;
}

.voting-btn:hover {
    background-color: var(--vt-c-vue-mint);
}

button {
    all: unset;
    translate: all 200ms ease-in-out;
    padding-inline: 0.3rem;
    padding-block: 0.2rem;
    border-radius: 0.3rem;
}
</style>
