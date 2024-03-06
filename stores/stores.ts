import { settingStore, SettingStore } from './settingStore';

export interface Stores {
  settingStore: SettingStore;
}

export const stores: Stores = {
  settingStore
};
