<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

import { EXTERNAL_LINKS } from './const/external-links'

const isMenuOpen = ref<boolean>(false)

function openMenu() {
    isMenuOpen.value = true
}

function closeMenu() {
    isMenuOpen.value = false
}
</script>

<template>
    <div>
        <header>
            <RouterLink to="/">
                <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="80" height="80" />
            </RouterLink>
            <button class="menu-btn" @click="openMenu">Menu</button>
            <div v-if="isMenuOpen" class="overlay" @click="closeMenu">
                <div class="menu">
                    <nav>
                        <RouterLink to="/">Home</RouterLink>
                        <RouterLink to="/todos">Todos</RouterLink>
                        <RouterLink to="/store">Store</RouterLink>
                        <RouterLink to="/components">Components</RouterLink>
                    </nav>
                </div>
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
    padding-inline: 2rem;
}

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(1, 1, 1, 75%);
    display: flex;
    justify-content: center;
    align-items: center;
}

.menu {
    display: flex;
    justify-content: center;
    background-color: var(--vt-c-vue-blue);
    height: min-content;
    padding-inline: 1rem;
    padding-block: 0.5rem;
}

nav {
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: 12px;
    text-align: center;
}

nav a {
    font-size: 1.1rem;
    width: 100%;
}

nav a:hover {
    background-color: var(--vt-c-vue-mint);
}

nav a.router-link-exact-active {
    color: var(--vt-c-vue-mint);
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
    color: white;
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
    padding-inline: 2rem;
}

footer a {
    color: white;
}

footer a:active {
    color: var(--vt-c-vue-mint);
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

.menu-btn {
    all: unset;
    padding-inline: 0.8rem;
    padding-block: 0.3rem;
    border-radius: 0.3rem;
}

.menu-btn:hover {
    background-color: var(--vt-c-vue-mint);
}
</style>
