import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useState} from 'react';

const ImagesFile = () => {
  return (
    <View>
      <Image style={style.imageStyle} source={require('../src/pic1.png')} />
    </View>
  );
};

const style = StyleSheet.create({
  // Liststyle:{
  //   height:500,
  //   display:"flex",
  //   justifyContent:"center",
  //   alignItems:"center",
  // },

  // textStyle:{
  //   fontSize:30,
  // },
  imageStyle: {
    width: 120,
    height: 120,
    padding: 20,
    margin: 10,
    resizeMode: 'cover',
    borderRadius: 10,
  },
});

export default ImagesFile;
