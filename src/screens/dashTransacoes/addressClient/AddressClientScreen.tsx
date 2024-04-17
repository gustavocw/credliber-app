import ContinueButton from '@components/buttonNext';
import { ButtonBack } from '@components/returnScreen/buttonBack';
import { useTransactions } from '@context/useTransactions';
import { useFetchAddress } from '@hooks/validateCep';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@routes';
import { Address, ClientData } from '@services/types/users.type';
import { useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, View } from 'react-native';

import { style } from './styles/index.style';
import ProgressBar from '../components/ProgressBar';

type RegisterScreenNavigationProps = StackNavigationProp<RootStackParamList, 'Password'>;

export const AddressClient = () => {
  const navigation = useNavigation<RegisterScreenNavigationProps>();
  const { dataClient, setDataClient } = useTransactions();
  const { address, fetchAddress } = useFetchAddress();
  const [cep, setCep] = useState(dataClient.address.zipCode || '');

  console.log(dataClient);

  const totalFields = 7;
  const calculateProgress = () => {
    let filledFields = 0;
    filledFields += dataClient.address.zipCode ? 1 : 0;
    filledFields += dataClient.address.city ? 1 : 0;
    filledFields += dataClient.address.complement ? 1 : 0;
    filledFields += dataClient.address.neighborhood ? 1 : 0;
    filledFields += dataClient.address.number ? 1 : 0;
    filledFields += dataClient.address.state ? 1 : 0;
    filledFields += dataClient.address.street ? 1 : 0;

    return filledFields / totalFields;
  };

  const updateField = (field: keyof Address, value: string) => {
    setDataClient((prev: ClientData) => ({
      ...prev,
      address: {
        ...prev.address,
        [field]: value,
      },
    }));
  };

  useEffect(() => {
    const fetchAndFillAddress = async () => {
      if (cep.length === 8) {
        await fetchAddress(cep);
        console.log(address);
        if (address) {
          updateField('street', address.street);
          updateField('neighborhood', address.neighborhood);
          updateField('city', address.city);
          updateField('state', address.state);
        }
      }
    };
    fetchAndFillAddress();
  }, [cep]);

  const handleChangeCep = () => {
    updateField('zipCode', cep);
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={style.container}>
          <View style={style.containerHeader}>
            <View style={style.containerHeaderProgresso}>
              <ProgressBar progress={1} />
              <ProgressBar progress={calculateProgress()} />
              <ProgressBar progress={0} />
            </View>
            <View style={style.titleContainer}>
              <ButtonBack title="Endereço do cliente" subTitle="" />
            </View>
          </View>
          <View style={style.form}>
            <Text style={style.label}>CEP</Text>
            <TextInput
              keyboardType="numeric"
              placeholder="00000-000"
              placeholderTextColor="#9F9F9F"
              style={style.input}
              value={cep}
              onChangeText={setCep}
              onBlur={() => handleChangeCep()}
            />
            <Text style={style.label}>Endereço</Text>
            <TextInput
              placeholder="Seu endereço"
              placeholderTextColor="#9F9F9F"
              style={style.input}
              value={dataClient.address.street}
              onChangeText={(value) => updateField('street', value)}
            />
            <View style={style.row}>
              <View style={style.halfInputContainer}>
                <Text style={style.label2}>Número</Text>
                <TextInput
                  keyboardType="numeric"
                  placeholder="Nº"
                  placeholderTextColor="#9F9F9F"
                  style={style.halfInput}
                  value={dataClient.address.number}
                  onChangeText={(value) => updateField('number', value)}
                />
              </View>
              <View style={style.halfInputContainer}>
                <Text style={style.label2}>Complemento</Text>
                <TextInput
                  placeholder="Apto, bloco, etc."
                  placeholderTextColor="#9F9F9F"
                  style={style.halfInput}
                  value={dataClient.address.complement}
                  onChangeText={(value) => updateField('complement', value)}
                />
              </View>
            </View>
            <Text style={style.label}>Bairro</Text>
            <TextInput
              placeholder="Bairro"
              placeholderTextColor="#9F9F9F"
              style={style.input}
              value={dataClient.address.neighborhood}
              onChangeText={(value) => updateField('neighborhood', value)}
            />
            <View style={style.row}>
              <View style={style.halfInputContainer}>
                <Text style={style.label2}>Cidade</Text>
                <TextInput
                  placeholder="Cidade"
                  placeholderTextColor="#9F9F9F"
                  style={style.halfInput}
                  value={dataClient.address.city}
                  onChangeText={(value) => updateField('city', value)}
                />
              </View>
              <View style={style.halfInputContainer}>
                <Text style={style.label2}>UF</Text>
                <TextInput
                  placeholder="UF"
                  placeholderTextColor="#9F9F9F"
                  style={style.halfInput}
                  value={dataClient.address.state}
                  onChangeText={(value) => updateField('state', value)}
                />
              </View>
            </View>
            <View style={style.buttonNext}>
              <ContinueButton navigation={navigation} navigateTo="DataBanks" />
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
