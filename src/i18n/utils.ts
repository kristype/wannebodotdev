import { translations, type Locale, type TranslationKey } from './translations';
export type { Locale };

export function t(lang: Locale, key: TranslationKey): string {
  return translations[lang][key] ?? translations.en[key] ?? key;
}

export function getLocalePath(lang: Locale, path: string): string {
  const cleanPath = path === '/' ? '' : path;
  if (lang === 'no') {
    return cleanPath || '/';
  }
  return `/${lang}${cleanPath}` || `/${lang}`;
}

export function getLangFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split('/');
  if (lang in translations) {
    return lang as Locale;
  }
  return 'no';
}

export const locales: Locale[] = ['no', 'en', 'fr'];
