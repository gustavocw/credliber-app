import { ButtonBack } from '@components/returnScreen/buttonBack';
import { useRegister } from '@context/useRegister';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@routes';
import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import ContinueButton from './components/continueButton';
import styles from './styles/index.styles';

type RegisterScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'Login' | 'Informations'
>;
const RegisterScreen = () => {
  const navigation = useNavigation<RegisterScreenNavigationProps>();
  const { dados, setDados } = useRegister();

  const updateFullName = (nome: string) => {
    setDados((prev) => ({ ...prev, name: nome }));
  };

  const updateCpf = (cpf: string) => {
    setDados((prev) => ({ ...prev, cpf }));
  };

  const updateRg = (rg: string) => {
    setDados((prev) => ({ ...prev, rg }));
  };

  const updateBirthDate = (birthDate: string) => {
    setDados((prev) => ({ ...prev, birthDate }));
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={styles.container}>
          <View style={styles.header}>
            <ButtonBack title="" subTitle="" />
          </View>
          <View>
            <Text style={styles.title}>Para começar {'\n'}insira seus dados</Text>
          </View>
          <View style={styles.content}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Nome Completo</Text>
              <TextInput
                value={dados.name}
                onChangeText={updateFullName}
                placeholder="Insira seu nome completo"
                placeholderTextColor="#9F9F9F"
                style={styles.input}
              />
              <Text style={styles.helpText}>Insira seu CPF no formato XXX.XXX.XXX-XX</Text>
              <Text style={styles.label}>CPF</Text>
              <TextInput
                value={dados.cpf}
                onChangeText={updateCpf}
                keyboardType="numeric"
                placeholder="Insira seu CPF"
                placeholderTextColor="#9F9F9F"
                style={styles.input}
              />
              <Text style={styles.helpText}>Insira seu CPF no formato XXX.XXX.XXX-XX</Text>
              <Text style={styles.label}>Número do RG</Text>
              <TextInput
                value={dados.rg}
                onChangeText={updateRg}
                keyboardType="numeric"
                placeholder="Insira seu RG"
                placeholderTextColor="#9F9F9F"
                style={styles.input}
              />
              <Text style={styles.helpText}>Insira seu RG no formato XXXXXXX-X</Text>
              <Text style={styles.label}>Data de Nascimento</Text>
              <TextInput
                value={dados.birthDate}
                onChangeText={updateBirthDate}
                keyboardType="numeric"
                placeholder="dd/mm/aaaa"
                placeholderTextColor="#9F9F9F"
                style={styles.input}
              />
              <Text style={styles.helpText}>
                Insira sua data de nascimento no formato DD/MM/AAAA
              </Text>
            </View>
          </View>
          <View>
            <ContinueButton screen="Informations" />
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.loginButton}>Já possuo cadastro</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
