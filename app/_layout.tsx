import React, { useEffect } from 'react';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import Navbar from './Navbar';
import { useColorScheme } from '@/hooks/useColorScheme';

// Não importa o componente aqui; você vai chamá-lo ao navegar
// import CalendarioComponent from './CalendarioComponent'; // Remova esta linha

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {/* Navbar renderizada aqui */}
      <Navbar />

      {/* Stack Navigator deve estar aqui */}
      <Stack>
        <Stack.Screen
          name="TelaDeLogin"
          options={{ headerShown: true, title: 'Login' }} // Renomeie conforme necessário
        />
        <Stack.Screen
          name="RecuperarSenha"
          options={{ headerShown: true, title: 'Recuperar Senha' }}
        />
        <Stack.Screen
          name="Agendamento"
          options={{ headerShown: true, title: 'Agendamentos' }}
        />
        {/* Navegação para o calendário deve ser feita de forma diferente */}
        <Stack.Screen
          name="Calendario"
          options={{ headerShown: true, title: 'Calendário' }} // Título da tela
        />
         <Stack.Screen
          name="ScheduleManagement"
          options={{ headerShown: true, title: 'ScheduleManagement' }} // Título da tela
        />
        <Stack.Screen
          name="RelatorioPage"
          options={{ headerShown: true, title: 'RelatorioPage' }} // Título da tela
        />
        <Stack.Screen
          name="TelaColaboradores"
          options={{ headerShown: true, title: 'TelaColaboradores' }} // Título da tela
        />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
