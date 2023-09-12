// https://nuxt.com/docs/api/configuration/nuxt-config
import { routes } from "./seoRoutes.js";
import { resolve } from 'pathe'
// import i18nseoRoute from './i18n-seo-route.js'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/i18n",
    "@nuxtseo/module",
    // i18nseoRoute
  ],
  site: {
    url: "http://localhost:3000",
    logo: "/logo.png",
    name: "Awesome Site",
    description: "Welcome to my awesome site!",
    defaultLocale: "en",
  },
  sitemap: {
    cacheTtl: 5 * 60 * 60 * 1000, // 5 hours
    autoI18n: true
  },
  robots: {
    groups: [
      {
        userAgent: "*",
        allow: "/",
      }
    ]
  },
  i18n: {
    locales: [
      {
        code: 'living_en',
        iso: 'en-US'
      },
      {
        code: 'living_th',
        iso: 'th-TH',
      }
    ],
    // vueI18n: './i18n.config.ts'
  },
  hooks: {
    'pages:extend': (pages) => {
      routes.map((route) => {
        pages.push({
          ...route,
          file: resolve(__dirname, route.file),
        })
      })
    }
  },
})
