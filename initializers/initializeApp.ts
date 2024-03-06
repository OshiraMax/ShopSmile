import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeTheme } from './initializeTheme';
import { initializeDevice } from './initializeDevice';
import { initializeLanguage } from './initializeLanguage';

const initializeOnFirstLaunch = async (): Promise<void> => {
  const isFirstLaunch = await AsyncStorage.getItem('isFirstLaunch');
  if (!isFirstLaunch) {
    await initializeTheme();
    await initializeDevice();
    await initializeLanguage();
    await AsyncStorage.setItem('isFirstLaunch', 'false');
  }
};

const initializeOnEveryLaunch = async (): Promise<void> => {

};

export const initializeApp = async (): Promise<void> => {
  await initializeOnFirstLaunch();
  await initializeOnEveryLaunch(); 
};