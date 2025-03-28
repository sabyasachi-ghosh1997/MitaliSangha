import {View, Text, Alert} from 'react-native';
import Select from './Select';
import React, {useState} from 'react';
import ImagesFile from './Images';
import Btn from './Btn';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  ScrollView,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Login = props => {
  const [phoneno, setPhoneno] = useState('');
  const [mail, setMail] = useState('');
  const [role, setRole] = useState('');
  const [user, setUser] = useState(null);

  const handleSubmit = async () => {
    try {
      console.log('Attempting to login with:', {mail, phoneno});
      const userData = await AsyncStorage.getItem(mail);

      console.log('Retrieved User Data:', userData);

      if (!userData) {
        Alert.alert('Error', 'User not found. Please register.');
        return;
      }

      const user = JSON.parse(userData);
      if (user.phoneno === phoneno && user.role === role) {
        setUser(user);

        Alert.alert('Successfull Login');

        console.log('Retrieved User Name:', user.username);
        console.log('Retrieved User :', user);

        props.navigation.navigate('Dashboard', {
          user: userData,
        });
      } else {
        Alert.alert('Error', 'Invalid Email or Phone No or Role');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to login. Please try again.');
    }
  };

  const handleSelectItem = items => {
    setRole(items.label);
  };

  const [radio, setRadio] = useState(1);
  return (
    <ImageBackground
      source={require('./pic4.0.png')}
      style={{
        flex: 1,
        // justifyContent: 'center',

        height: '100%',
      }}>
      <View style={styles.Header}>
        <Text style={styles.HeaderText}>Login</Text>
      </View>

      <ScrollView nestedScrollEnabled={true}>
        <View style={styles.ViewStyle}>
          <ImagesFile />
          <Text
            style={{
              textAlign: 'center',
              fontSize: 40,
              color: 'white',
              fontWeight: 'bold',
            }}>
            Welcome Back
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              color: 'white',
              marginVertical: 10,
              marginBottom: 35,
            }}>
            Login To Your Account{' '}
          </Text>
          <Select selectFn={handleSelectItem} />

          <TextInput
            style={styles.TextInput}
            placeholder="Enter Your Phone No :"
            value={phoneno}
            onChangeText={setPhoneno}
            placeholderTextColor="black"
            keyboardType="phone-pad"
            maxLength={10}></TextInput>
          <TextInput
            style={styles.TextInput}
            placeholder="Enter Your Email :"
            value={mail}
            onChangeText={setMail}
            placeholderTextColor="black"></TextInput>
          <View
            style={{
              alignItems: 'flex-start',
              paddingBottom: 10,
              paddingRight: 170,
            }}></View>
          <View style={{marginTop: 60}}>
            <Btn
              bgColor="yellow"
              textColor="black"
              btnLabel="Login"
              Press={() => handleSubmit()}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginVertical: 20,
              marginTop: -20,
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                paddingRight: 10,
                color: 'white',
              }}>
              Don't have an account ?
            </Text>

            <TouchableOpacity
              onPress={() => props.navigation.navigate('Registration')}>
              <Text
                style={{
                  fontSize: 20,
                  color: '#EE4B2B',
                  fontWeight: 'bold',
                }}>
                "Registration"
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  TextInput: {
    color: '#007BFF',
    width: '100%',
    height: 50,
    borderBottomWidth: 2,
    fontSize: 18,
    paddingHorizontal: 10,
    marginBottom: 2,
    borderRadius: 8,
    marginTop: 35,
    backgroundColor: 'white',
  },
  Header: {
    height: 60,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  HeaderText: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  Text: {
    fontSize: 25,
  },

  ViewStyle: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'rgba(34, 7, 7, 0.7)',
    padding: 20,
    height: 780,
  },
  Radio: {
    height: 22,
    width: 22,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 20,
    margin: 8,
  },
  RadioWraper: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  Radiobg: {
    backgroundColor: '#007BFF',
    height: 14,
    width: 14,
    borderRadius: 7,
    margin: 1.7,
  },
});

export default Login;
