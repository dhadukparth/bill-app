import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * Save data to AsyncStorage
 * @param key - Storage key
 * @param value - Data to store (string or object)
 */
export const storeData = async (key: string, value: any): Promise<void> => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
    } catch (error) {
        console.error("Error storing data:", error);
    }
};

/**
 * Retrieve data from AsyncStorage
 * @param key - Storage key
 * @returns Parsed JSON data or null
 */
export const getData = async (key: string): Promise<any | null> => {
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        return jsonValue ? JSON.parse(jsonValue) : null;
    } catch (error) {
        console.error("Error retrieving data:", error);
        return null;
    }
};

/**
 * Remove a specific key from AsyncStorage
 * @param key - Storage key
 */
export const removeData = async (key: string): Promise<void> => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (error) {
        console.error("Error removing data:", error);
    }
};

/**
 * Clear all AsyncStorage data
 */
export const clearStorage = async (): Promise<void> => {
    try {
        await AsyncStorage.clear();
    } catch (error) {
        console.error("Error clearing storage:", error);
    }
};

/**
 * Get all keys stored in AsyncStorage
 * @returns An array of keys
 */
export const getAllKeys = async (): Promise<any> => {
    try {
        return await AsyncStorage.getAllKeys();
    } catch (error) {
        console.error("Error getting all keys:", error);
        return [];
    }
};
