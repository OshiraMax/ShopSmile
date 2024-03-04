import { useState, useEffect } from 'react';
import resources from '../localization/locales';
import { Translations } from '../types/translationTypes';

export const useLanguage = (initialLanguage: string = 'en') => {
  const [language, setLanguage] = useState<string>(initialLanguage);
  const [translations, setTranslations] = useState<Translations>(resources[initialLanguage]);

  useEffect(() => {
    setTranslations(resources[language]);
  }, [language]);

  const getTranslationsForScreen = <T extends keyof Translations>(screenName: T): Translations[T] => {
    return translations[screenName];
  };

  return { setLanguage, getTranslationsForScreen };
};
