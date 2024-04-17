import RightArrow from '@assets/icons/dash/arrowRight';
import EyeOff from '@assets/icons/dash/eyeOff';
import EyeOn from '@assets/icons/dash/eyeOn';
import MoreIcon from '@assets/icons/dash/moreIcon';
import SearchIcon from '@assets/icons/dash/searchIcon';
import LoadingSpinner from '@components/loadingSpinner';
import { useAuth } from '@context/authContext';
import { useTransactions } from '@context/useTransactions';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@routes';
import { useEffect, useState } from 'react';
import { Image, KeyboardAvoidingView, Platform, Text, View } from 'react-native';
import { FlatList, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import { style } from './styles/index.style';
import ListTransaction from './transactionList/transactionList';

type DashTypeNavigation = StackNavigationProp<RootStackParamList, 'Dashboard'>;
export const DashBoardScreen = () => {
  const navigator = useNavigation<DashTypeNavigation>();
  const [showBalance, setShowBalance] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const { user } = useAuth();
  const imageUrl = `https://razzo-development.b-cdn.net/${user?.profileImageUrl}`;
  const { formattedDates, transactionCounts, commission, transactions, loadTransactions } =
    useTransactions();

  const valueFormatted = commission
    ? (commission.amount / 100).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      })
    : 'R$0,00';

  const valuePendingFormated = commission
    ? (commission.pending / 100).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      })
    : 'R$0,00';

  const transactionTypes = [
    { key: 'completed', name: 'Concluído', count: transactionCounts.completed },
    { key: 'pending', name: 'Em andamento', count: transactionCounts.pending },
    { key: 'refused', name: 'Recusado', count: transactionCounts.refused },
  ];

  useEffect(() => {
    const fetchData = async () => {
      loadTransactions();
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      loadTransactions({ search: searchTerm });
    }
  }, [searchTerm]);

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <SafeAreaView edges={['right', 'bottom', 'left', 'top']} style={{ flex: 1 }}>
        <View style={style.container}>
          <View style={style.containerTopDash}>
            <View style={style.containerPerfil}>
              <View style={style.containerImagePerfil}>
                <TouchableOpacity onPress={() => navigator.navigate('Profile')}>
                  <Image style={style.profileImage} source={{ uri: imageUrl }} />
                </TouchableOpacity>
              </View>
              <Text style={style.textName}>{user?.name}</Text>
            </View>
            <View style={style.containerIcons}>
              <TouchableOpacity onPress={() => setShowBalance(!showBalance)}>
                {showBalance ? <EyeOff style={style.icons} /> : <EyeOn style={style.icons} />}
              </TouchableOpacity>
            </View>
          </View>
          <View style={style.painel}>
            <View style={style.headerCard}>
              <Text style={style.textComission}>Comissão</Text>
              <View style={style.saque}>
                <Text style={style.textSaque}>Sacar agora </Text>
                <RightArrow style={style.seta} />
              </View>
            </View>
            <View style={style.centerCard}>
              <Text style={style.saldo}>{showBalance ? '**.***,**' : `${valueFormatted}`}</Text>
            </View>
            <View style={style.bottomCard}>
              <Text style={style.textBottom}>
                {showBalance ? '****** a liberar' : `${valuePendingFormated} a liberar`}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={style.newSimulation}
            onPress={() => navigator.navigate('Simulation')}>
            <View style={style.containerButtonSimulation}>
              <View style={style.textSimulationContainer}>
                <Text style={style.textSimulation}>Nova simulação</Text>
                <Text style={style.descriptionSimulation}>
                  Simule uma transferência em minutos{' '}
                </Text>
              </View>
              <View style={style.buttonAdd}>
                <MoreIcon style={style.iconAdd} />
              </View>
            </View>
          </TouchableOpacity>
          <View style={style.containerTransacoes}>
            <View style={style.title}>
              <View style={style.containerTextTransacoes}>
                <Text style={style.textTransacoes}>TRANSAÇÕES</Text>
              </View>
            </View>
            <View style={style.inputSearch}>
              <SearchIcon style={style.iconSearch} />
              <TextInput
                placeholder="Pesquisar cliente"
                style={style.inputArea}
                onChangeText={setSearchTerm}
                value={searchTerm}
              />
            </View>
            <View style={style.containerScrow}>
              <FlatList
                data={transactionTypes}
                renderItem={({ item }) => {
                  return (
                    <>
                      <View style={style.itemsScrow}>
                        <Text style={style.textBoxes}>
                          {item.name} {`(${item.count})`}
                        </Text>
                      </View>
                    </>
                  );
                }}
                showsHorizontalScrollIndicator={false}
                horizontal
                keyExtractor={(item) => item.key}
              />
            </View>
            <View style={style.transacoesHoje}>
              {transactions.length === 0 ? (
                <View
                  style={{
                    height: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <LoadingSpinner />
                </View>
              ) : (
                <FlatList
                  data={formattedDates}
                  style={style.flatList}
                  showsVerticalScrollIndicator={false}
                  renderItem={({ index }) => {
                    return (
                      <>
                        <Text style={style.textDates}>{formattedDates[index]}</Text>
                        <ListTransaction transactions={transactions} style={style} />
                      </>
                    );
                  }}
                />
              )}
            </View>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};
