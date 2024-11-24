<script setup>
import { lines } from "../../data"
import Line from "./Line.vue"

const props = defineProps({
    served: {
        type: Array,
        required: true,
    },
})

const servedLines = lines.filter(line => props.served.includes(line.id))
</script>
<template>
    <div class="col-span-3 grid grid-cols-3 md:grid-cols-4 gap-6">
        <Line v-for="(line, i) in servedLines" :key="i" :line="line" />
    </div>
</template>