// App.js
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Scoreboard from './components/Scoreboard';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Scoreboard teamA="Tim A" teamB="Tim B" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;