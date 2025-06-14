import ContinueButton from '@components/buttonNext';
import { ButtonBack } from '@components/returnScreen/buttonBack';
import { useTransactions } from '@context/useTransactions';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@routes';
import { BankAccount, ClientData } from '@services/types/users.type';
import { ScrollView, Text, TextInput, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import { banks } from './bankList';
import { style } from './styles/index.style';
import ProgressBar from '../components/ProgressBar';
import CheckboxCred from '../components/checkBoxCred';
type InformationsScreen = StackNavigationProp<RootStackParamList, 'InformationsClient'>;
export const DataBanks = () => {
  const navigation = useNavigation<InformationsScreen>();
  const { dataClient, setDataClient } = useTransactions();
  const typePix = [{ label: 'Email', value: 'email' }];

  const totalFields = 6;
  const calculateProgress = () => {
    let filledFields = 0;
    filledFields += dataClient.bankAccount.bank ? 1 : 0;
    filledFields += dataClient.bankAccount.account ? 1 : 0;
    filledFields += dataClient.bankAccount.accountType ? 1 : 0;
    filledFields += dataClient.bankAccount.agency ? 1 : 0;
    filledFields += dataClient.bankAccount.pixKey ? 1 : 0;
    filledFields += dataClient.bankAccount.pixType ? 1 : 0;

    return filledFields / totalFields;
  };

  const updateField = (field: keyof BankAccount, value: string) => {
    setDataClient((prev: ClientData) => ({
      ...prev,
      bankAccount: {
        ...prev.bankAccount,
        [field]: value,
      },
    }));
  };

  const handlePoupança = (value: number) => {
    if (value === 1) {
      updateField('accountType', 'CP');
    } else {
      updateField('accountType', 'CC');
    }
  };

  return (
    <ScrollView style={{ flex: 1, width: 'auto' }} keyboardShouldPersistTaps="handled">
      <View style={style.container}>
        <View style={style.containerHeader}>
          <View style={style.containerHeaderProgresso}>
            <ProgressBar progress={1} />
            <ProgressBar progress={1} />
            <ProgressBar progress={calculateProgress()} />
          </View>
          <View style={style.titleContainer}>
            <ButtonBack title="Dados bancários do cliente" subTitle="" />
          </View>
        </View>
        <View style={style.form}>
          <View style={style.inputsGroup}>
            <View>
              <Text style={style.label}>Tipo de conta</Text>
              <View style={style.inputAreaGroupCheck}>
                <CheckboxCred label="Poupança" onCheck={() => handlePoupança(1)} />
                <CheckboxCred label="Conta corrente" onCheck={() => handlePoupança(2)} />
              </View>
            </View>
          </View>
          <Text style={style.label}>Banco</Text>
          <View style={style.containerInput}>
            <RNPickerSelect
              onValueChange={(value: string) => updateField('bank', value)}
              items={banks.map((bank) => ({ label: bank.label, value: bank.value }))}
              placeholder={{ label: 'Selecione o banco', value: null }}
              style={{
                inputIOS: style.selectInput,
                inputAndroid: style.selectInput,
              }}
            />
          </View>
          <View style={style.inputsGroupType}>
            <View>
              <Text style={style.label2}>Agência</Text>
              <View style={style.containerInputGroup}>
                <TextInput
                  onChangeText={(value) => updateField('agency', value)}
                  style={[style.inputAreaGroup]}
                  keyboardType="numeric"
                  placeholder="0000"
                />
              </View>
            </View>
            <View>
              <Text style={style.label2}>Conta</Text>
              <View style={style.containerInputGroup}>
                <TextInput
                  onChangeText={(value) => updateField('account', value)}
                  style={style.inputAreaGroup}
                  keyboardType="numeric"
                  placeholder="000000-0"
                />
                <View />
              </View>
            </View>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View>
              <RNPickerSelect
                onValueChange={(value: string) => updateField('pixType', value)}
                items={typePix.map((typePix) => ({ label: typePix.label, value: typePix.value }))}
                placeholder={{ label: 'Tipo', value: null }}
                style={{
                  inputIOS: style.typePixSelect,
                  inputAndroid: style.typePixSelect,
                }}
              />
            </View>
            <View>
              <Text style={style.label}>Chave Pix</Text>
              <View style={style.containerInput}>
                <TextInput
                  onChangeText={(value) => updateField('pixKey', value)}
                  placeholder="Insira uma chave pix válida"
                  style={style.inputAreaPix}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={style.continueButton}>
        <ContinueButton navigation={navigation} navigateTo="?" />
      </View>
    </ScrollView>
  );
};
