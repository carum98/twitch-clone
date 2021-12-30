<script setup lang="ts">
import { games } from '../composable/fetchData'
import GamesItem from './GamesItem.vue'
</script>

<template>
    <h3 class="games__title"><span>Categories</span> we think you’ll like</h3>

    <section class="games__list">
        <GamesItem v-for="game in games" :game="game" />
    </section>
</template>
