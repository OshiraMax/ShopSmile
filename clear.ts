import AsyncStorage from "@react-native-async-storage/async-storage";

export const clearLanguageSetting = async () => {
    try {
      await AsyncStorage.removeItem('isFirstLaunch');
    } catch (error) {
      console.error("Ошибка при удалении:", error);
    }
  };