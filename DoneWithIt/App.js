import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View} from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import LatestOrders from './app/screens/LatestOrders';
import AboutMe from './app/screens/AboutMe';


export default function App() { 
  return <LatestOrders/>;
}


// Physical Pixels = Density-independent Pixels(DIPs) * Scale Factor