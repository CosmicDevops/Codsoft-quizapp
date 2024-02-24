import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const questions = [
    {
      question: "Who is CEO of Tesla?",
      options: ["Jeff Bezos", "Elon Musk", "Bill Gates", "Steve Jobs"],
      correctOption: "Elon Musk",
    },
    {
      question: "What is the capital of Japan?",
      options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
      correctOption: "Tokyo",
    },
    {
      question: "Which element has the chemical symbol 'O'?",
      options: ["Gold", "Oxygen", "Silver", "Helium"],
      correctOption: "Oxygen",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      correctOption: "Mars",
    },
    {
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
      correctOption: "Pacific Ocean",
    },
    {
      question: "In what year did the Titanic sink?",
      options: ["1912", "1905", "1898", "1923"],
      correctOption: "1912",
    },
    {
      question: "Who wrote 'Hamlet'?",
      options: ["Charles Dickens", "William Shakespeare", "Leo Tolstoy", "Mark Twain"],
      correctOption: "William Shakespeare",
    },
    {
      question: "What is the capital of Australia?",
      options: ["Sydney", "Melbourne", "Perth", "Canberra"],
      correctOption: "Canberra",
    },
    {
      question: "Which human organ is capable of regenerating tissue?",
      options: ["Heart", "Liver", "Lung", "Kidney"],
      correctOption: "Liver",
    },
    {
      question: "What is the hardest natural substance on Earth?",
      options: ["Gold", "Iron", "Diamond", "Quartz"],
      correctOption: "Diamond",
    }
  ];
  

const HomeScreen = ({ navigation }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
  
    const handleAnswerPress = (option) => {
      if (option === questions[currentQuestionIndex].correctOption) {
        setScore(score + 1);
      }
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        navigation.navigate('Score', { score: score + (option === questions[currentQuestionIndex].correctOption ? 1 : 0) });
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

export default HomeScreen;
