import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './GlobalStyle'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>OK</Text>
      <StatusBar style="auto" />
    </View>
  );
}
