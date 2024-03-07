import { Appearance } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { settingsStore } from '../stores/settingStore';
import { Theme } from '../types/settingsTypes';

export const initializeTheme = async() => {
  const colorScheme = Appearance.getColorScheme();
  let theme = Theme.Light;

  if (colorScheme) {
    theme = colorScheme === 'dark' ? Theme.Dark : Theme.Light;
    settingsStore.setTheme(theme);
  }

  try {
    await AsyncStorage.setItem('theme', theme);
    console.log("Theme initialized and saved:", theme);
  } catch (error) {
    console.error("Failed to save theme:", error);
  }
}
