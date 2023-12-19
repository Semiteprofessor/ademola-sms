/** @format */

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const CustomButton = ({label, disabled, onPress}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={styles.button}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    height: 48,
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#5BCCF7',
  },
  text: {
    textAlign: 'center',
    fontWeight: '600',
    color: '#fff',
    fontSize: 14,
    lineHeight: 16.8,
  },
});
