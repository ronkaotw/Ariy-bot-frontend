/**
 * This file contains the configuration for the documentation
 * to be used by files like:
 * - src/components/command-menu.tsx
 * - src/components/mobile-nav.tsx
 * - src/app/[locale]/docs/layout.tsx
 * - src/lib/opendocs/components/docs/pager.tsx
 */

import type { DocsConfig } from '@/lib/opendocs/types/docs'

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      href: '/docs',

      title: {
        en: 'Documentation',
        'zh-tw': '文件',
      },
    },
  ],

  sidebarNav: [
    {
      title: {
        en: 'Airy Bot Guide',
        'zh-tw': 'Airy Bot 指南',
      },

      items: [
        {
          href: '/docs',

          title: {
            en: 'Overview',
            'zh-tw': '總覽',
          },

          items: [],
        },
      ],
    },

    {
      title: {
        en: 'Commands',
        'zh-tw': '指令',
      },

      items: [
        {
          href: '/docs/commands/start',

          title: {
            en: '/start',
            'zh-tw': '/start',
          },

          items: [],
        },

        {
          href: '/docs/commands/airport',

          title: {
            en: '/airport',
            'zh-tw': '/airport',
          },

          items: [],
        },

        {
          href: '/docs/commands/metar',

          title: {
            en: '/metar',
            'zh-tw': '/metar',
          },

          items: [],
        },

        {
          href: '/docs/commands/taf',

          title: {
            en: '/taf',
            'zh-tw': '/taf',
          },

          items: [],
        },

        {
          href: '/docs/commands/airmet',

          title: {
            en: '/airmet',
            'zh-tw': '/airmet',
          },

          items: [],
        },
      ],
    },
  ],
} as const
