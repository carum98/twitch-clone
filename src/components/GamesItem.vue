<script lang="ts" setup>
import IGames from '../interfaces/IGames'

defineProps({
    game: {
        type: Object as () => IGames,
        required: true,
    },
})
</script>

<template>
    <a class="games__item">
        <div class="games__item--thumbnail">
            <img :src="game.box_art_url" />
        </div>

        <p>{{ game.name }}</p>
    </a>
</template>
