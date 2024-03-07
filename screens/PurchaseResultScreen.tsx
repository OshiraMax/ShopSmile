import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { PurchaseResultScreenNavigationProp, Screens } from '../types/navigationTypes';

type PurchaseResultScreenProps = {
  navigation: PurchaseResultScreenNavigationProp;
};

const PurchaseResultScreen: React.FC<PurchaseResultScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Purchase Result Screen</Text>
      <Button
        title="Go to Profile Screen"
        onPress={() => navigation.navigate(Screens.ProfileScreen)}
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

export default PurchaseResultScreen;
