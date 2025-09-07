import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';
import {Colors} from '../Utils/Constants';
import {Dropdown} from 'react-native-element-dropdown';
import {useNavigation} from '@react-navigation/native';

const role = [
  {label: 'Admin', value: '1'},
  {label: 'Member', value: '2'},
  {label: 'User', value: '3'},
];
export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [savePassword, setSavePassword] = useState(false);
  const [roleData, SetRoleData] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="#1cb3ffff" // Background color of status bar
        barStyle="dark-content" // Icon color: 'dark-content' or 'light-content'
      />
      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* Yellow Header */}
        <View style={styles.header}>
          <Text style={styles.helloText}>Hello</Text>
          <Text style={styles.welcomeText}>Welcome Back!</Text>
        </View>

        {/* White Card */}
        <View style={styles.card}>
          <Text style={styles.loginTitle}>Login Account</Text>
          <Text style={styles.subText}>
            Sign in to access our club community, events, and member benefits.
          </Text>

          {/* Email Input */}
          <Text style={styles.label}>Email Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Your Email Address"
            placeholderTextColor="#999999"
            value={email}
            onChangeText={setEmail}
          />

          {/* Password Input */}
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="#999999"
            placeholder="***********"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <Text style={styles.label}>Selected: {roleData}</Text>
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
          />
          {/* Save Password & Forgot */}
          <View style={styles.row}>
            <View style={styles.row}>
              {/* <CheckBox
                value={savePassword}
                onValueChange={setSavePassword}
                tintColors={{true: '#ffb81c', false: 'gray'}} // custom colors
              /> */}
              <Text style={styles.saveText}> Save Password</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.forgotText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>

          {/* Login Button */}
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginBtnText}>Login Account</Text>
          </TouchableOpacity>

          {/* Create Account */}
          <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
            <Text style={styles.createText}>Create New Account</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

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
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 3},
    shadowRadius: 6,
    elevation: 5,
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
