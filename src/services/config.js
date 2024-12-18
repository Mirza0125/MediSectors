import AsyncStorage from '@react-native-async-storage/async-storage';

// this function will add data to async stronge it accepts key and the value and both are required
export const setAsyncStorageItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error saving data with key "${key}": ${error}`);
  }
};

// this function will return the value from async stronge and it accepts key which is required
export const getAsyncStorageItem = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    }
    return null; // If the key does not exist
  } catch (error) {
    throw new Error(
      `Error getting AsyncStorage value for key ${key}: ${error.message}`,
    );
  }
};

// this function will delete the key from async storage and it accept key which is required
export const removeAsyncStorageItem = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    throw new Error(
      `Error removing AsyncStorage value for key ${key}: ${error.message}`,
    );
  }
};
