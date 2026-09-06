<script setup lang="ts">
definePageMeta({
    layout: 'revenueflow'
})

const {brandName} = useBrand()

useHead({
    title: brandName,
})

</script>

<template>
  <div class="flex flex-col justify-between px-16 py-12 h-screen w-full">
    <div class="text-brand-800 text-3xl lg:text-5xl font-bold">RevenueFlow</div>
    <div>
      <div class="text-highlight-500 text-lg lg:text-3xl font-semibold w-full lg:w-lg py-3">
        What happens after a customer contacts your business?
      </div>
      <div class="text-ink text-md lg:text-xl font-medium">
        If you can't answer that confidently, revenue is probably slipping through the cracks.
      </div>
      <div class="text-ink text-md lg:text-xl font-medium">
        RevenueFlow helps you fix the gaps.
      </div>

      <div>
        <button class="bg-brand text-white hover:bg-brand-hover">
          View details
        </button>
      </div>
    </div>
  </div>
</template>
