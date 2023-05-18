<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'

import JokesCastingVote from './components/JokesCastingVote.vue'
import { getRandomJokesPair } from './api/jokesApi'

const { data, isLoading, isError, isRefetching } = useQuery({
    queryFn: getRandomJokesPair,
    queryKey: ['jokesPair']
})
</script>

<template>
    <div>
        <span v-if="isLoading || isRefetching">Getting your jokes...</span>
        <span v-else-if="isError">An error has occured!</span>
        <JokesCastingVote v-else :jokesPair="data" />
    </div>
</template>

<style scoped>
div {
    display: flex;
    place-content: center;
}
</style>
