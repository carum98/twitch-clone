<script setup lang="ts">
import NavBar from './layout/NavBar.vue'
import SideBar from './layout/SideBar.vue'
import { fetchData } from './composable/fetchData'

fetchData()
</script>

<template>
    <NavBar />
    <SideBar />
    <main id="content">
        <router-view v-slot="{ Component }">
            <Suspense v-if="Component">
                <component :is="Component"></component>
                <template #fallback>
                    <h1>Loading...</h1>
                </template>
            </Suspense>
        </router-view>
    </main>
</template>
