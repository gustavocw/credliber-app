import ArrowRightWhite from '@assets/icons/dash/arrowRightWhite';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@routes';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type RegisterScreenNavigationProps = StackNavigationProp<
  RootStackParamList,
  'Login' | 'Informations'
>;
const ContinueButtonCenter: React.FC<any> = ({ screen }) => {
  const navigation = useNavigation<RegisterScreenNavigationProps>();

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate(screen)} style={styles.continueButton}>
        <View style={styles.continueButtonContent}>
          <Text style={styles.continueButtonText}>Continuar</Text>
          <ArrowRightWhite style={styles.arrow} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  continueButton: {
    backgroundColor: '#EA0356',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 50,
    marginBottom: 20,
    marginTop: 10,
    flexDirection: 'row',
    width: 326,
    height: 52,
    padding: 16,
    gap: 10,
  },
  continueButtonText: {
    color: 'white',
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  arrow: {
    marginLeft: 10,
  },
  continueButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default ContinueButtonCenter;
