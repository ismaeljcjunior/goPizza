
import React from 'react';
import { useFonts, DMSans_400Regular } from '@expo-google-fonts/dm-sans'
import { DMSerifDisplay_400Regular } from '@expo-google-fonts/dm-serif-display'
import * as SplashScreen from 'expo-splash-screen';
import { ThemeProvider } from 'styled-components/native'
import theme from './src/theme';
import { StatusBar } from 'expo-status-bar'
import { SignIn } from './src/screens/SignIn/index';


export default function App() {

  SplashScreen.preventAutoHideAsync();
  const [fontsLoaded] = useFonts({
    DMSans_400Regular, DMSerifDisplay_400Regular
  });

  if (!fontsLoaded) {
    return null;
  }

  SplashScreen.hideAsync();

  return (
    <>
      <ThemeProvider theme={theme}>
        <StatusBar style="light" translucent backgroundColor="transparent" />
        <SignIn />
      </ThemeProvider>

    </>
  );
}
