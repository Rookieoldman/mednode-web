export const languages = {
  ca: { name: 'Català', flag: 'CA' },
  es: { name: 'Español', flag: 'ES' },
  eu: { name: 'Euskara', flag: 'EU' },
  gl: { name: 'Galego', flag: 'GL' },
} as const;

export const defaultLang = 'es';
export type Lang = keyof typeof languages;

export const langCodes = Object.keys(languages) as Lang[];
