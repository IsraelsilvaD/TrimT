// app/_layout.js ou app/_layout.tsx

import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme'; // Ajuste conforme sua estrutura de pastas

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'), // Exemplo de fonte
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync(); // Oculta a tela de splash após carregar os recursos
    }
  }, [loaded]);

  if (!loaded) {
    return null; // Retorna null enquanto as fontes estão sendo carregadas
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen 
          name="TelaDeLogin" 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="RecuperarSenha" 
          options={{ headerShown: true, title: 'Recuperar Senha' }} 
        />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
