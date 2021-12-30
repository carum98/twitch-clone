<script setup lang="ts">
import IStream from '../interfaces/IStream'
import { ref } from 'vue'
import StreamPreview from './StreamPreview.vue'

const props = defineProps({
    streams: {
        type: Array as () => IStream[],
        required: true,
    },
})

const cards = ref<IStream[]>([...props.streams])

const next = () => {
    const card = cards.value.shift() as IStream
    cards.value.push(card)
}

const previus = () => {
    const card = cards.value.pop() as IStream
    cards.value.unshift(card)
}
</script>

<template>
    <section class="carrousel" v-if="streams.length">
        <button @click="previus">
            <span class="material-icons-outlined"> navigate_before </span>
        </button>

        <img :src="cards[0].thoumbnail" />
        <img :src="cards[1].thoumbnail" />

        <StreamPreview :stream="cards[2]" />

        <img :src="cards[3].thoumbnail" />
        <img :src="cards[4].thoumbnail" />

        <button @click="next">
            <span class="material-icons-outlined"> navigate_next </span>
        </button>
    </section>
</template>
