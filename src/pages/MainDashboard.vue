<script setup lang="ts">
import { streams } from '../composable/fetchData'
import StreamList from '../components/StreamList.vue'
import GamesList from '../components/GamesList.vue'
import CategoriesButtons from '../components/CategoriesButtons.vue'
</script>

<template>
    <StreamList :streams="streams" title="Live channels we think you’ll like" />

    <StreamList :streams="streams" title="All aboard the Hype Train!" />

    <GamesList />

    <CategoriesButtons />

    <StreamList :streams="streams" title="All aboard the Hype Train!" />
</template>
