import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Slot, SplashScreen } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from '@react-navigation/native';
import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import { useFonts } from 'expo-font';
import CustomSplashScreen from '@/components/SplashScreen';

// Prevent native splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [fontsLoaded, fontError] = useFonts({
    'SpaceMono-Regular': require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  const [appReady, setAppReady] = useState(false);
  const [splashAnimationComplete, setSplashAnimationComplete] = useState(false);

  useEffect(() => {
    if (fontError) throw fontError;
  }, [fontError]);

  useEffect(() => {
    async function prepare() {
      try {
        // Wait for both fonts to load AND splash animation to complete
        if (fontsLoaded && splashAnimationComplete) {
          // Hide native splash screen
          await SplashScreen.hideAsync();
          // Mark app as ready
          setAppReady(true);
        }
      } catch (e) {
        console.warn(e);
      }
    }
    
    prepare();
  }, [fontsLoaded, splashAnimationComplete]);

  if (!appReady) {
    return (
      <CustomSplashScreen 
        onAnimationComplete={() => setSplashAnimationComplete(true)} 
      />
    );
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      <Slot />
    </ThemeProvider>
  );
}