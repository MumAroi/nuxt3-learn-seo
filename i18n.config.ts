export default defineI18nConfig(() => ({
  legacy: false,
  locale:"living_th",
  globalInjection: true,
  fallbackLocale: 'living_en',
  warnHtmlInMessage: "off",
  messages: {
    living_en: {
      welcome: "Welcome"
    },
    living_th: {
      welcome: "สว"
    }
  },
}))
