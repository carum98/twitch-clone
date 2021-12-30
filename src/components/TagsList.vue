<script lang="ts" setup>
defineProps({
    tags: {
        type: Array as () => ITag[],
        required: true,
    },
})
</script>

<template>
    <div class="tags">
        <button v-for="tag in tags.slice(0, 3)">
            {{ tag.name }}
        </button>
    </div>
</template>

<style lang="scss">
.tags {
    margin-top: 5px;

    button {
        border-radius: 30px;
        padding: 5px 10px;
        background: #323234;
        border: none;
        color: #c1c1c2;
        margin-right: 10px;
    }
}
</style>
