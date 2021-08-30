import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Home from './src/pages/Index';
import Notas from './src/pages/Notas';
import Faltas from './src/pages/Faltas';
import Login from './src/pages/Login';
import Usuario from './src/pages/Usuario';
import Index from './src/pages/Index';

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerLeft: null }}/>
        <Stack.Screen name="Index" component={Index} />
        <Stack.Screen name="Notas" component={Notas} />
        <Stack.Screen name="Faltas" component={Faltas} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="Usuario" component={Usuario} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}