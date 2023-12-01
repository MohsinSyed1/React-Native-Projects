import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <>
      <View style={styles.container1}>
        <Text style={isDarkMode ? styles.whiteText : styles.blackText}>
          Hello World!!!
        </Text>
      </View>
      <View style={styles.container2}>
        <Text>Dev Mohsin Here</Text>
      </View>
    </>
  );
}

export default App;

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 1,
    backgroundColor: '#f4f4f4',
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 1,
  },
  whiteText: {
    color: 'grey',
  },
  blackText: {
    color: '#000000',
  },
});
