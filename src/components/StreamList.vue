<script setup lang="ts">
import IStream from '../interfaces/IStream'
import StreamItem from './StreamItem.vue'
import { defineProps } from 'vue'

defineProps({
    streams: {
        type: Array as () => IStream[],
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
})
</script>

<template>
    <h3>{{ title }}</h3>

    <section class="stream__list">
        <StreamItem v-for="stream in streams" :stream="stream" />
    </section>

    <section class="stream__showMore">
        <div></div>
        <button>Show more</button>
        <div></div>
    </section>
</template>
