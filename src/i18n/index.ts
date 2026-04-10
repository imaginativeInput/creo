import { createI18n } from 'vue-i18n'
import pl from './locales/pl'

export const SUPPORTED_LOCALES = ['pl'] as const

export type SupportedLocale = typeof SUPPORTED_LOCALES[number]

const saved = localStorage.getItem('lang')

function isSupportedLocale(value: string | null): value is SupportedLocale {
  return SUPPORTED_LOCALES.includes(value as SupportedLocale)
}

const locale: SupportedLocale = isSupportedLocale(saved) ? saved : 'pl'

export const i18n = createI18n({
  legacy: false,
  locale,
  fallbackLocale: 'pl',
  messages: {
    pl,
  },
})