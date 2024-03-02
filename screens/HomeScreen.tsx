import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import { HomeScreenNavigationProp } from '../navigation/types';

type HomeScreenProps = {
    navigation: HomeScreenNavigationProp;
  };

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Домашний экран</Text>
      <Button
        title="Перейти в корзину"
        onPress={() => navigation.navigate('CartScreen')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;