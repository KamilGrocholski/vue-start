<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div class=''>
    <header>
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

        <div class="wrapper">
            <nav>
                <RouterLink to="/">Home</RouterLink>
            </nav>
        </div>
    </header>

    <main class='container'>
    <RouterView />
    </main>
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
    background-color: var(--vt-c-vue-blue);
    width: 100%;
    z-index: 45;
    line-height: 1.5;
    position: sticky;
    top:0;
    left:0;
    right:0;
    height: 5rem;
}

.logo {
    display: block;
    margin: 0 auto 2rem;
}

nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
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
