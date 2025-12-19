import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Save a value under a given key.
 * Uses JSON serialization so you can store objects/arrays safely.
 */
export async function saveData(key, value) {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    console.warn('[storage] Failed to save data for key:', key, error);
  }
}

/**
 * Retrieve a value for a given key.
 * Automatically parses JSON; returns null if not found or if parsing fails.
 */
export async function getData(key) {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    if (jsonValue == null) return null;
    return JSON.parse(jsonValue);
  } catch (error) {
    console.warn('[storage] Failed to get data for key:', key, error);
    return null;
  }
}

/**
 * Remove a stored value for a given key.
 */
export async function removeData(key) {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.warn('[storage] Failed to remove data for key:', key, error);
  }
}

// ---------------------------------------------------------------------------
// Example usage: store and retrieve the logged-in user (tenant or landlord)
// ---------------------------------------------------------------------------

const USER_KEY = 'auth:user';

/**
 * Store the currently logged-in user object.
 * call: await saveLoggedInUser({ id, name, role, ... })
 */
export async function saveLoggedInUser(user) {
  await saveData(USER_KEY, user);
}

/**
 * Retrieve the logged-in user on app startup.
 * call: const user = await getLoggedInUser();
 */
export async function getLoggedInUser() {
  return getData(USER_KEY);
}

/**
 * Clear the stored logged-in user, e.g. on logout.
 */
export async function clearLoggedInUser() {
  await removeData(USER_KEY);
}


