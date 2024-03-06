import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Localization from 'expo-localization';

import { settingStore } from '../stores/settingStore';
import { Language } from '../types/storeTypes';

export const initializeLanguage = async () => {
    const locales = Localization.getLocales();
    const systemLanguage = locales[0].languageCode as Language;
    const isSupported = Object.values(Language).includes(systemLanguage);

    const savedLanguage = (isSupported ? systemLanguage : Language.English);
    settingStore.setLanguage(savedLanguage as Language);

    try {  
        await AsyncStorage.setItem('language', savedLanguage);
        console.log("Initialized language:", savedLanguage);
    } catch (error) {
        console.error("Ошибка при инициализации языка:", error);
    }
};
