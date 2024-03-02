import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LogoScreen from '../screens/LogoScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import PurchaseResultScreen from '../screens/PurchaseResultScreen';
import ProfileScreen from '../screens/ProfileScreen';
import OrderHistoryScreen from '../screens/OrderHistoryScreen';
import FeedbackScreen from '../screens/FeedbackScreen';
import AboutServiceScreen from '../screens/AboutServiceScreen';

const Stack = createStackNavigator();

export const Navigator = () => (
  <Stack.Navigator initialRouteName="LogoScreen" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="LogoScreen" component={LogoScreen} />
    <Stack.Screen name="LoginScreen" component={LoginScreen} />
    <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="CartScreen" component={CartScreen} />
    <Stack.Screen name="PurchaseResultScreen" component={PurchaseResultScreen} />
    <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    <Stack.Screen name="OrderHistoryScreen" component={OrderHistoryScreen} />
    <Stack.Screen name="FeedbackScreen" component={FeedbackScreen} />
    <Stack.Screen name="AboutServiceScreen" component={AboutServiceScreen} />
  </Stack.Navigator>
);