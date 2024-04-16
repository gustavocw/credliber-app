import CheckIcon from '@assets/icons/dash/checkIcon';
import { Text, View } from 'react-native';

import { styles } from './styles/index.style';
import ContinueButton from '../components/continueButton';

export const AprovedScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.checkIcon}>
          <CheckIcon style={styles.iconMid} />
        </View>
        <View style={styles.texts}>
          <Text style={styles.h1}>Cadastro aprovado</Text>
          <View style={styles.p}>
            <Text style={styles.textAproved}>
              Parabéns! Seu cadastro foi aprovado com sucesso. Bem-vindo à nossa comunidade!
            </Text>
          </View>
        </View>
        <View style={styles.containerButton}>
          <ContinueButton screen="Denied" />
        </View>
      </View>
    </>
  );
};
