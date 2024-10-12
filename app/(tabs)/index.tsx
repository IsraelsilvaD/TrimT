import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaDeLogin from '../../app/TelaDeLogin';  // Importa a tela de login
import Ionicons from '@expo/vector-icons/Ionicons';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Stack.Navigator initialRouteName="TelaDeLogin">
      <Stack.Screen 
        name="TelaDeLogin" 
        component={TelaDeLogin} 
        options={{ headerShown: false }}  // Oculta o cabeçalho da tela de login
      />
      {/* Adicione mais telas aqui conforme necessário */}
    </Stack.Navigator>
  );
}
