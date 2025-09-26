import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View} from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';


export default function App() { 
  return <WelcomeScreen />;
}


// Physical Pixels = Density-independent Pixels(DIPs) * Scale Factor