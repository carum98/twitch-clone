<script setup lang="ts">
import { ref } from 'vue'

const options = [
    {
        header: 'GENERAL',
    },
    {
        title: 'About',
    },
    {
        title: 'Advertisers',
    },
    {
        title: 'Blog',
    },
    {
        title: 'Developers',
    },
    {
        title: 'Download Apps',
    },
    {
        title: 'Gift Card',
    },
    {
        title: 'IGDB',
    },
    {
        title: 'Jobs',
    },
    {
        title: 'Loot Cave - Merch Store',
    },
    {
        title: 'Music on Twitch',
    },
    {
        title: 'Partners',
    },
    {
        title: 'Press',
    },
    {
        title: 'Turbo',
    },
    {
        divider: true,
    },
    {
        header: 'HELP & LEGAL',
    },
    {
        title: 'Accessibility Statement',
    },
    {
        title: 'Ad Choices',
    },
    {
        title: 'Community Guidelines',
    },
]

const show = ref(false)
</script>

<template>
    <section class="dropdown-more">
        <button class="btn-icon" @click="show = !show">
            <span class="material-icons-outlined"> more_vert </span>
        </button>
        <div class="dropdown" :class="{ show }">
            <ul>
                <li v-for="option in options">
                    <h1 v-if="option.hasOwnProperty('header')">
                        {{ option.header }}
                    </h1>
                    <hr v-else-if="option.hasOwnProperty('divider')" />
                    <a v-else>{{ option.title }}</a>
                </li>
            </ul>
        </div>
    </section>
</template>

<style lang="scss">
.dropdown-more {
    position: relative;
}

.dropdown {
    display: none;
    position: absolute;
    z-index: 5;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

    background: #18181b;
    padding: 15px;

    width: 300px;

    ul {
        list-style: none;

        li {
            padding: 10px;
            cursor: pointer;

            h1 {
                color: #adadb8;
            }
            hr {
                border: 0;
                height: 1px;
                background: #333;
            }

            &:hover {
                background: rgba(51, 51, 51, 0.61);
            }
        }
    }

    &.show {
        display: block;
    }
}
</style>
