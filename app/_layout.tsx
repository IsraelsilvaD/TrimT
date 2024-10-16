import React, { useEffect } from 'react';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import Navbar from './Navbar';
import { useColorScheme } from '@/hooks/useColorScheme';

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

      {/* Stack Navigator */}
      <Stack>
        <Stack.Screen
          name="TelaDeLogin"
          options={{ headerShown: false }} // Oculta o header e o título da tela de login
        />
        <Stack.Screen
          name="RecuperarSenha"
          options={{ headerShown: false }} // Oculta o header e o título da tela de Recuperar Senha
        />
        <Stack.Screen
          name="Agendamento"
          options={{ headerShown: false }} // Oculta o header e o título da tela de Agendamentos
        />
        <Stack.Screen
          name="Calendario"
          options={{ headerShown: false }} // Oculta o header e o título da tela de Calendário
        />
        <Stack.Screen
          name="ScheduleManagement"
          options={{ headerShown: false }} // Oculta o header e o título da tela de ScheduleManagement
        />
        <Stack.Screen
          name="RelatorioPage"
          options={{ headerShown: false }} // Oculta o header e o título da tela de RelatorioPage
        />
        <Stack.Screen
          name="TelaColaboradores"
          options={{ headerShown: false }} // Oculta o header e o título da tela de TelaColaboradores
        />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
