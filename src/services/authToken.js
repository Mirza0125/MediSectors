import AsyncStorage from '@react-native-async-storage/async-storage';

const TOKEN_KEY = 'userAuthToken';

export const saveAuthToken = async token => {
  try {
    await AsyncStorage.setItem(TOKEN_KEY, token);
  } catch (error) {
    throw new Error('Error saving token:', error);
  }
};

export const getAuthToken = async () => {
  try {
    const token = await AsyncStorage.getItem(TOKEN_KEY);
    return token || null;
  } catch (error) {
    throw new Error('Error getting token:', error);
  }
};

export const removeAuthToken = async () => {
  try {
    await AsyncStorage.removeItem(TOKEN_KEY);
  } catch (error) {
    throw new Error('Error removing token:', error);
  }
};
