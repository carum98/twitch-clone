<script setup lang="ts">
import ChannelItem from '../components/ChannelItem.vue'
import { channels } from '../store/fetchData'

const toggle = () => {
    document.querySelector('#app')?.classList.toggle('collapse')
}
</script>

<template>
    <section id="sidebar">
        <div class="sidebar__header">
            <h2>Recommended channels</h2>
            <button @click="toggle">
                <img src="../assets/icon-arrow.svg" />
            </button>
        </div>

        <ul class="sidebar__channels">
            <li v-for="channel in channels">
                <ChannelItem :channel="channel" />
            </li>
        </ul>
    </section>
</template>
