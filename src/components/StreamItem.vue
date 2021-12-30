<script lang="ts" setup>
import IStream from '../interfaces/IStream'
import { formatViews } from '../util/helper'
import TagsList from './TagsList.vue'

defineProps({
    stream: {
        type: Object as () => IStream,
        required: true,
    },
})
</script>

<template>
    <a
        class="stream__item"
        :href="`https://www.twitch.tv/${stream.channel_name}`"
        target="_blank">
        <div class="stream__item--thumbnail">
            <span>Live</span>
            <span>{{ formatViews(stream.viewers) }} viewers</span>
            <img :src="stream.thoumbnail" />
        </div>
        <div class="stream__item--info">
            <img :src="stream.channel.thumbnail" />
            <div>
                <p>{{ stream.title }}</p>
                <p>{{ stream.channel.name }}</p>
                <p>{{ stream.channel.game }}</p>
            </div>
        </div>
        <TagsList class="stream__item--tags" :tags="stream.tags" />
    </a>
</template>
