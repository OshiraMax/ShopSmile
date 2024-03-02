import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  LogoScreen: undefined;
  LoginScreen: undefined;
  RegisterScreen: undefined;
  HomeScreen: undefined; 
  CartScreen: undefined; 
  PurchaseResultScreen: undefined; 
  ProfileScreen: undefined; 
  OrderHistoryScreen: undefined; 
  FeedbackScreen: undefined; 
  AboutServiceScreen: undefined; 
};

export type LogoScreenNavigationProp = StackNavigationProp<RootStackParamList, 'LogoScreen'>;

export type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'LoginScreen'>;

export type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamList, 'RegisterScreen'>;

export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'HomeScreen'>;

export type CartScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CartScreen'>;

export type PurchaseResultScreenNavigationProp = StackNavigationProp<RootStackParamList, 'PurchaseResultScreen'>;

export type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ProfileScreen'>;

export type OrderHistoryScreenNavigationProp = StackNavigationProp<RootStackParamList, 'OrderHistoryScreen'>;

export type FeedbackScreenNavigationProp = StackNavigationProp<RootStackParamList, 'FeedbackScreen'>;

export type AboutServiceScreenNavigationProp = StackNavigationProp<RootStackParamList, 'AboutServiceScreen'>;