import en from './en';
import ru from './ru';
import { Translations } from '../types/translationTypes';
import { Language } from '../types/settingsTypes';

export const resources: { [key in Language]: Translations } = { 
    [Language.English]: en,
    [Language.Russian]: ru,
  };