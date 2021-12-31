<script lang="ts" setup>
import IChannel from '../interfaces/IChannel'
import { formatViews } from '../util/helper'

defineProps({
    channel: {
        type: Object as () => IChannel,
        required: true,
    },
})
</script>

<template>
    <router-link
        :to="{ name: 'stream', params: { name: channel.name } }"
        class="channel__item">
        <img :src="channel.thumbnail" />

        <div class="channel__item--info">
            <span>{{ channel.name }}</span>
            <span>{{ channel.game }}</span>
        </div>

        <span class="channel__item--views">
            {{ formatViews(channel.viewers) }}
        </span>
    </router-link>
</template>
