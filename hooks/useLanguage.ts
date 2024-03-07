import { useState, useEffect } from 'react';

import { Translations } from '../types/translationTypes';
import { resources } from '../localization/locales';
import { settingsStore } from '../stores/settingStore';

export const useLanguage = () => {
  const [translations, setTranslations] = useState<Translations>(resources[settingsStore.language]);

  useEffect(() => {
    const updateTranslations = () => {
      setTranslations(resources[settingsStore.language]);
    };
    updateTranslations(); 
  }, [settingsStore.language]); 

  const getTranslationsForScreen = <T extends keyof Translations>(screenName: T): Translations[T] => {
    return translations[screenName];
  };

  return { setLanguage: settingsStore.setLanguage, getTranslationsForScreen };
};
