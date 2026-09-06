<script setup lang="ts">
import RevenueFlowLogo from '~/components/custom/RevenueFlowLogo.vue';
import { Button } from '~/components/ui/button'

definePageMeta({
  layout: 'revenueflow',
})

const { brandName } = useBrand()

useHead({
  title: brandName,
})
</script>

<template>
  <div class="
      flex min-h-screen w-full flex-col justify-between
      bg-background
      px-6 py-8
      text-foreground
      sm:px-10
      lg:px-16 lg:py-12
    ">
    <!-- Brand -->
    <header>
      <NuxtLink to="/revenueflow" class="
        inline-flex items-center gap-3
        text-2xl font-bold tracking-tight
        text-primary
        lg:text-4xl
      ">
        <RevenueFlowLogo />
        RevenueFlow
      </NuxtLink>
    </header>

    <!-- Hero -->
    <main class="max-w-3xl">
      <!-- Sand accent -->
      <div class="
          mb-5 inline-flex items-center
          rounded-full
          bg-highlight-100
          px-3 py-1.5
          text-sm font-semibold
          text-highlight-800
        ">
        Find the gaps costing you revenue
      </div>

      <h1 class="
          max-w-2xl
          text-3xl font-semibold tracking-tight
          text-brand-950
          sm:text-4xl
          lg:text-5xl
          lg:leading-tight
        ">
        What happens after a customer contacts your business?
      </h1>

      <!-- Shallow-water accent -->
      <div class="
          my-6 h-1 w-20
          rounded-full
          bg-accent-400
        " />

      <div class="max-w-2xl space-y-2">
        <p class="
            text-base leading-7
            text-ink-muted
            sm:text-lg
            lg:text-xl
          ">
          If you can't answer that confidently, revenue is probably slipping
          through the cracks.
        </p>

        <p class="
            text-base font-medium leading-7
            text-brand-800
            sm:text-lg
            lg:text-xl
          ">
          RevenueFlow helps you fix the gaps.
        </p>
      </div>

      <div class="mt-8 flex items-center gap-4">
        <Button as-child size="lg" class="shadow-sm">
          <NuxtLink to="/revenueflow/dashboard">
            Explore the Demo
          </NuxtLink>
        </Button>

        <span class="text-sm text-muted-foreground">
          No login required
        </span>
      </div>
    </main>

    <!-- Bottom beach palette detail -->
    <footer class="flex items-center gap-1.5">
      <span class="h-1.5 w-10 rounded-full bg-brand-700" />
      <span class="h-1.5 w-8 rounded-full bg-accent-400" />
      <span class="h-1.5 w-6 rounded-full bg-cool-300" />
      <span class="h-1.5 w-4 rounded-full bg-highlight-400" />
    </footer>
  </div>
</template>