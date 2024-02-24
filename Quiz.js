// Quiz.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const questions = [
  {
    question: "What is the capital of France?",
    options: ["New York", "London", "Paris", "Dublin"],
    correctOption: "Paris",
  },
  {
    question: "Who is CEO of Tesla?",
    options: ["Jeff Bezos", "Elon Musk", "Bill Gates", "Steve Jobs"],
    correctOption: "Elon Musk",
  },
  // Add more questions here...
];

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswerPress = (option) => {
    if (option === questions[currentQuestionIndex].correctOption) {
      setScore(score + 1);
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert(`Quiz Finished! Your score is ${score + (option === questions[currentQuestionIndex].correctOption ? 1 : 0)}`);
      // Here you can reset the quiz or navigate the user elsewhere
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>
        {questions[currentQuestionIndex].question}
      </Text>
      {questions[currentQuestionIndex].options.map((option) => (
        <TouchableOpacity key={option} style={styles.option} onPress={() => handleAnswerPress(option)}>
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  question: {
    marginVertical: 16,
    fontSize: 18,
    fontWeight: 'bold',
  },
  option: {
    backgroundColor: '#f0f0f0',
    padding: 12,
    marginVertical: 6,
    borderRadius: 5,
  },
  optionText: {
    fontSize: 16,
  },
});

export default Quiz;
