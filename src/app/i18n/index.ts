import { createI18n } from 'vue-i18n'
import de from './locales/de.json'
import en from './locales/en.json'
import ro from './locales/ro.json'

type MessageSchema = typeof en
export type SupportedLocale = 'en' | 'ro' | 'de'

export const i18n = createI18n<[MessageSchema], SupportedLocale>({
  legacy: false,
  locale: (localStorage.getItem('locale') as SupportedLocale) || 'en',
  fallbackLocale: 'en',
  messages: { en: en, ro: ro, de: de },
})

export function setLocale(locale: SupportedLocale) {
  console.log(`${setLocale.name}(${locale})`)
  localStorage.setItem('locale', locale)
}
