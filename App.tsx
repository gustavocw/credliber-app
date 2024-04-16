import 'react-native-gesture-handler';
import Loading from '@components/loading';
import { AuthProvider } from '@context/authContext';
import { RegisterProvider } from '@context/useRegister';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
} from '@expo-google-fonts/montserrat';
import RootStack from '@routes';
import React from 'react';
import { StatusBar, View } from 'react-native';

import { TransactionsProvider } from './src/context/useTransactions';

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Loading />
      </View>
    );
  }

  return (
    <AuthProvider>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <RegisterProvider>
        <TransactionsProvider>
          <RootStack />
        </TransactionsProvider>
      </RegisterProvider>
    </AuthProvider>
  );
}
