import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

const SplashScreen = ({ onAnimationComplete }: { onAnimationComplete: () => void }) => {
  const [text, setText] = useState('');
  const fullText = 'KickStat';
  const typingSpeed = 150;

  useEffect(() => {
    let timer: number; // Changed to number type for React Native

    if (text.length < fullText.length) {
      timer = setTimeout(() => {
        setText(fullText.substring(0, text.length + 1));
      }, typingSpeed) as unknown as number; // Type assertion for RN environment
    } else {
      timer = setTimeout(() => {
        onAnimationComplete();
      }, 1000) as unknown as number;
    }

    return () => clearTimeout(timer);
  }, [text, onAnimationComplete]);

  return (
    <Animated.View 
      style={styles.container}
      entering={FadeIn.duration(500)}
      exiting={FadeOut.duration(500)}
    >
      <Text style={styles.text}>
        {text}
        {text.length < fullText.length && (
          <Text style={styles.cursor}>|</Text>
        )}
      </Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  text: {
    fontSize: 42,
    fontWeight: 'normal',
    color: '#FFFFFF',
  },
  cursor: {
    opacity: 1,
    color: '#FFFFFF',
  },
});

export default SplashScreen;