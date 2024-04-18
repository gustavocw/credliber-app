import { ButtonBack } from '@components/returnScreen/buttonBack';
import { useRegister } from '@context/useRegister';
import { useFetchAddress } from '@hooks/validateCep';
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

import { styles } from './styles/index.styles';
import ContinueButton from '../components/continueButton';
import { TextInputMask } from 'react-native-masked-text';

const Informations = () => {
  const [cep, setCep] = useState('');
  const { dados, setDados } = useRegister();
  const { address, fetchAddress } = useFetchAddress();

  useEffect(() => {
    console.log(dados);
  }, []);

  const updateEmail = (adressMail: string) => {
    setDados((prev) => ({ ...prev, email: adressMail }));
  };

  const updateTel = (tel: string) => {
    console.log()
    setDados((prev) => ({ ...prev, phone: tel.replace(/^[(.*?)]/g, "").replace(/([(.*?)$])/g, "").replace(/\-/, "").replace(/\s/,"") }));
  };

  const updateNumber = (numberHome: string) => {
    setDados((prevDados) => ({
      ...prevDados,
      address: {
        ...prevDados.address,
        number: numberHome,
      },
    }));
  };

  const updateComplement = (complementHome: string) => {
    setDados((prevDados) => ({
      ...prevDados,
      address: {
        ...prevDados.address,
        complement: complementHome,
      },
    }));
  };

  const handleAdressChange = async (newCep: string) => {
    await fetchAddress(newCep);
    if (address) {
      setDados((prevDados) => ({
        ...prevDados,
        address: {
          ...prevDados.address,
          zipCode: newCep,
          street: address.street,
          neighborhood: address.neighborhood,
          city: address.city,
          state: address.state,
        },
      }));
    }
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={styles.container}>
          <View style={{ marginVertical: 10 }}>
            <ButtonBack title="" subTitle="" />
            <Text style={styles.title}>Adicione suas informações {'\n'}de conta abaixo</Text>
          </View>
          <View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>E-mail</Text>
              <TextInput
                placeholder="exemplo@dominio.com"
                placeholderTextColor="#9F9F9F"
                style={styles.input}
                value={dados.email}
                onChangeText={updateEmail}
              />
              <Text style={styles.label}>Telefone/Whatsapp</Text>
              <TextInputMask 
                placeholder="(00) 99999-9999"
                options={{
                  maskType:"BRL",
                  withDDD:true,
                }}
                placeholderTextColor="#9F9F9F"
                type={'cel-phone'}
                style={styles.input}
                value={dados.phone}
                onChangeText={updateTel}
              />
              <Text style={styles.label}>CEP</Text>
              <TextInput
                keyboardType="numeric"
                placeholder="00000-000"
                placeholderTextColor="#9F9F9F"
                style={styles.input}
                value={cep}
                onChangeText={(value) => value.length === 5? setCep(`${value}-`):setCep(value)}
                onBlur={() => handleAdressChange(cep.replace("-",""))}
              />
              <Text style={styles.label}>Bairro</Text>
              <TextInput
                placeholder="Bairro"
                placeholderTextColor="#9F9F9F"
                style={styles.input}
                value={dados.address.neighborhood}
              />
              <View style={styles.row}>
                <View style={styles.halfInputContainer}>
                  <Text style={styles.label2}>Cidade</Text>
                  <TextInput
                    placeholder="Cidade"
                    placeholderTextColor="#9F9F9F"
                    style={styles.halfInput}
                    value={dados.address.city}
                  />
                </View>
                <View style={styles.halfInputContainer}>
                  <Text style={styles.label2}>UF</Text>
                  <TextInput
                    placeholder="UF"
                    placeholderTextColor="#9F9F9F"
                    style={styles.halfInput}
                    value={dados.address.state}
                  />
                </View>
              </View>
              <Text style={styles.label}>Endereço</Text>
              <TextInput
                placeholder="Seu endereço"
                placeholderTextColor="#9F9F9F"
                style={styles.input}
                value={dados.address.street}
              />
              <View style={styles.row}>
                <View style={styles.halfInputContainer}>
                  <Text style={styles.label2}>Número</Text>
                  <TextInput
                    keyboardType="numeric"
                    placeholder="Nº"
                    placeholderTextColor="#9F9F9F"
                    style={styles.halfInput}
                    value={dados.address.number}
                    onChangeText={updateNumber}
                  />
                </View>
                <View style={styles.halfInputContainer}>
                  <Text style={styles.label2}>Complemento</Text>
                  <TextInput
                    placeholder="Apto, bloco, etc."
                    placeholderTextColor="#9F9F9F"
                    value={dados.address.complement}
                    onChangeText={updateComplement}
                    style={styles.halfInput}
                  />
                </View>
              </View>
            </View>
          </View>
          <View>
            <ContinueButton screen="Password" />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Informations;
