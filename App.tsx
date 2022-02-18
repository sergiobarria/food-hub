import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Our react native blank canvas</Text>
      </View>
      <StatusBar style='auto' />
    </>
  );
}

const styles = StyleSheet.create({});
