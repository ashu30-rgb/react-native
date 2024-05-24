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
    let characterList = '';

    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digitChars = '01234567890';
    const specialChars = '!@#$%^&*()_+';

    if(upperCase){
      characterList += upperCase
    }
    if(lowerCase){
      characterList += lowerCase
    }
    if(numbers){
      characterList += numbers
    }
    if(symbols){
      characterList += symbols
    }

    const passwordResult = createPassword(characterList, len);

    setPassword(passwordResult);
    setIsPassGenerated(true)
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
    setPassword('');
    setIsPassGenerated(false);
    setLowerCase(true);
    setUpperCase(false);
    setNumbers(false);
    setSymbols(false);
  }

  return (
    <View>
      <Text>App</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
