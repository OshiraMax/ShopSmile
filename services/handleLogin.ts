import SecureStorage from 'react-native-secure-storage';

import { LoginScreenNavigationProp, Screens } from '../types/navigationTypes';

interface LoginResponse {
    access_token: string;
}

export const handleLogin = async (email: string, password: string, navigation: LoginScreenNavigationProp): Promise<void> => {
    try {
      const response = await fetch('http://yourserver.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
  
      const data: LoginResponse = await response.json();
  
      if (data.access_token) {
        console.log('Успешный вход', data);
        await storeToken(data.access_token);
        navigation.replace(Screens.HomeScreen);
      } else {
        console.log('Ошибка аутентификации');
      }
    } catch (error) {
      console.error('Ошибка входа', error);
    }
  };
  
  const storeToken = async (token: string) => {
    try {
        await SecureStorage.setItem('user_token', token, {accessible: "AccessibleWhenUnlocked"});
    } catch (error) {
        console.error('Ошибка сохранения токена', error);
    }
  };