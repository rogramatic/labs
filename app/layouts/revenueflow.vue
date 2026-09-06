<script setup lang="ts">
import '~/assets/css/revenueflow.css'

const { brandName } = useBrand()

const user = true
</script>

<template>
    <main class="relative min-h-screen overflow-hidden">
        <!-- Faded background -->
        <!-- <div
            class="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
            style="background-image: url('/images/revenueflow/background.jpg')"
        /> -->

        <!-- Content -->
        <div
            class="relative z-10 max-w-7xl mx-auto min-h-screen revenueflow-theme min-h-screen bg-surface-soft text-ink"
        >
            <slot />
        </div>
    </main>
</template>