import { makeAutoObservable } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { DeviceType, Theme, Language } from "../types/settingsTypes";

export class SettingsStore {
  theme: Theme = Theme.Light;
  deviceType: DeviceType = DeviceType.Mobile;
  language: Language = Language.English;

  setTheme(newTheme: Theme) {
    this.theme = newTheme;
  }

  setDeviceType(newDeviceType: DeviceType) {
    this.deviceType = newDeviceType;
  }

  setLanguage(newLanguage: Language) {
    this.language = newLanguage;
  }

  constructor() {
    makeAutoObservable(this);
    this.initializeSettings();
  }

  async initializeSettings() {
    const theme = await AsyncStorage.getItem('theme');
    if (theme) {
      this.setTheme(theme as Theme);
    }

    const deviceType = await AsyncStorage.getItem('deviceType');
    if (deviceType) {
      this.setDeviceType(deviceType as DeviceType);
    }

    const savedLanguage = await AsyncStorage.getItem('language');
    if (savedLanguage) {
      this.setLanguage(savedLanguage as Language);
    }
  }
}

export const settingsStore = new SettingsStore();