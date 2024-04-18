import ArrowRightWhite from '@assets/icons/dash/arrowRightWhite';
import Loading from '@components/loading';
import { ButtonBack } from '@components/returnScreen/buttonBack';
import { useTransactions } from '@context/useTransactions';
import { useRoute, RouteProp, useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '@routes';
import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import { styles } from './styles/index.style';

type ProposalDataRouteProp = RouteProp<RootStackParamList, 'ProposalData'>;
type ProposalDataScreenNavigationProp = NavigationProp<RootStackParamList, 'ProposalData'>;

export const ProposalData = () => {
  const route = useRoute<ProposalDataRouteProp>();
  const dataTransaction = route.params?.data;
  const valueTransaction = route.params?.data?.value;
  const navigation = useNavigation<ProposalDataScreenNavigationProp>();
  const { dataClient } = useTransactions();

  const renderUserData = () => {
    if (!dataTransaction && !dataClient) return <Loading />;

    const isTransactionData = !!dataTransaction && !dataClient;
    const userData = isTransactionData ? dataTransaction.customer : dataClient;
    const formattedBirthDate = isTransactionData
      ? new Date(userData.birthDate).toLocaleDateString('pt-BR')
      : userData.birthDate;
    const userFields = [
      { label: 'Nome', value: userData.name },
      { label: 'CPF', value: userData.cpf },
      { label: 'RG', value: userData.rg?.number },
      {
        label: 'Data de emissão',
        value:
          isTransactionData && 'createdAt' in userData
            ? new Date(userData.createdAt).toLocaleDateString('pt-BR')
            : null,
      },
      { label: 'Banco', value: userData.bankAccount.bank },
      { label: 'Agência', value: userData.bankAccount.agency },
      { label: 'Conta', value: userData.bankAccount.account },
      { label: 'Chave Pix', value: userData.bankAccount.pixKey },
      { label: 'Data de Nascimento', value: formattedBirthDate },
      { label: 'Email', value: userData.email },
      {
        label: 'Telefone',
        value: isTransactionData && 'phone' in userData ? userData.phone : null,
      },
      {
        label: 'Endereço',
        value: `${userData.address.street}, ${userData.address.number} - ${userData.address.state}`,
      },
    ];

    const filteredUserFields = userFields.filter(
      (field) => field.value !== null && field.value !== undefined
    );

    return (
      <FlatList
        data={filteredUserFields}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.textListSimple}>{item.label}</Text>
            <Text style={styles.textListBold}>{item.value}</Text>
          </View>
        )}
        keyExtractor={(item) => item.label}
      />
    );
  };

  const handleSendTransaction = () => {
    navigation.navigate('SuccessTransaction', { data: dataTransaction });
  };

  const formattedValue = dataTransaction
    ? (dataTransaction.value / 100).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      })
    : (valueTransaction ? valueTransaction / 100 : 0).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      });

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View>
        <View style={styles.container}>
          <View style={styles.containerBack}>
            <ButtonBack title="Dados da proposta" subTitle="Revise os detalhes da proposta." />
          </View>
          <View style={styles.content2}>
            <Text style={styles.textSimple}>Valor Proposto</Text>
            <Text style={styles.textBold}>{formattedValue}</Text>
          </View>
          <View style={styles.listDetails}>{renderUserData()}</View>
          <View style={styles.footer}>
            <TouchableOpacity style={styles.buttonEdit}>
              <Text style={styles.textListSimple}>Editar dados</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleSendTransaction()} style={styles.continueButton}>
              <View style={styles.continueButtonContent}>
                <Text style={styles.continueButtonText}>Confirmar e realizar proposta</Text>
                <ArrowRightWhite style={styles.arrow} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
