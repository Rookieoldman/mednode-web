import { defaultLang, langCodes, type Lang } from './languages';

export async function getTranslations(lang: Lang) {
  const translations = await import(`./${lang}.json`);
  return translations.default;
}

export function getLangFromUrl(url: URL): Lang {
  const [, segment] = url.pathname.split('/');
  if (langCodes.includes(segment as Lang)) {
    return segment as Lang;
  }
  return defaultLang;
}
