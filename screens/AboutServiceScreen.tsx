import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

import { AboutServiceScreenNavigationProp, Screens } from '../types/navigationTypes';

type AboutServiceScreenProps = {
  navigation: AboutServiceScreenNavigationProp;
};

const AboutServiceScreen: React.FC<AboutServiceScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>About Service Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate(Screens.HomeScreen)}
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

export default AboutServiceScreen;
