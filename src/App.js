import 'react-native-gesture-handler';

import React from 'react';
import Navigation from './components/Navigation';
import {
  SafeAreaProvider,
  initialWindowSafeAreaInsets,
} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';

export default () => (
  <SafeAreaProvider initialSafeAreaInsets={initialWindowSafeAreaInsets}>
    <StatusBar />
    <Navigation />
  </SafeAreaProvider>
);
