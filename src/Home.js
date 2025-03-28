import {View, Text} from 'react-native';
import React from 'react';
import ImagesFile from './Images';
import {StyleSheet, ImageBackground} from 'react-native';
import Btn from './Btn';
import {lightBlue} from '../Constants';
const Home = props => {
  return (
    <ImageBackground
      source={require('./pic7.jpg')}
      style={{
        flex: 1,
        height: '100%',
        width: '100%',

        // justifyContent: 'center',
        // padding: 20,
      }}>
      <View style={styles.ViewStyle}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 62,
            color: 'white',
            marginBottom: 5,
            fontWeight: 'bold',
          }}>
          East Bengal
        </Text>
        <ImagesFile />
        <Text
          style={{
            textAlign: 'center',
            fontSize: 50,
            color: 'white',
            fontWeight: 'bold',
          }}>
          Since 1920
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 36,
            color: 'white',
            marginBottom: 60,
            fontWeight: 'bold',
          }}>
          Then, Now & Forever
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            color: 'white',
            fontWeight: 'bold',
          }}>
          Log in to your account.
        </Text>
        <Btn
          bgColor="#ff1a1a"
          textColor="white"
          btnLabel="Login"
          Press={() => props.navigation.navigate('Login')}
        />
        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            color: 'white',
            fontWeight: 'bold',
          }}>
          New User ?
        </Text>
        <Btn
          bgColor="yellow"
          textColor="black"
          btnLabel="Registration"
          Press={() => props.navigation.navigate('Registration')}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  ViewStyle: {
    // padding: 10,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'rgba(34, 7, 7, 0.7)',
    padding: 20,
  },
});
export default Home;
