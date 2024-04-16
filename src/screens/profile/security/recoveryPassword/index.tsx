import { ButtonBack } from '@components/returnScreen/buttonBack';
import ContinueButtonCenter from '@screens/register/components/continueButton';
import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { style } from './styles/index.style';

export const RecoveryScreen = () => {
  return (
    <ScrollView style={{ flex: 1 }} keyboardShouldPersistTaps="handled">
      <View style={style.container}>
        <View style={style.header}>
          <ButtonBack />
        </View>
        <View style={style.TitleBox}>
          <Text style={style.title}>Redefinir senha</Text>
          <Text style={style.description}>
            Digite seu e-mail abaixo para receber instruções sobre como redefinir sua senha.
          </Text>
        </View>
        <View style={style.key}>
          <Text style={style.label}>E-mail</Text>
          <TextInput
            placeholder="exemplo@dominio.com"
            style={style.inputArea}
            keyboardType="email-address"
            autoFocus
          />
        </View>
        <View>
          <ContinueButtonCenter screen="CodeRecoveryScreen" />
        </View>
      </View>
    </ScrollView>
  );
};
