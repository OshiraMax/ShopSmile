import { Dimensions } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { DeviceType } from "../types/settingsTypes";

export const initializeDevice = async() => {
  const { width } = Dimensions.get('window');
  const deviceType = width < 768 ? DeviceType.Mobile : DeviceType.Tablet;
  
  try {
    await AsyncStorage.setItem('deviceType', deviceType);
    console.log("Device type initialized:", deviceType);
  } catch (error) {
    console.error("Failed to initialize device type:", error);
  }
}
