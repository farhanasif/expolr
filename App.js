// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AboutScreen from './src/screens/AboutScreen';
import HomeScreen from './src/screens/HomeScreen';
import loginScreen from './src/screens/loginsScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'My home' }}/>
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Login" component={loginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;