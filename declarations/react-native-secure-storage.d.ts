declare module 'react-native-secure-storage' {
    export interface SecureStorageOptions {
      accessible?: string;
    }
  
    export function setItem(key: string, value: string, options?: SecureStorageOptions): Promise<void>;
    export function getItem(key: string, options?: SecureStorageOptions): Promise<string | null>;
    export function removeItem(key: string, options?: SecureStorageOptions): Promise<void>;
  }
  