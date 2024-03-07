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

export type LogoScreenNavigationProp = StackNavigationProp<RootStackParamList, Screens.LogoScreen>;

export type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, Screens.LoginScreen>;

export type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamList, Screens.RegisterScreen>;

export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, Screens.HomeScreen>;

export type CartScreenNavigationProp = StackNavigationProp<RootStackParamList, Screens.CartScreen>;

export type PurchaseResultScreenNavigationProp = StackNavigationProp<RootStackParamList, Screens.PurchaseResultScreen>;

export type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, Screens.ProfileScreen>;

export type OrderHistoryScreenNavigationProp = StackNavigationProp<RootStackParamList, Screens.OrderHistoryScreen>;

export type FeedbackScreenNavigationProp = StackNavigationProp<RootStackParamList, Screens.FeedbackScreen>;

export type AboutServiceScreenNavigationProp = StackNavigationProp<RootStackParamList, Screens.AboutServiceScreen>;

export enum Screens {
  LogoScreen = 'LogoScreen',
  LoginScreen = 'LoginScreen',
  HomeScreen = 'HomeScreen',
  RegisterScreen = 'RegisterScreen',
  CartScreen = 'CartScreen',
  PurchaseResultScreen = 'PurchaseResultScreen',
  ProfileScreen = 'ProfileScreen',
  OrderHistoryScreen = 'OrderHistoryScreen',
  FeedbackScreen = 'FeedbackScreen',
  AboutServiceScreen = 'AboutServiceScreen',
}