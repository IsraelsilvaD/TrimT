import React, { useEffect } from 'react';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack, useRouter, useSegments } from 'expo-router'; // Import useRouter e useSegments
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import Navbar from './Navbar';
import { useColorScheme } from '@/hooks/useColorScheme';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter();
  const segments = useSegments(); // Hook para pegar os segmentos de navegação

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

  // Verifique se a rota atual é uma das telas onde queremos ocultar a Navbar
  const hideNavbarScreens = ['TelaDeLogin', 'RecuperarSenha', 'TelaDeRegistro']; // Telas específicas
  const hideNavbar = hideNavbarScreens.includes(segments[0]); // Verifica se a primeira parte do caminho é uma dessas telas

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {/* Renderiza a Navbar somente se não estivermos em uma das telas especificadas */}
      {!hideNavbar && <Navbar />}

      {/* Stack Navigator */}
      <Stack>
        <Stack.Screen
          name="TelaDeLogin"
          options={{ headerShown: false }} // Oculta o header e a Navbar na tela de Login
        />
        <Stack.Screen
          name="RecuperarSenha"
          options={{ headerShown: false }} // Oculta o header e a Navbar na tela de Recuperar Senha
        />
        <Stack.Screen
          name="TelaDeRegistro"
          options={{ headerShown: false }} // Oculta o header e a Navbar na tela de Registrar
        />
        <Stack.Screen
          name="Agendamento"
          options={{ headerShown: true }} // Exibe o header, mas você pode personalizar conforme necessário
        />
        <Stack.Screen
          name="Calendario"
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="ScheduleManagement"
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="RelatorioPage"
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="TelaColaboradores"
          options={{ headerShown: true }}
        />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
