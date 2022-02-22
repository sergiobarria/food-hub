import * as React from 'react';
// import { StyleSheet } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { useTheme } from '@emotion/react';

// Screens
import { MainLayout } from '@/screens/';
import { Box } from '@/components/base';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  const theme = useTheme();

  return (
    <Box flex={1} bg={theme.colors.primary}>
      <Drawer.Navigator
        initialRouteName='MainLayout'
        screenOptions={{
          sceneContainerStyle: { backgroundColor: 'transparent' },
        }}
      >
        <Drawer.Screen name='MainLayout' component={MainLayout} />
      </Drawer.Navigator>
    </Box>
  );
}

// const styles = StyleSheet.create({
//   drawerStyles: {
//     flex: 1,
//     width: '65%',
//     paddingRight: 20,
//   },
// });
