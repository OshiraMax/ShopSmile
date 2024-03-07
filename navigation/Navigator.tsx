import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { RootStackParamList, Screens } from '../types/navigationTypes';

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

const Stack = createStackNavigator<RootStackParamList>();

export const Navigator = () => (
  <Stack.Navigator initialRouteName={Screens.LogoScreen} screenOptions={{ headerShown: false }}>
    <Stack.Screen name={Screens.LogoScreen} component={LogoScreen} />
    <Stack.Screen name={Screens.LoginScreen} component={LoginScreen} />
    <Stack.Screen name={Screens.RegisterScreen} component={RegisterScreen} />
    <Stack.Screen name={Screens.HomeScreen} component={HomeScreen} />
    <Stack.Screen name={Screens.CartScreen} component={CartScreen} />
    <Stack.Screen name={Screens.PurchaseResultScreen} component={PurchaseResultScreen} />
    <Stack.Screen name={Screens.ProfileScreen} component={ProfileScreen} />
    <Stack.Screen name={Screens.OrderHistoryScreen} component={OrderHistoryScreen} />
    <Stack.Screen name={Screens.FeedbackScreen} component={FeedbackScreen} />
    <Stack.Screen name={Screens.AboutServiceScreen} component={AboutServiceScreen} />
  </Stack.Navigator>
);