import CheckMark from '@assets/icons/dash/checkMark';
import ClockIconMark from '@assets/icons/dash/clockIconMark';
import ErrorIconMark from '@assets/icons/dash/errorMark';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@routes';
import { Transaction } from '@services/types/transactions.type';
import React from 'react';
import { FlatList, TouchableOpacity, View, Text, ViewStyle } from 'react-native';
import ClockIcon from 'react-native-vector-icons/Octicons';

interface ListTransactionProps {
  transactions: Transaction[];
  style: {
    checkBox: ViewStyle;
    iconCheck: ViewStyle;
    textBox: ViewStyle;
    textHour: ViewStyle;
    textPrice: ViewStyle;
    textTaxa: ViewStyle;
  };
}
type DashTypeNavigation = StackNavigationProp<RootStackParamList, 'Dashboard'>;
const ListTransaction = ({ transactions, style }: ListTransactionProps) => {
  const navigator = useNavigation<DashTypeNavigation>();

  return (
    <FlatList
      data={transactions}
      style={{ flex: 1 }}
      renderItem={({ item: subItem }) => {
        const formattedTime = new Date(subItem.createdAt).toLocaleTimeString('pt-BR', {
          day: 'numeric',
          month: 'short',
          hour: '2-digit',
          minute: '2-digit',
        });
        const commissionRate = Math.round((subItem.value / subItem.commission) * 10) / 10;
        const commissionFormated = subItem
          ? (subItem.commission / 100).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })
          : 'R$0,00';
        const valueFormatted = subItem
          ? (subItem.value / 100).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })
          : 'R$0,00';
        return (
          <TouchableOpacity
            onPress={() =>
              navigator.navigate('DetailsTransection', {
                transacao: {
                  _id: subItem._id,
                  customer: subItem.customer,
                  value: subItem.value,
                  createdAt: new Date(subItem.createdAt).toLocaleTimeString('pt-BR', {
                    day: 'numeric',
                    month: 'short',
                    hour: '2-digit',
                    minute: '2-digit',
                  }),
                  status: subItem.status,
                  commission: subItem.commission,
                  seller: subItem.seller,
                  team: subItem.team,
                  contract: 0,
                },
              })
            }
            style={style.checkBox}>
            {subItem.status === 'COMPLETED' ? (
              <CheckMark style={style.iconCheck} />
            ) : subItem.status === 'PENDING' ? (
              <ClockIconMark style={style.iconCheck} />
            ) : subItem.status === 'REFUSED' ? (
              <ErrorIconMark style={style.iconCheck} />
            ) : null}
            <View style={style.textBox}>
              <Text>{subItem.customer.name}</Text>
              <Text style={style.textHour}>
                <ClockIcon name="clock" size={10} color="#9F9F9F" /> {formattedTime}
              </Text>
            </View>
            <View style={style.textPrice}>
              <Text>{valueFormatted}</Text>
              <Text style={style.textTaxa}>{`${commissionFormated} (${commissionRate}%)`}</Text>
            </View>
          </TouchableOpacity>
        );
      }}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item._id}
    />
  );
};

export default ListTransaction;
