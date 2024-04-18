import { Feather } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DashBoardScreen } from '@screens/dashBoard/dashboardScreen';
import { DashTransacoes } from '@screens/dashTransacoes/DashTransacoesScreen';
import { AddressClient } from '@screens/dashTransacoes/addressClient/AddressClientScreen';
import { DataBanks } from '@screens/dashTransacoes/dataBanks/DataBanksScreen';
import { EditDataUserCustomer } from '@screens/dashTransacoes/editDataUserCustomer';
import { InformationsClient } from '@screens/dashTransacoes/informationsClient/InformationsClientScreen';
import { ProposalData } from '@screens/dashTransacoes/proposalData';
import { SuccessTransaction } from '@screens/dashTransacoes/proposalData/successTransaction/SuccessTransaction';
import { DetailsTransection } from '@screens/detailsTransection/DetailsTransectionScreen';
import LoginScreen from '@screens/login';
import ProfileScreen from '@screens/profile';
import { CodeRecoveryScreen } from '@screens/profile/security/codeRecovery';
import { RecoveryScreen } from '@screens/profile/security/recoveryPassword';
import RegisterScreen from '@screens/register';
import { AnalisingView } from '@screens/register/analising/Analising';
import Informations from '@screens/register/informations/informationsScreen';
import PasswordScreen from '@screens/register/password/passwordScreen';
import { AprovedScreen } from '@screens/register/registerAproved/AprovedScreen';
import { DeniedScreen } from '@screens/register/registerDenied/DeniedScreen';
import { SimulationScreen } from '@screens/simulation/SimulationScreen';
import { DataSimulation, Transaction } from '@services/types/transactions.type';
import { Text, View, StyleSheet } from 'react-native';

import EditAdressScreen from '../screens/profile/adress/index';
import PersonalDataScreen from '../screens/profile/personalData/index';
import SecurityScreen from '../screens/profile/security/index';
import BankInformations from '../screens/register/bank/bankInformations';

import HomeScreen from '@/screens/home';
import InitialPage from '@/screens/initialPage';

interface DetailsTransectionParams {
  transacao: Transaction;
}

interface DetailsEditDataUserCustomer {
  label: string;
  value: any;
}

interface DetailsClientTransaction {
  data?: DataSimulation;
}
export type RootStackParamList = {
  Initial: typeof InitialPage | undefined;
  Login: typeof LoginScreen | undefined;
  Register: typeof RegisterScreen | undefined;
  Password: typeof PasswordScreen | undefined;
  Profile: typeof ProfileScreen | undefined;
  Informations: typeof Informations | undefined;
  BankInformations: typeof BankInformations | undefined;
  Analising: typeof AnalisingView | undefined;
  Aproved: typeof AprovedScreen | undefined;
  Denied: typeof DeniedScreen | undefined;
  Dashboard: typeof DashBoardScreen | undefined;
  Simulation: typeof SimulationScreen | undefined;
  EditDataUserCustomer: DetailsEditDataUserCustomer;
  DashboardTransacoes: { chave: string } | undefined;
  InformationsClient: DetailsClientTransaction;
  ProposalData: DetailsClientTransaction;
  AddressClient: DetailsClientTransaction;
  DataBanks: DetailsClientTransaction;
  DetailsTransection: DetailsTransectionParams;
  PersonalDataScreen: typeof PersonalDataScreen | undefined;
  EditAdressScreen: typeof EditAdressScreen | undefined;
  SecurityScreen: typeof SecurityScreen | undefined;
  RecoveryScreen: typeof RecoveryScreen | undefined;
  SuccessTransaction: DetailsClientTransaction;
  CodeRecoveryScreen: typeof CodeRecoveryScreen | undefined;

  Home: { name: string };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Initial">
        <Stack.Screen name="Initial" component={InitialPage} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Informations" component={Informations} />
        <Stack.Screen name="Password" component={PasswordScreen} />
        <Stack.Screen name="BankInformations" component={BankInformations} />
        <Stack.Screen name="Analising" component={AnalisingView} />
        <Stack.Screen name="Aproved" component={AprovedScreen} />
        <Stack.Screen name="SuccessTransaction" component={SuccessTransaction} />
        <Stack.Screen name="Denied" component={DeniedScreen} />
        <Stack.Screen name="Dashboard" component={DashBoardScreen} />
        <Stack.Screen name="Simulation" component={SimulationScreen} />
        <Stack.Screen name="EditDataUserCustomer" component={EditDataUserCustomer} />
        <Stack.Screen name="DashboardTransacoes" component={DashTransacoes} />
        <Stack.Screen name="InformationsClient" component={InformationsClient} />
        <Stack.Screen name="AddressClient" component={AddressClient} />
        <Stack.Screen name="DataBanks" component={DataBanks} />
        <Stack.Screen name="DetailsTransection" component={DetailsTransection} />
        <Stack.Screen name="PersonalDataScreen" component={PersonalDataScreen} />
        <Stack.Screen name="EditAdressScreen" component={EditAdressScreen} />
        <Stack.Screen name="SecurityScreen" component={SecurityScreen} />
        <Stack.Screen name="RecoveryScreen" component={RecoveryScreen} />
        <Stack.Screen name="CodeRecoveryScreen" component={CodeRecoveryScreen} />
        <Stack.Screen name="ProposalData" component={ProposalData} />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            headerLeft: () => (
              <View style={styles.backButton}>
                <Feather name="chevron-left" size={16} color="#007AFF" />
                <Text style={styles.backButtonText} onPress={navigation.goBack}>
                  Back
                </Text>
              </View>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  backButton: {
    flexDirection: 'row',
    paddingLeft: 20,
  },
  backButtonText: {
    color: '#007AFF',
    marginLeft: 4,
  },
});
