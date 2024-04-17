import RightArrowBlack from '@assets/icons/dash/arrowRightBlack';
import { ButtonBack } from '@components/returnScreen/buttonBack';
import { useAuth } from '@context/authContext';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@routes';
import { banks } from '@screens/profile/security/lists/bankList';
import { days } from '@screens/profile/security/lists/days';
import { style } from '@screens/profile/security/styles/index.styles';
import { editUser } from '@services/editUser';
import { BankAccount, EditUserInput } from '@services/types/users.type';
import React, { useEffect, useState } from 'react';
import {
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  View,
  TouchableOpacity,
  Switch,
  TextInput,
  Modal,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import SaveCancelButton from '../components/SaveCancelButton';

type SecurityScreenParams = StackNavigationProp<RootStackParamList>;

const SecurityScreen = () => {
  const navigation = useNavigation<SecurityScreenParams>();
  const [isEnabled, setIsEnabled] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedBank, setSelectedBank] = useState<string | undefined>(undefined);
  const [selectedDay, setSelectedDay] = useState<string | undefined>(undefined);

  const { user, refreshData } = useAuth();

  const [bankFormData, setBankFormData] = useState<Partial<BankAccount>>({
    bank: '',
    agency: '',
    account: '',
    accountType: '',
    pixKey: '',
    payDay: 0,
  });

  useEffect(() => {
    if (user && user.bankAccount) {
      setBankFormData(user.bankAccount);
      setSelectedBank(user.bankAccount.bank);
    }
  }, [user]);

  const handleSwitchChange = (newValue: boolean) => {
    setIsEnabled(newValue);
    if (!newValue) setIsModalVisible(false);
  };

  const handleModalConfirm = () => {
    setIsEnabled(true);
    setIsModalVisible(false);
  };

  const handleModalCancel = () => setIsModalVisible(false);

  const handleChange = (name: keyof BankAccount, value: string) => {
    setBankFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    const updatedUserData: Partial<EditUserInput> = {
      bankAccount: bankFormData as BankAccount,
    };
    try {
      await editUser(updatedUserData as EditUserInput);
      await refreshData();
      navigation.goBack();
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancel = () => {
    navigation.goBack();
  };
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={style.container}>
          <View style={style.containerHeader}>
            <View style={style.titleContainer}>
              <ButtonBack title="Segurança e dados bancários" subTitle="" />
            </View>
          </View>
          <View style={style.subTitle}>
            <Text style={style.textSubTitle}>Preferencias</Text>
          </View>
          <View style={style.buttonContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('RecoveryScreen')}
              style={style.button}>
              <Text style={style.buttonText}>Alterar Senha</Text>
              <RightArrowBlack />
            </TouchableOpacity>
          </View>
          <View style={style.buttonContainer}>
            <TouchableOpacity style={[style.button, style.logged]}>
              <Text style={style.buttonText}>Manter conta logada</Text>
              <Switch
                trackColor={{ false: '#767577', true: '#EA0356' }}
                thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={handleSwitchChange}
                value={isEnabled}
                style={style.switchContainer}
              />
            </TouchableOpacity>
          </View>
          <View style={[style.subTitle, style.informationsText]}>
            <Text style={style.textSubTitle}>Informações bancárias</Text>
          </View>
          <View style={[style.subTitle, style.informationsText]}>
            <Text style={style.title2}>Saques</Text>
            <Text style={style.textSubTitle}>
              Defina o dia da semana em que os saques serão realizados automaticamente para sua
              conta bancária.
            </Text>
          </View>
          <View>
            <Text style={[style.label, style.marginLabel]}>Dia do saque</Text>
            <View style={style.containerInput}>
              <RNPickerSelect
                onValueChange={(value: string) => setSelectedDay(value)}
                items={days.map((day) => ({ label: day.label, value: day.value }))}
                placeholder={{ label: 'Selecione o dia de saque', value: null }}
                style={{
                  inputIOS: style.selectInput,
                  inputAndroid: style.selectInput,
                }}
                value={selectedDay}
              />
            </View>
            <Text style={style.label}>Banco</Text>
            <View style={style.containerInput}>
              <RNPickerSelect
                onValueChange={(value) => {
                  setSelectedBank(value);
                  handleChange('bank', value);
                }}
                value={selectedBank}
                items={banks.map((bank) => ({ label: bank.label, value: bank.value }))}
                placeholder={{ label: 'Selecione o banco', value: null }}
                style={{
                  inputIOS: style.selectInput,
                  inputAndroid: style.selectInput,
                }}
              />
            </View>
            <View style={style.inputsGroup}>
              <View style={style.containerGroup2}>
                <Text style={style.label2}>Agência</Text>
                <View style={style.containerInputGroup}>
                  <TextInput
                    onChangeText={(text) => handleChange('agency', text)}
                    value={bankFormData.agency}
                    placeholder="0000-0"
                    style={[style.inputAreaGroup, { padding: 20 }]}
                    keyboardType="numeric"
                  />
                </View>
              </View>
              <View style={style.containerGroup}>
                <Text style={style.label2}>Conta</Text>
                <View style={style.containerInputGroup}>
                  <TextInput
                    onChangeText={(text) => handleChange('account', text)}
                    value={bankFormData.account}
                    placeholder="0000000-0"
                    style={[style.inputAreaGroup, { padding: 20 }]}
                    keyboardType="numeric"
                  />
                </View>
              </View>
            </View>
            <Text style={style.label}>Chave Pix</Text>
            <View style={style.containerInput}>
              <TextInput
                onChangeText={(text) => handleChange('pixKey', text)}
                placeholder="Insira uma chave pix válida"
                value={bankFormData.pixKey}
                style={style.inputArea}
              />
            </View>
          </View>
          <View style={style.buttonContainer2}>
            <SaveCancelButton onSave={handleSave} onCancel={handleCancel} />
          </View>
        </View>
      </ScrollView>
      <Modal
        animationType="slide"
        transparent
        visible={isModalVisible}
        onRequestClose={handleModalCancel}>
        <View style={style.centeredView}>
          <View style={style.modalView}>
            <Text style={style.modalTitle}>Ativar “Manter conta logada”?</Text>
            <Text style={style.modalText}>
              Ao ativar esta opção, não será mais necessário fazer login novamente sempre que
              acessar o aplicativo.
            </Text>
            <View style={style.modalButtons}>
              <TouchableOpacity onPress={handleModalCancel} style={style.confirmButtonModal}>
                <Text style={style.buttonTextConfirmModal}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleModalConfirm} style={style.cancelButtonModal}>
                <Text style={style.buttonTextCancelMdal}>Ativar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
};

export default SecurityScreen;
