import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

//Form validation
import * as Yup from 'yup';

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Should be min of 4 characters are required')
    .max(16, 'Should be less than 16 characters')
    .required(),
});

export default function App() {
  return (
    <View>
      <Text>App</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
