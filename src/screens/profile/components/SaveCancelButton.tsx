import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@routes';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type PersonalDataScreenParams = StackNavigationProp<RootStackParamList>;

interface SaveCancelButtonProps {
  onSave: () => void;
  onCancel?: () => void;
}

const SaveCancelButton: React.FC<SaveCancelButtonProps> = ({ onSave, onCancel }) => {
  const navigation = useNavigation<PersonalDataScreenParams>();

  const handleCancel = onCancel || navigation.goBack;

  return (
    <View style={style.buttonContainer}>
      <TouchableOpacity onPress={handleCancel} style={style.cancelButton}>
        <Text style={style.buttonTextCancel}>Cancelar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onSave} style={style.confirmButton}>
        <Text style={style.buttonTextConfirm}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SaveCancelButton;

export const style = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
    gap: 10,
  },
  confirmButton: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 100,
    backgroundColor: '#EA0356',
    marginRight: 10,
  },
  buttonTextConfirm: {
    color: '#FFFFFF',
    fontFamily: 'Montserrat_600SemiBold',
  },
  buttonTextCancel: {
    color: '#EA0356',
    fontFamily: 'Montserrat_600SemiBold',
  },
  cancelButton: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 100,
    backgroundColor: '#F7F7F7',
    shadowColor: '#13151D',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
});
