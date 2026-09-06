<script setup lang="ts">
const config = useRuntimeConfig()

const title = computed(() => config.public.title)

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - ${title.value}` : title.value
  },
})


</script>
<template>
    <main>
        <nav class="border-b border-amber-700 p-4">

            <div class="text-3xl">
                {{ title }}
            </div>
        </nav>
        <slot />
    </main>
</template>