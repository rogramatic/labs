export function usePath() {
    const route = useRoute()

    const currentPath = computed(() => {
        let segments = route.path.split('/') ?? []

        if (segments.length === 0) {
            return 'dashboard'
        }

        return segments[segments.length - 1] ?? 'dashboard'
    })

    return {
        currentPath
    }
}