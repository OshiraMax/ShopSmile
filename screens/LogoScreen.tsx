import React, { useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import SecureStorage from 'react-native-secure-storage';

import { LogoScreenNavigationProp, Screens } from '../types/navigationTypes';
import { initializeApp } from '../initializers/initializeApp';


const LogoScreen = () => {
    const navigation = useNavigation<LogoScreenNavigationProp>();

    useEffect(() => {
      const checkToken = async () => {
        const token = await SecureStorage.getItem('user_token');
        return token ? Screens.HomeScreen : Screens.LoginScreen;
      };

      const minLoadingTime = new Promise(resolve => setTimeout(resolve, 3000)); 
      const initialization = initializeApp();
      const tokenCheck = checkToken();

      Promise.all([minLoadingTime, initialization, tokenCheck]).then((values) => {
        const nextScreen = values[2];
        navigation.replace(nextScreen);
      });
    }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/splash.webp')} 
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A8D5BA', 
  },
  logo: {
    width: 200, 
    height: 200, 
  }
});

export default LogoScreen;