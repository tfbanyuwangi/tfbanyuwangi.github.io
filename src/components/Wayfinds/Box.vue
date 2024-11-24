<script setup>
defineProps({
    color: {
        type: String,
        default: 'primary',
    },
})
</script>

<template>
    <div :class="{
        'bg-primary': color === 'primary',
        'bg-secondary': color === 'secondary',
        'bg-black': color === 'black',
    }" class="p-2 md:p-4 aspect-square max-w-sm flex items-center justify-center max-h-24">
        <slot />
    </div>
</template>