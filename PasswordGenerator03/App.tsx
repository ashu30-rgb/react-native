import {StyleSheet, Text, View} from 'react-native';
import React, { useState } from 'react';

//Form validation
import * as Yup from 'yup';

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Should be min of 4 characters are required')
    .max(16, 'Should be less than 16 characters')
    .required(),
});

export default function App() {

  const [password, setPassword] = useState('');
  const [isPassGenerated, setIsPassGenerated] = useState(false);
  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);

  const generatePasswordString = (len:number)=>{

  }

  const createPassword = (char:string, len:number)=>{
    let result = ''
    for(let i= 0; i<len; i++){
      const charIndex = Math.round(Math.random() * char.length);
      result += char.charAt(charIndex)
    }
    return result
  }

  const resetPasswordState = ()=>{

  }

  return (
    <View>
      <Text>App</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
