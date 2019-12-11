import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Root from "./src";

const App = () => {
  return (
    <View style={styles.container}>
      <Root />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lighter,
    flex: 1,    
  }
});

export default App;
