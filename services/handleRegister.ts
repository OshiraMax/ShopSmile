import { Alert } from 'react-native';
import { RegisterScreenNavigationProp, Screens } from '../types/navigationTypes';
import SecureStorage from 'react-native-secure-storage';

interface RegisterResponse {
  success: boolean;
  token?: string;
}

const handleRegister = async (email: string, password: string, navigation: RegisterScreenNavigationProp) => {
  try {
    const response = await fetch('http://yourserver.com/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data: RegisterResponse = await response.json();

    if (data.success && data.token) {
      await SecureStorage.setItem('user_token', data.token);
      navigation.navigate(Screens.HomeScreen);
      Alert.alert('Регистрация', `Пользователь ${email} успешно зарегистрирован`);
    } else {
      Alert.alert('Ошибка регистрации', 'Пожалуйста, попробуйте снова.');
    }
  } catch (error) {
    console.error('Ошибка регистрации:', error);
    Alert.alert('Ошибка регистрации', 'Произошла ошибка при регистрации. Пожалуйста, попробуйте снова.');
  }
};