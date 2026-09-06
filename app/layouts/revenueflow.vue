<script setup lang="ts">
import '~/assets/css/revenueflow.css'
import TopNav from '~/components/custom/TopNav.vue';
import AppSidebar from '@/components/custom/AppSidebar.vue'
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar'


const route = useRoute();

const isIndex = computed(
    () => route.path.replace(/\/+$/, '') === '/revenueflow'
)
</script>

<template>
    <SidebarProvider class="revenueflow-theme">
        <AppSidebar v-if="!isIndex" />
        <SidebarInset>
            <main class="relative min-h-screen overflow-hidden">
                <!-- Faded background -->
                <div class="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
                    style="background-image: url('/images/revenueflow/background.jpg')" />

                <!-- <div class="relative z-10 mx-auto min-h-screen min-h-screen bg-surface-soft text-ink" :class="{
                    'max-w-7xl': isIndex,
                    'w-full': !isIndex
                }"> -->
                <div class="
                    mx-auto min-h-screen
                    bg-background/95
                    shadow-2xl
                    backdrop-blur-sm
                " :class="{
                    'max-w-7xl': isIndex,
                    'w-full': !isIndex
                }">
                    <TopNav v-if="!isIndex" />
                    <slot />
                </div>
            </main>
        </SidebarInset>
    </SidebarProvider>
</template>