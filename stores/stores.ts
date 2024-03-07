import { settingsStore, SettingsStore } from './settingStore';

export interface Stores {
  settingsStore: SettingsStore;
}

export const stores: Stores = {
  settingsStore
};
