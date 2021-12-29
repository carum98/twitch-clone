<script lang="ts">
import { defineComponent } from 'vue'
import { getStreams } from '../service/streams'
import IStream from '../interfaces/IStream'

export default defineComponent({
    name: 'TestComponent',
    data(): { streams: IStream[] } {
        return {
            streams: [],
        }
    },
    mounted() {
        getStreams().then((streams) => {
            this.streams = streams
        })
    },
})
</script>

<template>
    <pre>
		{{ streams }}
	</pre
    >
</template>
