import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss()
    ]
  },

  runtimeConfig: {
    app: {
      baseURL: process.env.NUXT_APP_BASE_URL || '/',
    },
    public: {
      title: 'example',
      rogramaticDomain: process.env.NUXT_PUBLIC_ROGRAMATIC_DOMAIN,
      apiBase: process.env.NUXT_PUBLIC_API_BASE || '/api',
    }
  },

  modules: ['@nuxt/image'],
})