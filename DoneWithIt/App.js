import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View} from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';


export default function App() { 
  return <ViewImageScreen />;
}


// Physical Pixels = Density-independent Pixels(DIPs) * Scale Factor