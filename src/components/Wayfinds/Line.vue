<script setup>
defineProps({
    line: {
        type: Object,
        required: true,
    },
})
</script>

<template>
    <div class="text-lg aspect-square min-w-12 md:min-w-16 md:text-xl lg:text-2xl px-1 rounded-full flex items-center justify-center" :style="{
        background: line.color,
    }">
        <p class="text-white font-bold p-2 rounded-lg">{{ line.id }}</p>
    </div>
</template>