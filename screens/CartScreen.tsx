import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import { CartScreenNavigationProp, Screens } from '../types/navigationTypes';

type CartScreenProps = {
  navigation: CartScreenNavigationProp;
};

const CartScreen: React.FC<CartScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Это ваша корзина</Text>
      <Button
        title="Перейти к результатам покупки"
        onPress={() => navigation.navigate(Screens.PurchaseResultScreen)}
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
  text: {
    marginBottom: 20,
  },
});

export default CartScreen;