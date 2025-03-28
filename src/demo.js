import React from 'react';
import {RadioButton} from 'react-native-radio-buttons-group';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import ImagesFile from './Images';
import Select from './Select';
import {useState} from 'react';

const Login = (props: any) => {
  const [username, setUsername] = useState('');
  const [phoneno, setPhoneno] = useState('');
  const [mail, setMail] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = () => {
    // Log the user data to the console
    console.log('User Data:', {username, phoneno, mail, gender});
    // Clear inputs after submission
    setUsername('');
    setPhoneno('');
    setMail('');
    setGender('');
  };

  const [radio, setRadio] = useState(1);
  return (
    <ImageBackground
      source={require('./pic2.jpg')}
      style={{
        flex: 1,
        // justifyContent: 'center',
        // padding: 20,
      }}>
      <View style={styles.ViewStyle}>
        <ImagesFile />
        <Select />
        <TextInput
          style={styles.TextInput}
          placeholder="Enter Your Full Name :"
          value={username}
          onChangeText={setUsername}
          backgroundColor="yellow"
          placeholderTextColor="black"
          placce></TextInput>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter Your Phone No :"
          value={phoneno}
          onChangeText={setPhoneno}
          placeholderTextColor="black"
          backgroundColor="yellow"
          keyboardType="phone-pad"
          placce></TextInput>

        <TextInput
          style={styles.TextInput}
          placeholder="Enter Your Email :"
          value={mail}
          onChangeText={setMail}
          backgroundColor="yellow"
          placeholderTextColor="black"
          placce></TextInput>
        <View
          style={{
            alignItems: 'flex-start',
            paddingBottom: 40,
            paddingRight: 170,
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              margin: 5,
            }}>
            Select Your Gender :
          </Text>
          <TouchableOpacity onPress={() => setRadio(1)}>
            <View style={styles.RadioWraper}>
              <View style={styles.Radio}>
                {radio === 1 ? <View style={styles.Radiobg}></View> : null}
              </View>

              <Text style={{fontSize: 15}}>Male</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setRadio(2)}>
            <View style={styles.RadioWraper}>
              <View style={styles.Radio}>
                {radio === 2 ? <View style={styles.Radiobg}></View> : null}
              </View>
              <Text style={{fontSize: 15}}>Female</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Button title="Submite" onPress={handleSubmit} />
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  TextInput: {
    color: '#007BFF',
    // backgroundColor:'pink',
    width: '100%',
    height: 50,
    borderBottomWidth: 2,
    placeholderTextColor: 'black',
    fontSize: 18,
    paddingHorizontal: 10,
    marginBottom: 15,
    borderRadius: 8,
    marginBottom: 20,
    marginTop: 20,
    backgroundColor: 'white',
  },

  Text: {
    fontSize: 25,
  },

  ViewStyle: {
    // padding: 10,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
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
export default Registration;
