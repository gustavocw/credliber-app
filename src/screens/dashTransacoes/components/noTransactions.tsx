import React from 'react';
import { View, Text } from 'react-native';
import IconMaterialComunity from 'react-native-vector-icons/MaterialCommunityIcons';

import { style } from '../styles/index.style';

const NoTransactions = () => {
  return (
    <View style={style.contentTransactions}>
      <IconMaterialComunity
        name="file-search-outline"
        size={25}
        color="#000000"
        style={style.iconSearchTransacoes}
      />
      <Text style={style.textTransacoesBody}>Nenhuma transação encontrada</Text>
      <View style={style.containerTransacoesBody}>
        <Text style={style.textBodyTransacoes}>
          Envie sua proposta ao destinatário para realizar sua primeira transação{' '}
        </Text>
      </View>
    </View>
  );
};

export default NoTransactions;
