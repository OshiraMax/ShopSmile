import { settingsStore } from '../stores/settingStore'; 
import { Theme } from '../types/settingsTypes';

export const useTheme = () => {
  const toggleTheme = () => {
    settingsStore.setTheme(settingsStore.theme === Theme.Light ? Theme.Dark : Theme.Light);
  };

  return {
    theme: settingsStore.theme,
    toggleTheme,
    deviceType: settingsStore.deviceType,
  };
};