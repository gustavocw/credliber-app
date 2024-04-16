import { ButtonBack } from '@components/returnScreen/buttonBack';
import { useRegister } from '@context/useRegister';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@routes';
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Linking,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import { banks } from './lists/bankList';
import { days } from './lists/days';
import { styles } from './styles/index.styles';

type BankInformationsType = StackNavigationProp<RootStackParamList, 'Initial'>;

const BankInformations = () => {
  const navigation = useNavigation<BankInformationsType>();
  const [selectedBank, setSelectedBank] = useState<string | undefined>(undefined);
  const [selectedDay, setSelectedDay] = useState<string | undefined>(undefined);
  const { dados, setDados } = useRegister();

  const handleTermsPress = () => {
    Linking.openURL('https://credliber.com');
  };

  const handleSubmit = () => {
    console.log(dados);
    navigation.navigate('Analising');
  };

  const handleSelectBank = (value: string) => {
    setSelectedBank(value);
    setDados((prevDados) => ({
      ...prevDados,
      bankAccount: {
        ...prevDados.bankAccount,
        bank: value,
      },
    }));
  };

  const handleSelectDay = (value: string) => {
    setSelectedDay(value);
    setDados((prevDados) => ({
      ...prevDados,
      bankAccount: {
        ...prevDados.bankAccount,
        payDay: value,
      },
    }));
  };

  const updateAgency = (value: string) => {
    setDados((prevDados) => ({
      ...prevDados,
      bankAccount: {
        ...prevDados.bankAccount,
        agency: value,
      },
    }));
  };

  const updateAccountBank = (value: string) => {
    setDados((prevDados) => ({
      ...prevDados,
      bankAccount: {
        ...prevDados.bankAccount,
        account: value,
      },
    }));
  };

  const updatePixKey = (value: string) => {
    setDados((prevDados) => ({
      ...prevDados,
      bankAccount: {
        ...prevDados.bankAccount,
        pixKey: value,
      },
    }));
  };

  useEffect(() => {
    console.log(dados);
  }, []);

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={styles.container}>
          <View style={styles.header}>
            <ButtonBack title="" subTitle="" />
          </View>
          <View>
            <Text style={styles.title}>Para finalizar insira suas {'\n'}informações bancárias</Text>
            <View>
              <Text style={styles.label}>Banco</Text>
              <RNPickerSelect
                onValueChange={handleSelectBank}
                value={dados.bankAccount.bank}
                items={banks.map((bank) => ({ label: bank.label, value: bank.value }))}
                placeholder={{ label: 'Selecione o banco', value: null }}
                style={{
                  inputIOS: styles.selectInput,
                  inputAndroid: styles.selectInput,
                }}
              />
              <View style={styles.row}>
                <View style={styles.halfInputContainer}>
                  <Text style={styles.label2}>Agência</Text>
                  <TextInput
                    keyboardType="numeric"
                    placeholder="0000-0"
                    placeholderTextColor="#9F9F9F"
                    value={dados.bankAccount.agency}
                    onChangeText={updateAgency}
                    style={styles.halfInput}
                  />
                </View>
                <View style={styles.halfInputContainer}>
                  <Text style={styles.label2}>Conta</Text>
                  <TextInput
                    keyboardType="numeric"
                    placeholder="0000000-0"
                    placeholderTextColor="#9F9F9F"
                    value={dados.bankAccount.account}
                    onChangeText={updateAccountBank}
                    style={styles.halfInput}
                  />
                </View>
              </View>
              <Text style={styles.label}>Chave Pix</Text>
              <TextInput
                placeholder="Digite sua chave Pix"
                placeholderTextColor="#9F9F9F"
                value={dados.bankAccount.pixKey}
                onChangeText={updatePixKey}
                style={styles.input}
              />
              <Text style={styles.label}>Dia do saque</Text>
              <RNPickerSelect
                onValueChange={handleSelectDay}
                items={days.map((day) => ({ label: day.label, value: day.value }))}
                placeholder={{ label: 'Defina o dia do saque', value: null }}
                style={{
                  inputIOS: styles.selectInput,
                  inputAndroid: styles.selectInput,
                }}
              />
            </View>
          </View>
          <View style={styles.continueButtonContainer}>
            <Text style={styles.termsText}>
              Ao criar sua conta você confirma estar de acordo {'\n'} com os{' '}
              <Text style={styles.termsLink} onPress={handleTermsPress}>
                Termos e condições Credliber
              </Text>
            </Text>
            <TouchableOpacity style={styles.continueButton} onPress={() => handleSubmit()}>
              <Text style={styles.continueButtonText}>Criar conta</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default BankInformations;
