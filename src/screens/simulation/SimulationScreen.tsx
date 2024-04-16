import ContinueButton from '@components/buttonNext';
import { ButtonBack } from '@components/returnScreen/buttonBack';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@routes';
import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { style } from './styles/index.style';

type SimulationProp = StackNavigationProp<RootStackParamList, 'Simulation'>;

export const SimulationScreen = () => {
  const navigation = useNavigation<SimulationProp>();
  const [key, setKey] = useState('');

  return (
    <ScrollView style={{ flex: 1 }} keyboardShouldPersistTaps="handled">
      <View style={style.container}>
        <View style={style.header}>
          <ButtonBack
            title="Simular transação"
            subTitle="Insira a chave de identificação do destinatário"
          />
        </View>
        <View style={style.key}>
          <Text style={style.label}>Chave de identificação</Text>
          <TextInput
            placeholder="Digite a chave"
            style={style.inputArea}
            keyboardType="numeric"
            onChangeText={setKey}
            autoFocus
          />
        </View>
        <View style={style.containerButton}>
          <ContinueButton
            navigation={navigation}
            navigateTo="DashboardTransacoes"
            data={{ chave: key }}
          />
        </View>
      </View>
    </ScrollView>
  );
};
