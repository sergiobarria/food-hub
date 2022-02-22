import React from 'react';
import { useColorScheme } from 'react-native';

import { ThemeProvider } from '@emotion/react';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import MainNavigator from '@/navigation/MainNavigator';

import { themeLight, themeDark } from '@/theme/';

export default function App() {
  const scheme = useColorScheme();
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={scheme === 'dark' ? themeDark : themeLight}>
      <MainNavigator />
    </ThemeProvider>
  );
}
