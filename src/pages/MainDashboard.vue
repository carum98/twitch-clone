<script setup lang="ts">
import { streams } from '../store/fetchData'
import StreamList from '../components/StreamList.vue'
import GamesList from '../components/GamesList.vue'
import CategoriesButtons from '../components/CategoriesButtons.vue'
import StreamCarrousel from '../components/StreamCarrousel.vue'
</script>

<template>
    <section class="main_dashboard">
        <StreamCarrousel v-if="streams.length" :streams="streams.slice(1, 6)" />

        <StreamList :streams="streams.slice(0, 5)" title="Live channels we think you’ll like" />

        <StreamList :streams="streams.slice(5, 10)" title="All aboard the Hype Train!" />

        <GamesList />

        <CategoriesButtons />

        <StreamList :streams="streams.slice(10, 15)" title="All aboard the Hype Train!" />
    </section>
</template>

<style>
.main_dashboard {
    padding: 30px;
    overflow-x: hidden;
}
</style>
