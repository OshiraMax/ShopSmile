import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

import { OrderHistoryScreenNavigationProp, Screens } from '../types/navigationTypes';

type OrderHistoryScreenProps = {
  navigation: OrderHistoryScreenNavigationProp;
};

const OrderHistoryScreen: React.FC<OrderHistoryScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Order History Screen</Text>
      <Button
        title="Go to Feedback"
        onPress={() => navigation.navigate(Screens.FeedbackScreen)}
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

export default OrderHistoryScreen;
