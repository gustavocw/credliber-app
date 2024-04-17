import ContinueButton from '@components/buttonNext';
import { ButtonBack } from '@components/returnScreen/buttonBack';
import { useTransactions } from '@context/useTransactions';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@routes';
import { Text, ScrollView, KeyboardAvoidingView, Platform, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import RNPickerSelect from 'react-native-picker-select';
import { SafeAreaView } from 'react-native-safe-area-context';

import { style } from './styles/index.style';
import ProgressBar from '../components/ProgressBar';
type InformationsScreen = StackNavigationProp<RootStackParamList, 'InformationsClient'>;
type InformationsScreenData = RouteProp<RootStackParamList, 'InformationsClient'>;

const states = ['SP', 'RJ'];
export const InformationsClient = () => {
  const navigation = useNavigation<InformationsScreen>();
  const route = useRoute<InformationsScreenData>();
  const data = route.params?.data;
  const { dataClient, setDataClient } = useTransactions();
  console.log('AQUI', data);

  const totalFields = 8;
  const calculateProgress = () => {
    let filledFields = 0;
    filledFields += dataClient.name ? 1 : 0;
    filledFields += dataClient.birthDate ? 1 : 0;
    filledFields += dataClient.cpf ? 1 : 0;
    filledFields += dataClient.rg ? 1 : 0;
    filledFields += dataClient.email ? 1 : 0;
    filledFields += dataClient.edit1 ? 1 : 0;
    filledFields += dataClient.edit2 ? 1 : 0;
    filledFields += dataClient.edit3 ? 1 : 0;

    return filledFields / totalFields;
  };

  const updateField = (field: keyof typeof dataClient, value: string) => {
    setDataClient((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <SafeAreaView edges={['bottom', 'left', 'right', 'top']}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <View style={style.container}>
            <View style={style.containerHeader}>
              <View style={style.containerHeaderProgresso}>
                <ProgressBar progress={calculateProgress()} />
                <ProgressBar progress={0} />
                <ProgressBar progress={0} />
              </View>
              <View style={style.titleContainer}>
                <ButtonBack title="Informações do cliente" subTitle="" />
              </View>
            </View>
            <View style={style.form}>
              <View style={style.containerLabelInput}>
                <Text style={style.label}>Nome Completo</Text>
              </View>
              <View style={style.containerInput}>
                <TextInput
                  value={dataClient.name}
                  onChangeText={(value) => updateField('name', value)}
                  placeholder="Sarah Fernandes"
                  style={style.inputArea}
                  autoFocus
                />
              </View>
              <View style={style.containerLabelInput}>
                <Text style={style.label}>E-mail</Text>
              </View>
              <View style={style.containerInput}>
                <TextInput
                  value={dataClient.email}
                  onChangeText={(value) => updateField('email', value)}
                  placeholder="exemplo@exemplo.com"
                  style={style.inputArea}
                  autoFocus
                />
              </View>
              <View style={style.containerLabelInput}>
                <Text style={style.label}>CPF</Text>
              </View>
              <View style={style.containerInput}>
                <TextInput
                  value={dataClient.cpf}
                  onChangeText={(value) => updateField('cpf', value)}
                  placeholder="999.999.999-00"
                  style={style.inputArea}
                  keyboardType="numeric"
                />
              </View>
              <View style={style.containerLabelInput}>
                <Text style={style.label}>RG</Text>
              </View>
              <View style={style.containerInput}>
                <TextInput
                  value={dataClient.rg}
                  onChangeText={(value) => updateField('rg', value)}
                  placeholder="999.999-00"
                  style={style.inputArea}
                  keyboardType="numeric"
                />
              </View>
              <View style={style.inputsGroup}>
                <View style={style.containerGroup2}>
                  <Text style={style.label2}>Data de emissão</Text>
                  <View style={style.containerInputGroup}>
                    <TextInput
                      value={dataClient.edit1}
                      onChangeText={(value) => updateField('edit1', value)}
                      placeholder="00/00/0000"
                      style={style.inputAreaGroup}
                      keyboardType="numeric"
                    />
                  </View>
                </View>
                <View style={style.containerGroup}>
                  <Text style={style.label2}>UF de emissão</Text>
                  <View style={style.containerUf}>
                    <RNPickerSelect
                      value={dataClient?.edit2}
                      onValueChange={(value: string) => updateField('edit2', value)}
                      items={states.map((state) => ({ label: state, value: state }))}
                      placeholder={{ label: 'Selecione o estado', value: null }}
                      style={{
                        inputIOS: style.selectInput,
                        inputAndroid: style.selectInput,
                      }}
                    />
                  </View>
                </View>
              </View>
              <View style={style.containerLabelInput}>
                <Text style={style.label}>Órgão emissor</Text>
              </View>
              <View style={style.containerInput}>
                <TextInput
                  value={dataClient?.edit3}
                  onChangeText={(value) => updateField('edit3', value)}
                  placeholder="SSP"
                  style={style.inputArea}
                />
              </View>
              <View style={style.containerLabelInput}>
                <Text style={style.label}>Data de nascimento</Text>
              </View>
              <View style={style.containerInput}>
                <TextInput
                  value={dataClient.birthDate}
                  onChangeText={(value) => updateField('birthDate', value)}
                  placeholder="00/00/0000"
                  style={style.inputArea}
                  keyboardType="numeric"
                />
              </View>
              <View style={style.continueButton}>
                <ContinueButton navigation={navigation} navigateTo="AddressClient" />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};
