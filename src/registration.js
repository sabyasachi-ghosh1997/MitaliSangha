import React from 'react';
import {RadioButton} from 'react-native-radio-buttons-group';
import Btn from './Btn';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import localimage from '../src/pic1.png';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Select from './Select';
import {useState} from 'react';

const Registration = props => {
  const [username, setUsername] = useState('');
  const [phoneno, setPhoneno] = useState('');
  const [mail, setMail] = useState('');
  const [gender, setGender] = useState('');
  const [nameError, setNameError] = useState('');
  const [roleError, setRoleError] = useState('');
  const [mailError, setMailError] = useState('');
  const [phonenoError, setPhonenoError] = useState('');
  const [datePickerVisibility, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState('Date Of Birth');
  const [role, setRole] = useState('');
  const [address, setAddress] = useState('');
  const [addressError, setAddressError] = useState('');

  const [selectImage, setSelectedImage] = useState(localimage);

  const handelPress = () => {
    Alert.alert(
      'choose an option',
      'do you want to take a photo or choose from gallery ?',
      [
        {
          text: 'Choose from Gallery',
          onPress: handelGalleryOpen,
        },
        {
          text: 'Take Pic',
          onPress: handelCameraOpen,
        },
        {
          text: 'Cancel',
        },
      ],
      {cancelable: true},
    );
  };

  const handelCameraOpen = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.error) {
        console.log('Camera Error: ', response.error);
      } else if (response.assets && response.assets.length > 0) {
        const imageUri = response.assets?.[0]?.uri;
        if (typeof imageUri === 'string') {
          setSelectedImage({uri: imageUri});
        }
        setSelectedImage(imageUri);
        console.log(imageUri);
      }
    });
  };

  const handelGalleryOpen = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
      }
    });
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    hideDatePicker();
    setSelectedDate(date.toDateString());
  };

  const handleSubmit = async () => {
    // Validation logic (unchanged)
    setRoleError(false);
    if (role.length == 0) {
      setRoleError(true);
    }

    setNameError(false);
    if (username.length == 0) {
      setNameError(true);
    }

    setPhonenoError(false);
    if (phoneno.length > 10 || phoneno.length < 10) {
      setPhonenoError(true);
    } else if (phoneno.length == 10) {
      setPhonenoError(false);
    }

    setMailError(false);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple regex for email validation
    if (!emailRegex.test(mail)) {
      setMailError(true);
    } else {
      setMailError(false);
    }

    setAddressError(false);
    if (address.length == 0) {
      setAddressError(true);
    }

    if (
      !role ||
      !username ||
      phoneno.length !== 10 ||
      !emailRegex.test(mail) ||
      !address
    ) {
      return false;
    }

    try {
      const keys = await AsyncStorage.getAllKeys(); // Get all keys from AsyncStorage
      const data = await AsyncStorage.multiGet(keys); // Get all key-value pairs

      let emailExists = false;
      let phoneExists = false;

      data.forEach(([key, value]) => {
        const userData = JSON.parse(value);
        if (userData.mail === mail) {
          emailExists = true;
        }
        if (userData.phoneno === phoneno) {
          phoneExists = true;
        }
      });

      if (emailExists) {
        Alert.alert('Error', 'This email is already registered.');
        return;
      }

      if (phoneExists) {
        Alert.alert('Error', 'This phone number is already registered.');
        return;
      }

      // If email and phone number are unique, proceed with registration
      const formattedDate = new Date(selectedDate);
      const day = formattedDate.getDate().toString().padStart(2, '0');
      const month = (formattedDate.getMonth() + 1).toString().padStart(2, '0');
      const year = formattedDate.getFullYear();

      const userData = {
        mail,
        phoneno,
        username,
        role,
        selectImage,
        address,
        selectedDate,
        gender,
      };
      await AsyncStorage.setItem(mail, JSON.stringify(userData));
      Alert.alert('Success', 'Registration successful!');
      console.log('User Data', userData);

      // Reset form fields (unchanged)
      setRoleError('');
      setRole('');
      setUsername('');
      setPhoneno('');
      setMail('');
      setGender('');
      setNameError('');
      setPhonenoError('');
      setSelectedDate('Date Of Birth');
      setAddress('');
      setAddressError('');
    } catch (error) {
      Alert.alert('Error', 'Failed to register. Please try again.');
    }
  };

  const handleSelectItem = items => {
    setRole(items.label);
  };
  const [radio, setRadio] = useState(1);

  return (
    <ImageBackground
      source={require('./pic8.png')}
      style={{
        flex: 1,
        height: '100%',
      }}>
      <ScrollView>
        <View style={styles.ViewStyle}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center', // Center content vertically
              alignItems: 'center', // Center content horizontally
              marginBottom: 5,
            }}>
            <TouchableOpacity onPress={handelPress}>
              <Image
                style={styles.imageStyle}
                source={
                  typeof selectImage === 'string'
                    ? {uri: selectImage}
                    : selectImage
                }
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={handelPress}>
              <Image
                style={{
                  height: 25,
                  width: 25,
                  backgroundColor: 'white',
                  resizeMode: 'cover',
                  borderRadius: 8,
                  borderWidth: 1,
                  marginTop: -45,
                  marginLeft: 100,
                }}
                source={require('../src/UploadIMG.png')}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Select selectFn={handleSelectItem} />
            {roleError && (
              <Text style={styles.Error}>This Field required.</Text>
            )}
          </View>
          <TextInput
            style={styles.TextInput}
            placeholder="Enter Your Full Name :"
            value={username}
            onChangeText={setUsername}
            backgroundColor="white"
            placeholderTextColor="black"
          />
          {nameError && <Text style={styles.Error}>This Field required.</Text>}
          <TextInput
            style={styles.TextInput}
            placeholder="Enter Your Phone No :"
            value={phoneno}
            onChangeText={setPhoneno}
            placeholderTextColor="black"
            backgroundColor="white"
            keyboardType="phone-pad"
            maxLength={10}
          />
          {phonenoError && (
            <Text style={styles.Error}>This Field required.</Text>
          )}
          <TextInput
            style={styles.TextInput}
            placeholder="Enter Your Email :"
            value={mail}
            onChangeText={setMail}
            backgroundColor="white"
            placeholderTextColor="black"
          />
          {mailError && <Text style={styles.Error}>Invalid Email.</Text>}
          <TextInput
            style={styles.TextInput}
            placeholder="Enter Your Address :"
            value={address}
            onChangeText={setAddress}
            backgroundColor="white"
            placeholderTextColor="black"
          />
          <TouchableOpacity
            style={{
              fontSize: 18,
              color: '#007BFF',
              width: '100%',
              height: 50,
              borderBottomWidth: 2,
              placeholderTextColor: 'black',
              paddingHorizontal: 10,
              borderRadius: 8,
              marginTop: 20,
              backgroundColor: 'white',
            }}
            onPress={showDatePicker}>
            <Text style={{fontSize: 18, marginTop: 10}}>{selectedDate}</Text>
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={datePickerVisibility}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
            // onChangeText={setDatePickerVisibility}
          />
          <View
            style={{
              alignItems: 'flex-start',
              paddingBottom: 15,
              paddingRight: 170,
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                margin: 5,
                color: 'white',
              }}>
              Select Your Gender :
            </Text>
            <TouchableOpacity onPress={() => setRadio(1)}>
              <View style={styles.RadioWraper}>
                <View style={styles.Radio}>
                  {radio === 1 ? <View style={styles.Radiobg}></View> : null}
                </View>

                <Text style={{fontSize: 15, color: 'white'}}>Male</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setRadio(2)}>
              <View style={styles.RadioWraper}>
                <View style={styles.Radio}>
                  {radio === 2 ? <View style={styles.Radiobg}></View> : null}
                </View>
                <Text style={{fontSize: 15, color: 'white'}}>Female</Text>
              </View>
            </TouchableOpacity>
          </View>
          <Btn
            bgColor="gold"
            textColor="black"
            btnLabel="Registration"
            Press={() => handleSubmit()}
          />
          <View
            style={{
              marginTop: 10,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: -45,
            }}>
            <Text style={{color: 'white', fontSize: 20, marginRight: 10}}>
              Already have account ?
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}>
              <Text style={{color: 'yellow', fontSize: 20, fontWeight: 'bold'}}>
                Login
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
    placeholderTextColor: 'black',
    fontSize: 18,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 20,
    backgroundColor: 'white',
  },

  Text: {
    fontSize: 25,
  },
  Error: {
    color: 'red',
    fontSize: 16,
    marginTop: -5,
    marginRight: 200,
    fontWeight: 'bold',
  },
  ViewStyle: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'rgba(34, 7, 7, 0.6)',
    paddingLeft: 20,
    paddingRight: 20,
  },
  Radio: {
    height: 22,
    width: 22,
    borderColor: 'yellow',
    borderWidth: 2,
    borderRadius: 20,
    margin: 8,
  },
  RadioWraper: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  Radiobg: {
    backgroundColor: 'red',
    height: 14,
    width: 14,
    borderRadius: 7,
    margin: 1.7,
  },
  imageStyle: {
    width: 120,
    height: 120,
    padding: 20,
    margin: 10,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'white',
  },
});
export default Registration;
