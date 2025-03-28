// Btn.js
import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';

const Btn = ({title, Press, bgColor, btnLabel, textColor}) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor: bgColor,
          padding: 10,
          borderRadius: 100,
          marginVertical: 5,
          alignItems: 'center',
          width: 350,
          marginBottom: 50,
        }}
        onPress={Press}>
        <Text
          style={{
            color: textColor,
            fontSize: 25,
            fontWeight: 'bold',
          }}>
          {btnLabel}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Btn;
