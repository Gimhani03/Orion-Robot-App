import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';

// Import screens
import SplashScreen from './src/screens/SplashScreen';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import HomeScreen from './src/screens/HomeScreen';
import ChooseTopicScreen from './src/screens/ChooseTopicScreen';
import AboutScreen from './src/screens/AboutScreen';
import ReminderScreen from './src/screens/ReminderScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator 
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ChooseTopic" component={ChooseTopicScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Reminder" component={ReminderScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
