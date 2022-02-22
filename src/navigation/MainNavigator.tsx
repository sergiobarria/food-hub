import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
// import { MainLayout } from '@/screens/';
import DrawerNavigator from './DrawerNavigator';

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName='Home'
      >
        <Stack.Screen name='Home' component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
