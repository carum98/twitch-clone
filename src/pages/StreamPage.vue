<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { fetchStream } from '../store/fetchData'
import TagsList from '../components/TagsList.vue'
import { formatViews } from '../util/helper'
import { ref, watch } from 'vue'
import IStream from '../interfaces/IStream'

const route = useRoute()
const stream = ref<IStream>({} as IStream)

stream.value = await fetchStream(route.params.name as string)

watch(
    () => route.params.name,
    async (newId) => {
        stream.value = await fetchStream(newId as string)
    }
)
</script>

<template>
    <section class="stream-page">
        <div class="stream-page__content">
            <iframe
                id="stream_player"
                :src="`https://player.twitch.tv/?channel=${route.params.name}&parent=localhost&muted=true`"
                allowfullscreen="true">
            </iframe>

            <section class="stream-page__header">
                <div class="stream-page__img">
                    <img :src="stream.channel.thumbnail" />
                    <span>LIVE</span>
                </div>

                <div class="stream-page__info">
                    <h2 class="stream-page__info--name">
                        {{ stream.channel.name }}
                    </h2>
                    <p class="stream-page__info--title">{{ stream.title }}</p>

                    <span class="stream-page__info--game">
                        {{ stream.channel.game }}
                    </span>
                    <TagsList style="display: inline" :tags="stream.tags" />
                </div>

                <div class="stream-page__actions">
                    <div>
                        <button class="btn-follow">
                            <span class="material-icons-outlined">
                                favorite_border
                            </span>
                            Follow
                        </button>

                        <button class="btn-suscribe">
                            <span class="material-icons-outlined"> grade </span>
                            Suscribe
                            <span class="material-icons-outlined">
                                keyboard_arrow_down
                            </span>
                        </button>
                    </div>

                    <div>
                        <span class="viewers">
                            {{ formatViews(stream.viewers) }} viewers
                        </span>
                        <button class="btn-icon">
                            <span class="material-icons-outlined">
                                file_upload
                            </span>
                        </button>
                        <button class="btn-icon">
                            <span class="material-icons-outlined">
                                more_vert
                            </span>
                        </button>
                    </div>
                </div>
            </section>

            <section class="stream-page__about">
                <h1>About {{ stream.channel_name }}</h1>
                <p>{{ stream.channel.description }}</p>
            </section>
        </div>

        <iframe
            id="chat_embed"
            :src="`https://www.twitch.tv/embed/${route.params.name}/chat?darkpopout&parent=localhost`"
            height="500"
            width="350">
        </iframe>
    </section>
</template>
