export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig(event)

    return sendRedirect(
        event,
        config.public.rogramaticDomain,
        301
    )
})