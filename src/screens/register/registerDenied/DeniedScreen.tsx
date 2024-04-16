import ErrorIcon from '@assets/icons/dash/errorIcon';
import { Text, View } from 'react-native';

import { Styles } from './styles/index.style';
import ContinueButton from '../components/continueButton';

export const DeniedScreen = () => {
  return (
    <>
      <View style={Styles.container}>
        <View style={Styles.checkIcon}>
          <ErrorIcon style={Styles.iconMid} />
        </View>
        <View style={Styles.texts}>
          <Text style={Styles.h1}>Cadastro negado</Text>
          <View style={Styles.p}>
            <Text style={Styles.textAproved}>
              Desculpe, seu cadastro foi negado. Por favor, verifique as informações fornecidas e
              tente novamente.
            </Text>
          </View>
        </View>
        <View style={Styles.containerButton}>
          <ContinueButton screen="Initial" />
        </View>
      </View>
    </>
  );
};
