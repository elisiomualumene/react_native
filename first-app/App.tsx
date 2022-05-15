import { StatusBar } from 'expo-status-bar';
import { useFonts, Inter_400Regular, Inter_700Bold} from '@expo-google-fonts/inter';
import { ThemeProvider } from 'styled-components/native'
import AppLoading from 'expo-app-loading';
import React from 'react';
import {View} from 'react-native';
import {styles} from './GlobalStyle'
import { Home } from './src/screens/Home';
import THEME from './src/theme'

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
 
  return (
    <ThemeProvider theme={THEME}>
      <View style={styles.container}>
        <Home/>
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
}