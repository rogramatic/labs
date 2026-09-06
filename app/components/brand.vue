<script setup lang="ts">
import { ChartNoAxesColumn } from '@lucide/vue';

const props = defineProps({
    title: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="flex flex-row">
        <ChartNoAxesColumn />
        <span class="text-base font-semibold tracking-tight">{{ title }}</span>
    </div>
</template>