import { defineNuxtModule, createResolver } from '@nuxt/kit'
import { resolve } from 'pathe'

export default defineNuxtModule({
  setup(options, nuxt) {
    // const { resolve } = createResolver(import.meta.url);

    nuxt.hook('pages:extend', (pages) => {
      pages.push({
        name: 'home',
        path: '/home.html',
        // file: resolve('~/pages/index.vue'),
        // file: '~/pages/index.vue',
        file: resolve(__dirname, './pages/index.vue'),
      });
    });
  }
})
