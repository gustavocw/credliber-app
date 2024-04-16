import EyeOff from '@assets/icons/dash/eyeOff';
import EyeOn from '@assets/icons/dash/eyeOn';
import { ButtonBack } from '@components/returnScreen/buttonBack';
import { useRegister } from '@context/useRegister';
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';

import { styles } from './styles/index.styles';
import ContinueButton from '../components/continueButton';

const PasswordScreen = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const { dados, setDados } = useRegister();

  useEffect(() => {
    console.log(dados);
  }, []);

  const updatePassword = (inputPassword: string) => {
    setDados((prev) => ({ ...prev, password: inputPassword }));
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={styles.container}>
          <ButtonBack title="" subTitle="" />
          <View>
            <Text style={styles.title}>Crie sua senha</Text>
            <Text style={styles.description}>
              Sua senha deve conter no mínimo 8 caracteres, incluindo letras maiúsculas, minúsculas,
              números e caracteres especiais.
            </Text>
          </View>
          <View>
            <View>
              <Text style={styles.label}>Senha</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TextInput
                  placeholder="Digite sua senha"
                  placeholderTextColor="#9F9F9F"
                  style={[styles.input, { flex: 1 }]}
                  secureTextEntry={!passwordVisible}
                  value={dados.password}
                  onChangeText={updatePassword}
                />
                <TouchableOpacity
                  onPress={() => setPasswordVisible(!passwordVisible)}
                  style={{
                    position: 'absolute',
                    right: 10,
                    height: '100%',
                    justifyContent: 'center',
                  }}>
                  {passwordVisible ? (
                    <EyeOn size={24} color="black" />
                  ) : (
                    <EyeOff size={24} color="black" />
                  )}
                </TouchableOpacity>
              </View>
              <Text style={styles.label}>Confirmar senha</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TextInput
                  placeholder="Confirme sua senha"
                  placeholderTextColor="#9F9F9F"
                  style={[styles.input, { flex: 1 }]}
                  secureTextEntry={!confirmPasswordVisible}
                />
                <TouchableOpacity
                  onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                  style={{
                    position: 'absolute',
                    right: 10,
                    height: '100%',
                    justifyContent: 'center',
                  }}>
                  {confirmPasswordVisible ? (
                    <EyeOn size={24} color="black" />
                  ) : (
                    <EyeOff size={24} color="black" />
                  )}
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.footer}>
            <ContinueButton screen="BankInformations" />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default PasswordScreen;
