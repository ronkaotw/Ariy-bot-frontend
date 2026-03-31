import en from '@/i18n/locales/en.json'
import zhTw from '@/i18n/locales/zh-tw.json'
import { absoluteUrl } from '@/lib/utils'

export const siteConfig = {
  name: 'Ariy',

  description: {
    en: en.site.description,
    'zh-tw': zhTw.site.description,
  },

  url: process.env.NEXT_PUBLIC_APP_URL,

  og: {
    image: absoluteUrl('/og.jpg'),

    size: {
      width: 1200,
      height: 630,
    },
  },

  app: {
    latestVersion: '1.0.0',
  },

  author: {
    name: 'Dalton Menezes',
    site: 'https://daltonmenezes.com',
  },

  links: {
    twitter: {
      label: 'Twitter',
      username: '@kao821699',
      url: 'https://x.com/kao821699',
    },

    github: {
      label: 'GitHub',
      url: 'https://github.com/ronkaotw/Airy-Bot',
    },
  },
} as const

export type SiteConfig = typeof siteConfig
