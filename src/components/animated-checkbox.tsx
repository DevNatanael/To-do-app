/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

export default function Check() {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <CheckBox
      disabled={false}
      value={toggleCheckBox}
      onValueChange={newValue => setToggleCheckBox(newValue)}
      tintColors={{true: 'red', false: 'black'}}
    />
  );
}
