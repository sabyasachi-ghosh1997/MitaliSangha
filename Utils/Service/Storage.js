import AsyncStorage from '@react-native-async-storage/async-storage';

const USERS_KEY = 'users';

export const getUsers = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(USERS_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error('Error getting users:', e);
    return [];
  }
};

export const addUser = async newUser => {
  try {
    const users = await getUsers();

    // ডুপ্লিকেট চেক: email বা mobile এর উপর
    const duplicate = users.find(
      u => u.email === newUser.email || u.mobile === newUser.mobile,
    );

    if (duplicate) {
      return {success: false, message: 'User already registered'};
    }

    // নতুন ইউজার সেভ করা
    users.push(newUser);
    await AsyncStorage.setItem(USERS_KEY, JSON.stringify(users));

    return {success: true, message: 'User registered successfully'};
  } catch (e) {
    console.error('Error adding user:', e);
    return {success: false, message: 'Error registering user'};
  }
};

export const clearUsers = async () => {
  try {
    await AsyncStorage.removeItem(USERS_KEY);
  } catch (e) {
    console.error('Error clearing users:', e);
  }
};
