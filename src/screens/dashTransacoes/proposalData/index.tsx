import ArrowRightWhite from '@assets/icons/dash/arrowRightWhite';
import Loading from '@components/loading';
import { ButtonBack } from '@components/returnScreen/buttonBack';
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
  const navigation = useNavigation<ProposalDataScreenNavigationProp>();
  console.log(dataTransaction);

  const renderUserData = () => {
    if (!dataTransaction) return <Loading />;

    const { customer } = dataTransaction;
    const formattedBirthDate = new Date(customer.birthDate).toLocaleDateString('pt-BR');
    const userFields = [
      { label: 'Nome', value: customer.name },
      { label: 'CPF', value: customer.cpf },
      { label: 'RG', value: customer.rg },
      { label: 'Data de emissão', value: new Date(customer.createdAt).toLocaleDateString('pt-BR') },
      { label: 'Banco', value: customer.bankAccount.bank },
      { label: 'Agência', value: customer.bankAccount.agency },
      { label: 'Conta', value: customer.bankAccount.account },
      { label: 'Chave Pix', value: customer.bankAccount.pixKey },
      { label: 'Data de Nascimento', value: formattedBirthDate },
      { label: 'Email', value: customer.email },
      { label: 'Telefone', value: customer.phone },
      {
        label: 'Endereço',
        value: `${customer.address.street}, ${customer.address.number} - ${customer.address.state}`,
      },
    ];

    return (
      <FlatList
        data={userFields}
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

  const formattedValue = dataTransaction
    ? (dataTransaction.value / 100).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      })
    : '';

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
            <TouchableOpacity
              onPress={() => navigation.navigate('SuccessTransaction', { data: dataTransaction })}
              style={styles.continueButton}>
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
