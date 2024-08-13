import { defineConfig } from 'astro/config'
import react from '@astrojs/react'

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: 'he',
    locales: ['he', 'en'],
  },

  integrations: [react(), tailwind()],
})
