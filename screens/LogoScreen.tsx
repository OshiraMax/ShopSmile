import React, { useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { LogoScreenNavigationProp } from '../types/navigationTypes';
import { initializeApp } from '../initializers/initializeApp';

const LogoScreen = () => {
    const navigation = useNavigation<LogoScreenNavigationProp>();

    useEffect(() => {
      const minLoadingTime = new Promise(resolve => setTimeout(resolve, 3000)); 
      const initialization = initializeApp();

      Promise.all([minLoadingTime, initialization]).then(() => {
        navigation.replace('LoginScreen');
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