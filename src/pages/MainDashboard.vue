<script setup lang="ts">
import { getStreams } from '../service/streams'

const streams = await getStreams()
</script>

<template>
    <pre>
        {{ streams }}
    </pre>
</template>
