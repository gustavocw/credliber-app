import { ButtonBack } from '@components/returnScreen/buttonBack';
import { useTransactions } from '@context/useTransactions';
import { useFetchAddress } from '@hooks/validateCep';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@routes';
import { Address, ClientData } from '@services/types/users.type';
import { useCallback, useEffect, useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/AntDesign';

import { style } from './styles/index.style';
import ProgressBar from '../components/ProgressBar';

type RegisterScreenNavigationProps = StackNavigationProp<RootStackParamList, 'AddressClient'>;
type AdressRouteProp = RouteProp<RootStackParamList, 'AddressClient'>;

export const AddressClient = () => {
  const navigation = useNavigation<RegisterScreenNavigationProps>();
  const { dataClient, setDataClient } = useTransactions();
  const { address, fetchAddress } = useFetchAddress();
  const [cep, setCep] = useState(dataClient.address.zipCode || '');
  const [fetched, setFetched] = useState(false);
  const route = useRoute<AdressRouteProp>();
  const dataTransaction = route.params?.data;
  const valueSimulation = route.params?.data?.value;
  console.log(valueSimulation);

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

  const handleFetchAddress = useCallback(async () => {
    if (cep.length === 8 && !fetched) {
      await fetchAddress(cep);
      if (address) {
        setDataClient((prev) => ({
          ...prev,
          address: {
            ...prev.address,
            ...address,
          },
        }));
        setFetched(true);
      }
    }
  }, [cep, fetched, fetchAddress, setDataClient]);

  useEffect(() => {
    handleFetchAddress();
  }, [cep, handleFetchAddress]);

  const handleChangeCep = (newCep: string) => {
    if (newCep !== cep) {
      setCep(newCep);
      setFetched(false);
    }
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <SafeAreaView edges={['bottom', 'left', 'right', 'top']}>
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
              <View style={style.containerLabelInput}>
                <Text style={style.label}>CEP</Text>
              </View>
              <TextInput
                keyboardType="numeric"
                placeholder="00000-000"
                placeholderTextColor="#9F9F9F"
                style={style.input}
                value={cep}
                onChangeText={setCep}
                onBlur={() => handleChangeCep}
              />
              <View style={style.containerLabelInput}>
                <Text style={style.label}>Endereço</Text>
              </View>
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
              <View style={style.containerLabelInput}>
                <Text style={style.label}>Bairro</Text>
              </View>
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
              <View style={[style.buttonNext, { marginLeft: 270 }]}>
                <TouchableOpacity
                  style={style.buttonNext}
                  onPress={() => navigation.navigate('DataBanks', { data: dataTransaction })}>
                  <Icon name="rightcircle" size={50} color="#EA0356" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};
