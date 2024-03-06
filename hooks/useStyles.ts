import { settingStore } from '../stores/settingStore'; 
import { Theme } from '../types/storeTypes';

export const useTheme = () => {
  const toggleTheme = () => {
    settingStore.setTheme(settingStore.theme === Theme.Light ? Theme.Dark : Theme.Light);
  };

  return {
    theme: settingStore.theme,
    toggleTheme,
    deviceType: settingStore.deviceType,
  };
};