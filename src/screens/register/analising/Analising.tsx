import WaitRegister from '@assets/icons/dash/waitRegister';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@routes';
import { Text, View, TouchableOpacity } from 'react-native';

import { styles } from './styles/index.styles';
import ContinueButton from '../components/continueButton';

type AnalisingViewProp = StackNavigationProp<RootStackParamList, 'Analising'>;
export const AnalisingView = () => {
  const navigation = useNavigation<AnalisingViewProp>();
  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerImageIcon}>
          <WaitRegister style={styles.iconMid} />
        </View>
        <View style={styles.title}>
          <Text style={styles.h1}>Analisando seu {'\n'} Cadastro</Text>
          <View style={styles.containerText}>
            <Text style={styles.textP}>
              Estamos processando seu cadastro. nossa equipe irá confirmar seus dados, para saber se
              a analise foi concluída, clique “Atualizar”.
            </Text>
          </View>
        </View>
        <View style={styles.buttonsScreenAprove}>
          <ContinueButton screen="Aproved" />
          <TouchableOpacity
            style={styles.buttonQuit}
            onPress={() => navigation.navigate('Initial')}>
            <Text style={styles.textButtonQuit}>Sair</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
