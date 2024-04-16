import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { CheckBox } from 'react-native-elements';

type Props = {
  label: string;
  onCheck: () => void;
  isChecked?: boolean;
};

const CheckboxCred: React.FC<Props> = ({ label, onCheck, isChecked }) => {
  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <CheckBox
        checked={isChecked}
        onPress={onCheck}
        textStyle={styles.checkbox}
        checkedColor="black"
        uncheckedColor="#E5E5E5"
        right
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 165,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 0.5,
    borderColor: '#9F9F9F',
    borderRadius: 8,
    paddingHorizontal: 5,
    marginTop: 10,
  },
  checkbox: {
    width: 10,
    height: 10,
  },
});

export default CheckboxCred;
