import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

import { FeedbackScreenNavigationProp } from '../types/navigationTypes';

type FeedbackScreenProps = {
  navigation: FeedbackScreenNavigationProp;
};

const FeedbackScreen: React.FC<FeedbackScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Feedback Screen</Text>
      <Button
        title="Go to About Service"
        onPress={() => navigation.navigate('AboutServiceScreen')}
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

export default FeedbackScreen;
