import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';

const InputTextField = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
}) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}

      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#999999"
        value={value}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
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
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 5,
    marginTop: 10,
    color: '#333',
  },
});
export default InputTextField;
