import ArrowRightWhite from '@assets/icons/dash/arrowRightWhite';
import { ButtonBack } from '@components/returnScreen/buttonBack';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@routes';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { style } from './styles/index.style';

type SimulationProp = StackNavigationProp<RootStackParamList, 'Simulation'>;
type EditDataUserCustomerParams = RouteProp<RootStackParamList, 'EditDataUserCustomer'>;

export const EditDataUserCustomer = () => {
  const navigation = useNavigation<SimulationProp>();
  const params = useRoute<EditDataUserCustomerParams>();
  const labelData = params.params?.label;
  const valueData = params.params?.value;

  return (
    <ScrollView style={{ flex: 1 }} keyboardShouldPersistTaps="handled">
      <View style={style.container}>
        <View style={style.header}>
          <ButtonBack title={`Editar ${labelData}`} />
        </View>
        <View style={style.key}>
          <Text style={style.label}>{labelData}</Text>
          <TextInput style={style.inputArea} value={valueData} autoFocus />
        </View>
        <View style={style.containerButton}>
          <TouchableOpacity style={style.continueButton}>
            <View style={style.continueButtonContent}>
              <Text style={style.continueButtonText}>Confirmar e realizar proposta</Text>
              <ArrowRightWhite style={style.arrow} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
