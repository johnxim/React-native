import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Header from './components/Header';
import Input from './components/Input';
import Button from './components/Button';
import AppNavigator from "./navigation/navigator";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <AppNavigator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
