import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ScoreScreen = ({ route, navigation }) => {
  const { score } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.scoreText}>Your score is: {score}</Text>
      <Button title="Restart Quiz" onPress={() => navigation.popToTop()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scoreText: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default ScoreScreen;
