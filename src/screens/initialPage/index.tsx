import { useAuth } from '@context/authContext';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { styles } from '@screens/initialPage/styles/index.styles';
import React, { useEffect } from 'react';
import { Text, TouchableOpacity, View, ImageBackground, StatusBar } from 'react-native';

import { RootStackParamList } from '../../routes';

type LoginScreenNavigationProps = StackNavigationProp<RootStackParamList, 'Login'>;

export default function InitialPage() {
  const navigation = useNavigation<LoginScreenNavigationProps>();
  const { setIsLogged } = useAuth();
  useEffect(() => {
    setIsLogged(false);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.content}>
        <ImageBackground source={require('@assets/images/bg.png')} style={styles.backgroundImage}>
          <Text style={styles.headerText}>
            Aumente seus ganhos{'\n'}a cada transação{'\n'}realizada!
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: '#EA0356' }]}
              onPress={() => navigation.navigate('Register')}>
              <Text style={styles.buttonText}>Criar conta</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: '#FFFFFF' }]}
              onPress={() => navigation.navigate('Login')}>
              <Text style={[styles.buttonText, { color: '#000' }]}>Entrar</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
}
