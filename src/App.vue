<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import { EXTERNAL_LINKS } from './const/external-links'
</script>

<template>
    <div class="">
        <header>
            <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="80" height="80" />

            <div class="wrapper">
                <nav>
                    <RouterLink to="/">Home</RouterLink>
                    <RouterLink to="/todos">Todos</RouterLink>
                    <RouterLink to="/store">Store</RouterLink>
                </nav>
            </div>
        </header>

        <main class="container">
            <RouterView />
        </main>
        <footer>
            <div>
                <a :href="EXTERNAL_LINKS.github.repo">REPO</a>
                <span>by</span>
                <a :href="EXTERNAL_LINKS.github.profile">Mikalsqwe</a>
            </div>
        </footer>
    </div>
</template>

<style scoped>
main {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
    padding-block: 3rem;
    padding-inline: 1rem;
}

header {
    display: flex;
    flex-direction: row;
    background-color: var(--vt-c-vue-blue);
    width: 100%;
    z-index: 45;
    line-height: 1.5;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    height: 5rem;
}

nav {
    display: flex;
    flex-direction: row;
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
    margin-left: 2rem;
}

nav a.router-link-exact-active {
    color: var(--color-text);
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
    border: 0;
}

footer {
    background-color: var(--vt-c-vue-blue);
}

footer > div {
    display: flex;
    flex-direction: row;
    gap: 0.4rem;
}

@media (min-width: 1024px) {
    header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
        margin: 0 2rem 0 0;
    }

    header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }

    nav {
        text-align: left;
        margin-left: -1rem;
        font-size: 1rem;

        padding: 1rem 0;
        margin-top: 1rem;
    }
}
</style>
