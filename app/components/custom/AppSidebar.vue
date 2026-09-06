<script setup lang="ts">
import { Calendar, Gauge, Inbox, Search, Settings } from '@lucide/vue'
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarSeparator
} from '@/components/ui/sidebar'
import RevenueFlowLogo from './RevenueFlowLogo.vue'

const { currentPath } = usePath()

// Menu items.
const items = [
    {
        title: 'Dashboard',
        url: '/dashboard',
        icon: Gauge,
    },
    {
        title: 'Inbox',
        url: '#',
        icon: Inbox,
    },
    {
        title: 'Calendar',
        url: '#',
        icon: Calendar,
    },
    {
        title: 'Search',
        url: '#',
        icon: Search,
    },
    {
        title: 'Settings',
        url: '#',
        icon: Settings,
    },
]

const { brandName } = useBrand()
</script>

<template>
    <Sidebar>
        <SidebarHeader class="text-primary text-lg lg:text-2xl font-bold py-4">
            <NuxtLink to="/revenueflow" class="inline-flex items-center gap-3">
                <RevenueFlowLogo />
                {{ brandName }}
            </NuxtLink>
        </SidebarHeader>
        <SidebarContent>
            <SidebarGroup>
                <!-- <SidebarGroupLabel>Application</SidebarGroupLabel> -->
                <SidebarGroupContent>
                    <SidebarMenu>
                        <SidebarMenuItem v-for="item in items" :key="item.title">
                            <SidebarMenuButton as-child :is-active="item.url.replace('/', '') === currentPath">
                                <a :href="item.url">
                                    <component :is="item.icon" />
                                    <span>{{ item.title }}</span>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
        </SidebarContent>
    </Sidebar>
</template>
