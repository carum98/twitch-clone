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

const domain = import.meta.env.VITE_DOMAIN_NAME
</script>

<template>
    <section class="carrousel__active">
        <iframe :src="`https://player.twitch.tv/?channel=${stream.channel_name}&parent=${domain}&muted=true`"
            allowfullscreen="true">
        </iframe>
        <div>
            <div class="carrousel__active--info">
                <img :src="stream.channel.thumbnail" />

                <div>
                    <p>{{ stream.channel.name }}</p>
                    <p>{{ stream.channel.game }}</p>

                    <p>{{ formatViews(stream.viewers) }} viewers</p>
                </div>
            </div>

            <TagsList :tags="stream.tags" />

            <p>{{ stream.channel.description }}</p>
        </div>
    </section>
</template>
