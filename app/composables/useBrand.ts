// composables/useBrand.ts

export function useBrand() {
    const route = useRoute()

    const brands: Record<string, string> = {
        revenueflow: 'RevenueFlow',
        settle: 'Settle',
        resolve: 'Resolve',
    }

    const brandName = computed(() => {
        const segment = route.path.split('/').filter(Boolean)[0] ?? 'revenueflow';

        return brands[segment] ?? 'Rogramatic Labs'
    })

    return {
        brandName,
    }
}