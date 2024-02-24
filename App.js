import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import ScoreScreen from './ScoreScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Quiz' }} />
        <Stack.Screen name="Score" component={ScoreScreen} options={{ title: 'Score' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
