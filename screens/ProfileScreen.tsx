import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

import { ProfileScreenNavigationProp, Screens } from '../types/navigationTypes';

type ProfileScreenProps = {
  navigation: ProfileScreenNavigationProp;
};

const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      <Button
        title="Go to Order History"
        onPress={() => navigation.navigate(Screens.OrderHistoryScreen)}
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

export default ProfileScreen;