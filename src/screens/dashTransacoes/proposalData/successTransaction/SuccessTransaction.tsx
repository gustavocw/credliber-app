import CheckIcon from '@assets/icons/dash/checkIcon';
import ExitIcon from '@assets/icons/dash/exitIcon';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@routes';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import { style } from './styles/index.style';
type DetailsSuccessTransactionRouteProp = RouteProp<RootStackParamList, 'SuccessTransaction'>;
type SuccessParam = StackNavigationProp<RootStackParamList>;

export const SuccessTransaction = () => {
  const navigation = useNavigation<SuccessParam>();
  const route = useRoute<DetailsSuccessTransactionRouteProp>();
  const transacao = route.params?.data;
  const formattedValue = transacao
    ? (transacao.value / 100).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      })
    : '';

  return (
    <>
      <View style={style.container}>
        <View style={style.titleContainer}>
          <TouchableOpacity
            style={style.goBackButton}
            onPress={() => navigation.navigate('Dashboard')}>
            <ExitIcon style={style.icon} />
          </TouchableOpacity>
        </View>
        <View style={style.containerDash}>
          <View style={style.dash}>
            <View>
              <CheckIcon />
            </View>
            <Text style={style.nameDash}>Proposta Realizada</Text>
            <Text style={style.description}>
              A proposta esta em andamento. Você receberá uma notificação caso a transação for
              concluída.
            </Text>
          </View>
          <View style={style.containerDetails}>
            <View style={style.columLeft}>
              <Text style={style.titleDetails}>Valor</Text>
              <Text style={style.value}>{formattedValue}</Text>
              <View style={{ flexDirection: 'row', width: 370 }}>
                <Text style={style.toName}>Para </Text>
                <Text style={style.name}>{transacao?.customer.name}</Text>
              </View>
            </View>
          </View>
          <View style={style.containerButton}>
            <TouchableOpacity style={style.button}>
              <Icon name="bars" size={25} color="#000000" />
              <Text
                style={{
                  fontSize: 17,
                  left: 10,
                  fontFamily: 'Montserrat_500Medium',
                }}>
                Acessar comprovante
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};
