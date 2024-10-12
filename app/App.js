import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaDeLogin from '../app/TelaDeLogin';
import layout from '../app/_layout';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaDeLogin">
        <Stack.Screen 
          name="TelaDeLogin" 
          component={TelaDeLogin} 
          options={{ headerShown: false }} // Oculta o cabeçalho da tela de login
        />
        <Stack.Screen 
          name="Layout" 
          component={layout} 
          options={{ headerShown: false }} // Oculte o cabeçalho para o layout
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
