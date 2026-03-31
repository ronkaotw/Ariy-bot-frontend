import type { Locales, LocalizedRecord } from '@/lib/opendocs/types/i18n'

export const defaultLocale = 'zh-tw' as const

export const locale = {
  'zh-tw': defaultLocale,
  en: 'en',
} as const

export const labels = {
  [defaultLocale]: '繁體中文',
  en: 'English',
} as const

export const dateLocales: LocalizedRecord = {
  'zh-tw': 'zh-TW',
  en: 'en-US',
} as const

export const locales = Object.values(locale) as Locales
