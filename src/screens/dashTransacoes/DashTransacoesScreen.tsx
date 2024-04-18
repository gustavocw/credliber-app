import RightArrowBlack from '@assets/icons/dash/arrowRightBlack';
import MoneyIcon from '@assets/icons/dash/money';
import Loading from '@components/loading';
import { ButtonBack } from '@components/returnScreen/buttonBack';
import { useTransactions } from '@context/useTransactions';
import { useDashboardTransactions } from '@hooks/useDashboardTransactions';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@routes';
import ListTransaction from '@screens/dashBoard/transactionList/transactionList';
import { useEffect, useState } from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import IconAntDeseign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome6';
import IconMaterialIcon from 'react-native-vector-icons/MaterialIcons';

import NoTransactions from './components/noTransactions';
import { style } from './styles/index.style';
type DashboardTransacoesRouteProp = RouteProp<RootStackParamList, 'DashboardTransacoes'>;
type DashScreen = StackNavigationProp<RootStackParamList, 'InformationsClient'>;

export const DashTransacoes = () => {
  const { chartData, transactions, loadChartTransactions } = useTransactions();
  const navigation = useNavigation<DashScreen>();
  const route = useRoute<DashboardTransacoesRouteProp>();
  const [transactionCounts, setTransactionCounts] = useState<Record<string, number>>({});
  const chave = route.params?.chave;
  const {
    dataSimulation,
    selectedMonth,
    handleMonthClick,
    showInfo,
    toggleView,
    filterTransactionsByMonth,
    formattedDates,
    months,
  } = useDashboardTransactions(chave);
  const formattedValue = dataSimulation
    ? (dataSimulation.value / 100).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      })
    : '';

  const handleToScreen = () => {
    if (!dataSimulation) {
      return;
    }
    if (!dataSimulation.customer) {
      navigation.navigate('ProposalData', { data: dataSimulation });
    } else {
      navigation.navigate('InformationsClient', { data: dataSimulation });
    }
  };

  useEffect(() => {
    const monthCounts: Record<string, number> = {};
    chartData.forEach((data) => {
      const monthIndex = parseInt(data.date.split('-')[0], 10) - 1;
      const month = months[monthIndex];
      if (month) {
        monthCounts[month] = (monthCounts[month] || 0) + data.count;
      }
    });
    setTransactionCounts(monthCounts);
  }, [months]);

  useEffect(() => {
    const fetchData = async () => {
      await loadChartTransactions();
    };
    fetchData();
  }, [chave]);

  const renderMonths = () => (
    <FlatList
      data={months}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item}
      renderItem={({ item }) => {
        const count = transactionCounts[item] || 0;
        const baseHeight = 10;
        const height = Math.min(80, baseHeight + count / 10);

        return (
          <View style={style.monthContainer}>
            <TouchableOpacity style={style.button} onPress={() => handleMonthClick(item)}>
              <View
                style={{
                  ...style.bar,
                  height,
                  maxHeight: 80,
                  minHeight: 10,
                  backgroundColor: selectedMonth === item ? '#27AE60' : '#D0D0D0',
                  marginTop: -height + baseHeight,
                }}
              />
              <Text style={style.monthText}>{item}</Text>
            </TouchableOpacity>
          </View>
        );
      }}
    />
  );

  const nonEditableFields = ['CPF', 'RG', 'Data de Nascimento', 'Nome', 'Data de emissão'];
  const navigateToEditDataUserCustomer = (label: string, value: any) => {
    if (!nonEditableFields.includes(label)) {
      navigation.navigate('EditDataUserCustomer', { label, value });
    }
  };

  const renderUserData = () => {
    if (!dataSimulation) return <Loading />;

    const { customer } = dataSimulation;
    const formattedBirthDate = new Date(customer.birthDate).toLocaleDateString('pt-BR');
    const userFields = [
      { label: 'Nome', value: customer.name, editable: false },
      { label: 'CPF', value: customer.cpf, editable: false },
      { label: 'RG', value: customer.rg?.number, editable: false },
      {
        label: 'Data de emissão',
        value: new Date(customer.createdAt).toLocaleDateString('pt-BR'),
        editable: false,
      },
      { label: 'Banco', value: customer.bankAccount.bank, editable: true },
      { label: 'Agência', value: customer.bankAccount.agency, editable: true },
      { label: 'Conta', value: customer.bankAccount.account, editable: true },
      { label: 'Chave Pix', value: customer.bankAccount.pixKey, editable: true },
      { label: 'Data de Nascimento', value: formattedBirthDate, editable: false },
      { label: 'Email', value: customer.email, editable: true },
      { label: 'Telefone', value: customer.phone, editable: true },
      {
        label: 'Endereço',
        value: `${customer.address.street}, ${customer.address.number} - ${customer.address.state}`,
        editable: true,
      },
    ];

    return (
      <FlatList
        data={userFields}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={style.itemContainer}
            onPress={() => item.editable && navigateToEditDataUserCustomer(item.label, item.value)}
            disabled={!item.editable}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View>
                <Text style={style.textListSimple}>{item.label}</Text>
                <Text style={[style.textListBold, !item.editable && { color: '#9F9F9F' }]}>
                  {item.value}
                </Text>
              </View>
              {item.editable && <RightArrowBlack />}
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.label}
      />
    );
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      {dataSimulation ? (
        <View style={style.container}>
          <View style={style.containerBack}>
            <ButtonBack
              title={
                dataSimulation.customer?.name
                  ? dataSimulation?.customer.name
                  : dataSimulation?.customer?.cpf
              }
              subTitle=""
            />
          </View>
          <View style={style.containerBody}>
            <View style={style.dash}>
              <View style={style.containerTextAndSaldo}>
                <Text style={style.textTitleDash}>Saldo disponível para saque</Text>
                <Text style={style.textSaldoDash}>{`${formattedValue}`}</Text>
              </View>
            </View>
            <TouchableOpacity style={style.buttonSaque} onPress={() => handleToScreen()}>
              <View style={style.titleAndIcon}>
                <MoneyIcon style={style.iconMoney} />
                <Text style={style.textIcon}>Realizar Proposta</Text>
              </View>
              <IconMaterialIcon
                name="arrow-forward-ios"
                size={20}
                color="#FFF"
                style={style.iconArrow}
              />
            </TouchableOpacity>
            <View style={style.containerHistory}>
              <Text style={style.textTitleHistory}>Histórico de saques</Text>
              {renderMonths()}
            </View>
            <View style={style.containerHeaderTransacoes}>
              <TouchableOpacity style={style.ContainerTitleTransacoes} onPress={() => toggleView()}>
                <Icon
                  name="money-bills"
                  size={15}
                  color={showInfo === false ? '#000000' : '#AAA'}
                  style={style.iconMoneyTransacoes}
                />
                <Text style={style.titleTransacoes}>Transações</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={style.ContainerTitleInformacoes}
                onPress={() => toggleView()}>
                <IconAntDeseign
                  name="idcard"
                  size={17}
                  color={showInfo === true ? '#000000' : '#AAA'}
                  style={style.iconMoneyTransacoes}
                />
                <Text style={style.titleTransacoes}>Informações pessoais</Text>
              </TouchableOpacity>
            </View>
            <View style={style.transacoesItems}>
              {!showInfo ? (
                <View style={style.containerList}>
                  {!transactions.length ? (
                    <NoTransactions />
                  ) : (
                    <FlatList
                      data={formattedDates}
                      style={style.flatList}
                      renderItem={({ index }) => {
                        return (
                          <>
                            <Text style={style.textDates}>{formattedDates[index]}</Text>
                            <ListTransaction
                              transactions={filterTransactionsByMonth()}
                              style={style}
                            />
                          </>
                        );
                      }}
                    />
                  )}
                </View>
              ) : (
                <View style={style.containerList}>{renderUserData()}</View>
              )}
            </View>
          </View>
        </View>
      ) : (
        <Loading />
      )}
    </KeyboardAvoidingView>
  );
};
