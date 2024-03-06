import { useState, useEffect } from 'react';

import { Translations } from '../types/translationTypes';
import { resources } from '../localization/locales';
import { settingStore } from '../stores/settingStore';

export const useLanguage = () => {
  const [translations, setTranslations] = useState<Translations>(resources[settingStore.language]);

  useEffect(() => {
    const updateTranslations = () => {
      setTranslations(resources[settingStore.language]);
    };
    updateTranslations(); 
  }, [settingStore.language]); 

  const getTranslationsForScreen = <T extends keyof Translations>(screenName: T): Translations[T] => {
    return translations[screenName];
  };

  return { setLanguage: settingStore.setLanguage, getTranslationsForScreen };
};
