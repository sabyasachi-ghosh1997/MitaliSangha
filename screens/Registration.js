import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import InputTextField from '../Common/InputTextField';
import {Colors} from '../Utils/Constants';
import {MaterialIcons} from '@react-native-vector-icons/material-icons';
import {addUser} from '../Utils/Service/Storage';
import {useNavigation} from '@react-navigation/native';
import {Dropdown} from 'react-native-element-dropdown';

const Registration = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigation = useNavigation();

  handelSubmit = async () => {
    if (!name || !mobile || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'All fields are required');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Check', 'Password do not match');
      return;
    }

    const newUser = {name, mobile, email, address, password};

    const result = await addUser(newUser);

    if (result.success) {
      Alert.alert('Success', result.message, [
        {
          text: 'OK',
          onPress: () => {
            // Navigate to Login screen after registration
            navigation.navigate('LoginScreen'); // Make sure you have a screen named 'Login' in your stack
          },
        },
      ]);
      // ফর্ম clear
      setName('');
      setMobile('');
      setEmail('');
      setAddress('');
      setPassword('');
      setConfirmPassword('');
    } else {
      Alert.alert('Error', result.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="#1cb3ffff" // Background color of status bar
        barStyle="dark-content" // Icon color: 'dark-content' or 'light-content'
      />
      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* Yellow Header */}
        <View style={styles.header}>
          <Text style={styles.helloText}>Join Our Club</Text>
          <Text style={styles.welcomeText}>Create Account</Text>
        </View>

        {/* White Card */}
        <View style={styles.card}>
          <Text style={styles.loginTitle}>Personal Info</Text>

          <InputTextField
            label="Name"
            value={name}
            onChangeText={setName}
            placeholder="Your full name"
          />

          <InputTextField
            label="Mobile"
            value={mobile}
            onChangeText={setMobile}
            placeholder="Your mobile number"
          />
          <InputTextField
            label="Email"
            value={email}
            onChangeText={setEmail}
            placeholder="Your email address"
          />
          <InputTextField
            label="Address"
            value={address}
            onChangeText={setAddress}
            placeholder="Your permanent address"
          />
          <InputTextField
            label="Password"
            value={password}
            onChangeText={setPassword}
            placeholder="******"
          />

          {/* Email Input */}
          <InputTextField
            label="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="******"
          />

          {/* <Text style={styles.label}>Selected: {roleData}</Text>
          <Dropdown
            style={{
              height: 50,
              borderColor: 'gray',
              borderWidth: 0.5,
              borderRadius: 8,
              paddingHorizontal: 8,
            }}
            data={role}
            labelField="label"
            valueField="value"
            placeholder="Select item"
            value={roleData}
            onChange={item => SetRoleData(item.value)}
          /> */}
          {/* Save Password & Forgot */}

          {/* Login Button */}

          {/* Create Account */}
          {/* <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
            <Text style={styles.createText}>Create New Account</Text>
          </TouchableOpacity> */}
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.loginBtn} onPress={handelSubmit}>
        <Text style={styles.loginBtnText}>Login Account</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f5ef', // light background
  },
  scrollView: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: Colors.primary,
    paddingVertical: 50,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    alignItems: 'center',
  },
  helloText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
  },
  welcomeText: {
    fontSize: 18,
    color: '#000',
  },
  card: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginTop: -40,
    borderRadius: 20,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 3},
    shadowRadius: 6,
    elevation: 5,
    marginBottom: 10,
  },
  loginTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  subText: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 13,
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 5,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    color: '#333',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  saveText: {
    fontSize: 14,
  },
  forgotText: {
    fontSize: 14,
    color: '#007bff',
  },
  loginBtn: {
    backgroundColor: Colors.submitBtn,
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 10,
  },
  loginBtnText: {
    color: '#efefeff5',
    fontSize: 16,
    fontWeight: 'bold',
  },
  createText: {
    textAlign: 'center',
    marginTop: 15,
    color: '#000',
    fontWeight: '600',
  },
});

export default Registration;
