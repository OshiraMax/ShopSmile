import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

import { GoogleSigninButton } from '@react-native-google-signin/google-signin';
import VKLogin from 'react-native-vkontakte-login';

import { LoginScreenNavigationProp, Screens } from '../types/navigationTypes';
import { useLanguage } from '../hooks/useLanguage';
import { clearLanguageSetting } from '../clear';
import { handleLogin } from '../services/handleLogin';

type LoginScreenProps = {
  navigation: LoginScreenNavigationProp;
};

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { getTranslationsForScreen } = useLanguage();
  const translations = getTranslationsForScreen(Screens.LoginScreen);

  const navigateToRegister = () => {
    navigation.navigate(Screens.RegisterScreen); 
  };

  const handleGoogleSignIn = async () => {
    // Логика входа через Google
  };

  const handleVKSignIn = async () => {
    // Логика входа через ВК
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{translations.loginTitle}</Text>
      <TextInput
        placeholder={translations.email}
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
      />
      <TextInput
        placeholder={translations.password}
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={() => handleLogin(email, password, navigation)}>
        <Text>{translations.login}</Text>
      </TouchableOpacity>
      {/* <GoogleSigninButton
        style={styles.googleButton}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={handleGoogleSignIn} /> */}
      <TouchableOpacity style={styles.button} onPress={clearLanguageSetting}>
        <Text>{translations.loginVK}</Text>
      </TouchableOpacity>
      <TouchableOpacity  onPress={navigateToRegister}>
        <Text>{translations.register}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'lightgrey',
    borderRadius: 5,
  },
  googleButton: {
    width: 192,
    height: 48,
    marginTop: 10,
  }
});

export default LoginScreen;