/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

interface Props {
  highlightColor: string;
  boxOutlineColor: string;
  setChecked: any;
  value: boolean;
}

export default function Check(props: Props) {
  const {value, setChecked} = props;
  return (
    <CheckBox
      disabled={false}
      value={value}
      onValueChange={newValue => setChecked(newValue)}
      tintColors={{true: props.highlightColor, false: props.boxOutlineColor}}
    />
  );
}
