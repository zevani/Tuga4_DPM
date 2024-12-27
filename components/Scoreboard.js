// components/Scoreboard.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

const Scoreboard = ({ teamA, teamB }) => {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);

  const addScoreA = () => setScoreA(scoreA + 1);
  const subtractScoreA = () => setScoreA(scoreA > 0 ? scoreA - 1 : 0);
  
  const addScoreB = () => setScoreB(scoreB + 1);
  const subtractScoreB = () => setScoreB(scoreB > 0 ? scoreB - 1 : 0);
  
  const resetScores = () => {
    setScoreA(0);
    setScoreB(0);
  };

  const winnerMessage = () => {
    if (scoreA >= 10) return `${teamA} menang!`;
    if (scoreB >= 10) return `${teamB} menang!`;
    return '';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{teamA} vs {teamB}</Text>
      <View style={styles.scoreContainer}>
        <Text style={styles.score}>{teamA}: {scoreA}</Text>
        <Text style={styles.score}>{teamB}: {scoreB}</Text>
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={addScoreA}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={subtractScoreA}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={addScoreB}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={subtractScoreB}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.resetButton} onPress={resetScores}>
        <Text style={styles.resetButtonText}>Reset</Text>
      </TouchableOpacity>
      
      {winnerMessage() ? <Text style={styles.winner}>{winnerMessage()}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  scoreContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  score: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007acc',
    padding: 10,
    borderWidth: 2,
    borderColor: '#007acc',
    borderRadius: 10,
    textAlign: 'center',
    width: 100,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#007acc',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
  },
  resetButton: {
    backgroundColor: '#ff4d4d',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  winner: {
    fontSize: 24,
    color: 'green',
    marginTop: 20,
    fontWeight: 'bold',
  },
});

export default Scoreboard;